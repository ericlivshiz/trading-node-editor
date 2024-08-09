import React from "react";
import { useNavigate } from "react-router-dom";
import AvatorTradingIcon from './../img/avatar-trading-image.png';
import './Intropage.css';

function IntroPage() {
    const navigate = useNavigate();

    return (
        <div className="intro-container">
            <div className="welcome-section">
                <h2 className="sub-title">Welcome to the Automata Trading App!</h2>
                <p className="description">
                    This is a trading app that allows you to create and run trading bots.
                    <br />Click on Bot Vault to get started making bots.
                    <br />Click on Learn to learn how to create, save, edit, and backtest your bots.
                    <br />Click on Profile to see your profile and account settings.
                </p>
            </div>
            <div className="image-section">
                <img src={AvatorTradingIcon} alt="Trading" className="intro-image" />
            </div>
        </div>
    );
}

export default IntroPage;

