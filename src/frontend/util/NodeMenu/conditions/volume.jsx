import React, { useState, useContext } from "react";
import './../menu.css';
import { ConditionsContext } from './context';

const Volume = ({ setActiveConditionComponent }) => {
    const [volumeConditionState, setVolumeConditionState] = useState({
        percentValue: "",
        ButtonName: "SELECT",
        showDropDown: false,
        Enabled: false,
    });

    const { addCondition } = useContext(ConditionsContext);

    const handlePercentChange = (event) => {
        setVolumeConditionState({
            ...volumeConditionState,
            percentValue: event.target.value,
        });
    };

    const handleSelectClick = () => {
        setVolumeConditionState({
            ...volumeConditionState,
            showDropDown: !volumeConditionState.showDropDown,
        });
    };

    const handleOptionClick = (option) => {
        setVolumeConditionState({
            ...volumeConditionState,
            ButtonName: option,
            showDropDown: false,
        });
    };

    const handleExitClick = () => {
        setActiveConditionComponent(null);
    };

    const handleSaveClick = () => {
        addCondition(`If Volume is ${volumeConditionState.ButtonName} ${volumeConditionState.percentValue}%`);
        setActiveConditionComponent(null);
    };

    return (
        <div className="menu-container">
            <div className="vertical-menu">
                <button className="exit-button" onClick={handleExitClick}>X</button>
                <div className="select-container">
                    <span>If Volume is</span>
                    <button className="select-button" onClick={handleSelectClick}>
                        {volumeConditionState.ButtonName}
                    </button>
                    <span>&nbsp;</span>
                    <input
                        className="custom-input"
                        type="text"
                        placeholder="Percent"
                        value={volumeConditionState.percentValue}
                        onChange={handlePercentChange}
                    />
                    <span> %</span>
                </div>
                {volumeConditionState.showDropDown && (
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item" onClick={() => handleOptionClick('Above')}>Above</a>
                        <a href="#" className="dropdown-item" onClick={() => handleOptionClick('Below')}>Below</a>
                    </div>
                )}
                <div className="button-container">
                    <button className="custom-button" onClick={handleSaveClick}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Volume;
