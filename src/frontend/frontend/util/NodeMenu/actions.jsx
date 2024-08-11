import React, { useState, useEffect } from "react"
import './menu.css'
const Actions = ({ setActiveComponent }) => {
    const [buttonName, setButtonName] = useState("SELECT");
    const [showDropdown, setShowDropdown] = useState(false);
    const [isSaveEnabled, setIsSaveEnabled] = useState(false);

    const handleSelectClick = () => {
        setShowDropdown(!showDropdown);
    }

    const handleOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        setShowDropdown(false);

        if (option === "Email") {
            setButtonName("Email");
        }

        else if (option === "SMS") {
            setButtonName("SMS");
        }
    };


    const handleClose = () => {
        setActiveComponent("");
    }

    const handleSave = () => {
        setActiveComponent("");
    }

    const validateSave = () =>
    {
        const enabled = buttonName !== "SELECT";

        return enabled;
    }

    useEffect(() => {
        setIsSaveEnabled(validateSave());
    }, [buttonName]);

    return (
        <div className="menu-container">
            <div className="vertical-menu">
                <div className="select-container">
                    <span>Send </span>
                    <button className="select-button" onClick={handleSelectClick}>
                        {buttonName}
                    </button>
                    <span>Notification</span>
                </div>
                {showDropdown && (
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item" onClick={() => handleOptionClick('Email')}>Email</a>
                        <a href="#" className="dropdown-item" onClick={() => handleOptionClick('SMS')}>SMS</a>
                    </div>
                )}
                <div className="button-container">
                    <button
                        className="custom-button"
                        onClick={handleClose}>Back
                    </button>
                    <button
                        className="custom-button"
                        onClick={handleSave}
                        disabled={!isSaveEnabled}
                        >Save
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Actions;