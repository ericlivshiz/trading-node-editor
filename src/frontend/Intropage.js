import React from "react";
import { useNavigate } from "react-router-dom";
import './Intropage.css';

function IntroPage() {
    const navigate = useNavigate();

    return (
        <div className="intro-container">
            <div className="welcome-section">
                <h2 className="sub-title">Welcome to the Automata Trading App</h2>
                <p className="description">
                    This is a trading app that allows you to create and run trading bots.
                    <br />Click on the Bot Vault to see the bots you have created.
                    <br />Click on Learn to learn more about trading and how to create bots.
                    <br />Click on Profile to see your profile and account settings.
                </p>
            </div>
        </div>
    );
}

export default IntroPage;

