import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "./util/header";
import BotMenu from './util/botMenu'
import './home.css'
import IntroPage from "./Intropage";

const Home = (props) => {
    const { loggedIn, email, setLoggedIn} = props;
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
                <IntroPage />
                </div>
            ) : (
                <div className="mainContainer">
                    <div className="loginContainer">
                        <div className="titleContainer">
                            <div>Welcome!</div>
                        </div>
                        <div>
                            This is the home page.
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
