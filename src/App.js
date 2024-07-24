import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './frontend/home';
import Login from './frontend/login';
import './App.css';
import { useEffect, useState } from 'react';
import BotVault from './frontend/bot-vault';
import Contact from './frontend/contact';
import Faq from './frontend/faq'
import Profile from './frontend/profile'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"))

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch("http://localhost:3080/verify", {
            method: "POST",
            headers: {
                'jwt-token': user.token
              }
        })
        .then(r => r.json())
        .then(r => {
            setLoggedIn('success' === r.message)
            setEmail(user.email || "")
        })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/bot-vault" element={<BotVault />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path= "/profile" element={<Profile setLoggedIn={setLoggedIn}/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
