import React, { useState, useContext } from "react";
import './../menu.css';
import { ConditionsContext } from './context';

const Price = ({ setActiveConditionComponent }) => {
    const [priceConditionState, setPriceConditionState] = useState({
        symbolValue: "",
        priceValue: "",
        ButtonName: "SELECT",
        showDropDown: false,
        Enabled: false,
    });

    const { addCondition } = useContext(ConditionsContext);

    const handleSymbolChange = (event) => {
        setPriceConditionState(prevState => ({
            ...prevState,
            symbolValue: event.target.value,
        }));
    };

    const handlePriceChange = (event) => {
        setPriceConditionState(prevState => ({
            ...prevState,
            priceValue: event.target.value,
        }));
    };

    const handleSelectClick = () => {
        setPriceConditionState(prevState => ({
            ...prevState,
            showDropDown: !prevState.showDropDown,
        }));
    };

    const handleOptionClick = (option) => {
        setPriceConditionState(prevState => ({
            ...prevState,
            ButtonName: option,
            showDropDown: false,
        }));
    };

    const handleSaveClick = () => {
        addCondition(`If ${priceConditionState.symbolValue} is ${priceConditionState.ButtonName} $${priceConditionState.priceValue}`);
        setActiveConditionComponent(null);
    };

    const handleExitClick = () => {
        setActiveConditionComponent(null);
    };

    return (
        <div className="menu-container">
            <div className="vertical-menu">
                <button className="exit-button" onClick={handleExitClick}>X</button>
                <div className="select-container">
                    <span>If</span>
                    <input
                        className="custom-input"
                        type="text"
                        placeholder="Symbol"
                        value={priceConditionState.symbolValue}
                        onChange={handleSymbolChange}
                    />
                    <span>is</span>
                    <button className="select-button" onClick={handleSelectClick}>
                        {priceConditionState.ButtonName}
                    </button>
                    <span>$</span>
                    <input
                        className="custom-input"
                        type="text"
                        placeholder="Price"
                        value={priceConditionState.priceValue}
                        onChange={handlePriceChange}
                    />
                </div>
                {priceConditionState.showDropDown && (
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
}

export default Price;
