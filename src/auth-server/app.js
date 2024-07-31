import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

var adapter = new FileSync("./database.json");
var db = low(adapter);

// Initialize Express app
const app = express()

// Define a JWT secret key. This should be isolated by using env variables for security
const jwtSecretKey = "dsfdsfsdfdsvcsvdfgefg"

// Set up CORS and JSON middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic home route for the API
app.get("/", (_req, res) => {
    res.send("Auth API.\nPlease use POST /auth & POST /verify for authentication")
})

// The auth endpoint that creates a new user record or logs a user based on an existing record
app.post("/auth", (req, res) => {
    
    const { email, password } = req.body;

    // Look up the user entry in the database
    const user = db.get("users").value().filter(user => email === user.email)

    // If found, compare the hashed passwords and generate the JWT token for the user
    if (user.length === 1) {
        bcrypt.compare(password, user[0].password, function (_err, result) {
            if (!result) {
                return res.status(401).json({ message: "Invalid password" });
            } else {
                let loginData = {
                    email,
                    signInTime: Date.now(),
                };

                const token = jwt.sign(loginData, jwtSecretKey);
                res.status(200).json({ message: "success", token });
            }
        });
    // If no user is found, hash the given password and create a new entry in the auth db with the email and hashed password
    } else if (user.length === 0) {
        bcrypt.hash(password, 10, function (_err, hash) {
            console.log({ email, password: hash })
            db.get("users").push({ email, password: hash }).write()

            let loginData = {
                email,
                signInTime: Date.now(),
            };

            const token = jwt.sign(loginData, jwtSecretKey);
            res.status(200).json({ message: "success", token });
        });

    }


})

// The verify endpoint that checks if a given JWT token is valid
app.post('/verify', (req, res) => {
    const tokenHeaderKey = "jwt-token";
    const authToken = req.headers[tokenHeaderKey];
    try {
      const verified = jwt.verify(authToken, jwtSecretKey);
      if (verified) {
        return res
          .status(200)
          .json({ status: "logged in", message: "success" });
      } else {
        // Access Denied
        return res.status(401).json({ status: "invalid auth", message: "error" });
      }
    } catch (error) {
      // Access Denied
      return res.status(401).json({ status: "invalid auth", message: "error" });
    }

})

// An endpoint to see if there's an existing account for a given email address
app.post('/check-account', (req, res) => {
    try {
        const { email } = req.body;
        console.log(req.body);

        const user = db.get('users').value().filter(user => email === user.email);

        console.log(user);

        res.status(200).json({
            status: user.length === 1 ? 'User exists' : 'User does not exist', userExists: user.length === 1
        });
    } catch (error) {
        console.error('Error in /check-account endpoint:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

// Endpoint to get all bots for a user
app.post('/get-bots', (req, res) => {
    try {
        const { email } = req.body;
        console.log(req.body);

        // Find the user by email
        const user = db.get('users').find({ email }).value();
        console.log(user);

        if (user) {
            res.status(200).json({ message: 'Bots retrieved successfully', bots: user.bots || [] });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error in /get-bots endpoint:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/delete-bot', (req, res) => {
    try {
        const { email, botName } = req.body;
        console.log(req.body);

        // Find the user by email
        const user = db.get('users').find({ email }).value();
        console.log(user);

        if (user) {
            // Remove the bot from the user's bots array
            user.bots = user.bots.filter(bot => bot !== botName);

            // Update the user document in the database
            db.get('users').find({ email }).assign({ bots: user.bots }).write();

            res.status(200).json({ message: 'Bot deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error in /delete-bot endpoint:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(3080, () => {console.log('server is running on http://localhost:3080')});