import React, { useState, useEffect } from "react";
import './menu.css';

const Types = ({ setActiveComponent }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [buttonName, setButtonName] = useState("SELECT");
    const [isSaveEnabled, setIsSaveEnabled] = useState(false);

    const handleSelectClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        setShowDropdown(false);
        
        if (option === "Stocks")
        {
            setButtonName("Stocks");
        }

        else if (option === "Crypto")
        {
            setButtonName("Crypto");
        }
    };

    const handleBackClick = () => {
        setActiveComponent("");
    };

    const handleSaveClick = () => {
        // Save functionality can be added here
        setActiveComponent("");
    };

    const validateSave = () =>
    {
        const enabled = buttonName !== "SELECT";

        return enabled;
    }

    useEffect(() => {
        setIsSaveEnabled(validateSave());
    }, [buttonName]);

    return (
        <div className="types-menu-container">
            <div className="vertical-menu">
                <div className="select-container">            
                    <button className="select-button" onClick={handleSelectClick}>
                        {buttonName}
                    </button>
                    <span> &nbsp; Trading Bot </span>
                </div>
                {showDropdown && (
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item" onClick={() => handleOptionClick('Stocks')}>Stocks</a>
                        <a href="#" className="dropdown-item" onClick={() => handleOptionClick('Crypto')}>Crypto</a>
                    </div>
                )}
                <div className="button-container">
                    <button className="custom-button" onClick={handleBackClick}>
                        Back
                    </button>
                    <button className="custom-button" onClick={handleSaveClick}
                    disabled={!isSaveEnabled}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Types;
