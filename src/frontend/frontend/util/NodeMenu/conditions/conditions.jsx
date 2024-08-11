import React, { useState, useEffect } from "react";
import './../menu.css';

const Conditions = ({ setActiveComponent }) => {
    const [priceButtonName, setPriceButtonName] = useState("SELECT");
    const [volumeButtonName, setVolumeButtonName] = useState("SELECT");
    const [showPriceDropdown, setShowPriceDropdown] = useState(false);
    const [showVolumeDropdown, setShowVolumeDropdown] = useState(false);
    const [symbolValue, setSymbolValue] = useState("");
    const [priceValue, setPriceValue] = useState("");
    const [percentValue, setPercentValue] = useState("");
    const [isSaveEnabled, setIsSaveEnabled] = useState(false);
    const [topEnabled, setTopEnabled] = useState(false);
    const [bottomEnabled, setBottomEnabled] = useState(false);
    const [userSaved, setUserSaved] = useState(false);
    const [saveButtonName, setSaveButtonName] = useState("Save");

    const handleSymbolChange = (event) => {
        setSymbolValue(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPriceValue(event.target.value);
    };

    const handlePercentChange = (event) => {
        setPercentValue(event.target.value);
    };

    const handlePriceSelectClick = () => {
        setShowPriceDropdown(!showPriceDropdown);
    };

    const handleVolumeSelectClick = () => {
        setShowVolumeDropdown(!showVolumeDropdown);
    };

    const handlePriceOptionClick = (option) => {
        setShowPriceDropdown(false);
        setPriceButtonName(option);
    };

    const handleVolumeOptionClick = (option) => {
        setShowVolumeDropdown(false);
        setVolumeButtonName(option);
    };

    const handleClose = () => {
        setActiveComponent("");
    };

    const handleSave = () => {
        if (saveButtonName === "Save") {
            setUserSaved(true);
            setSaveButtonName("Save & Exit");
        }

        if (saveButtonName === "Save & Exit") {
            setActiveComponent("");
        }
    };

    useEffect(() => {
        const top = !!symbolValue && !!priceValue && priceButtonName !== "SELECT";
        const bottom = !!percentValue && volumeButtonName !== "SELECT";

        setTopEnabled(top);
        setBottomEnabled(bottom);
        setIsSaveEnabled(top || bottom);
    }, [symbolValue, priceValue, priceButtonName, percentValue, volumeButtonName]);

    return (
        <div className="menu-container">
            <div className="vertical-menu">
                {topEnabled && userSaved ? (
                    <h2>If {symbolValue} is {priceButtonName} ${priceValue}</h2>
                ) : (
                    <div className="select-container">
                        <span>If</span>
                        <input
                            className="custom-input"
                            type="text"
                            placeholder="Symbol"
                            value={symbolValue}
                            onChange={handleSymbolChange}
                        />
                        <span>is</span>
                        <button className="select-button" onClick={handlePriceSelectClick}>
                            {priceButtonName}
                        </button>
                        <span>$</span>
                        <input
                            className="custom-input"
                            type="text"
                            placeholder="Price"
                            value={priceValue}
                            onChange={handlePriceChange}
                        />
                    </div>
                )}

                {showPriceDropdown && (
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item" onClick={() => handlePriceOptionClick('Above')}>Above</a>
                        <a href="#" className="dropdown-item" onClick={() => handlePriceOptionClick('Below')}>Below</a>
                    </div>
                )}

                <br />

                {bottomEnabled && userSaved ? (
                    <h2>If Volume is {volumeButtonName} {percentValue} %</h2>
                ) : (
                    <div className="select-container">
                        <span>If Volume is</span>
                        <button className="select-button" onClick={handleVolumeSelectClick}>
                            {volumeButtonName}
                        </button>
                        <span>&nbsp;</span>
                        <input
                            className="custom-input"
                            type="text"
                            placeholder="Percent"
                            value={percentValue}
                            onChange={handlePercentChange}
                        />
                        <span> %</span>
                    </div>
                )}

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
                        onClick={handleSave}
                        disabled={!isSaveEnabled}
                    >{saveButtonName}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Conditions;
