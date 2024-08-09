import React, { useState } from "react"
import './menu.css'
const Conditions = ({ setActiveComponent }) => {
    const [priceButtonName, setPriceButtonName] = useState("SELECT");
    const [volumeButtonName, setVolumeButtonName] = useState("SELECT");
    const [showPriceDropdown, setShowPriceDropdown] = useState(false);
    const [showVolumeDropdown, setShowVolumeDropdown] = useState(false);

    const handlePriceSelectClick = () => {
        setShowPriceDropdown(!showPriceDropdown);
    }

    const handleVolumeSelectClick = () => {
        setShowVolumeDropdown(!showVolumeDropdown);
    }

    const handlePriceOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        setShowPriceDropdown(false);

        if (option === "Above") {
            setPriceButtonName("Above");
        }

        else if (option === "Below") {
            setPriceButtonName("Below");
        }
    };

    const handleVolumeOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        setShowVolumeDropdown(false);

        if (option === "Above") {
            setVolumeButtonName("Above");
        }

        else if (option === "Below") {
            setVolumeButtonName("Below");
        }
    };

    const handleClose = () => {
        setActiveComponent("");
    }

    const handleSave = () => {
        // Looks very confusing when two functions do the exact same thing!
        // In the future though, this function should use the inputs to make a node out of it
        setActiveComponent("");
    }

    return (
        <div className="menu-container">
            <div className="vertical-menu">
                <div className="select-container">

                    <span>If</span>
                    <input type="text" placeholder="Symbol"/>
                    <span>&nbsp; is</span>
                    <button className="select-button" onClick={handlePriceSelectClick}>
                        {priceButtonName}
                    </button>

                    <span>&nbsp; $</span>
                    <input type="text" placeholder="Price"/>
                </div>
                {showPriceDropdown && (
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item" onClick={() => handlePriceOptionClick('Above')}>Above</a>
                        <a href="#" className="dropdown-item" onClick={() => handlePriceOptionClick('Below')}>Below</a>
                    </div>
                )}
                 <br></br>
                <div className="select-container">
                <span>If Volume is </span>
                <button className="select-button" onClick={handleVolumeSelectClick}>
                        {volumeButtonName}
                </button>
                <span>&nbsp;</span>
                <input type="text" placeholder="Percent"/>
                <span>&nbsp; %</span>
                </div>
                {showVolumeDropdown && (
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item" onClick={() => handleVolumeOptionClick('Above')}>Above</a>
                        <a href="#" className="dropdown-item" onClick={() => handleVolumeOptionClick('Below')}>Below</a>
                    </div>
                )}
                <div className="button-container">
                    <button
                        className="custom-button"
                        onClick={handleClose}>Back
                    </button>
                    <button
                        className="custom-button"
                        onClick={handleSave}>Save
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Conditions;