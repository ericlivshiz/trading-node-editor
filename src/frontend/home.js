import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './util/header'; // Import the Header component

const Home = (props) => {
    const { loggedIn, email, setLoggedIn } = props;
    const navigate = useNavigate();

    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user");
            props.setLoggedIn(false);
        } else {
            navigate("/login");
        }
    };

    return (
        <div>
            {loggedIn ? (
                <div className="homeContainer">
                <Header />
                <h1>This is the Home Page!</h1>
                <p>Here we will add content about what this site is about</p>
                </div>
            ) : (
                <div className="mainContainer">
                    <div className="loginContainer">
                        <div className="titleContainer">
                            <div>Welcome!</div>
                        </div>
                        <div>
                            This is the login page.
                        </div>
                        <div className="buttonContainer">
                            <input
                                className="inputButton"
                                type="button"
                                onClick={onButtonClick}
                                value="Log in"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;

