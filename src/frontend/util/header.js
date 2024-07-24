import React from "react";
import './header.css'
import {useNavigate} from "react-router-dom"

function Header() {
    return(
        <div className="header">
            <a href="/" className="logo">Trading App</a>
            <div className="header-right">
            <a className="bot-vault" href="bot-vault">Bot Vault</a>
            <a href="/contact">Contact</a>
            <a href="/FAQ">FAQ</a>
            <a href="/profile">Profile</a>
            </div>
        </div>
    );
}

export default Header;