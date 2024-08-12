import React, { useState, useContext } from "react";
import Price from "./price";
import Volume from "./volume";
import './../menu.css';
import { ConditionsContext } from './context';

const Saved = ({ setActiveComponent }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [activeConditionComponent, setActiveConditionComponent] = useState(null);
    const { conditions } = useContext(ConditionsContext);
    const [activeANDORItems, setActiveANDORItems] = useState(conditions.map(() => ""));

    const handleAdd = () => {
        setShowDropDown(!showDropDown);
    };

    const handleOptionClick = (option) => {
        setShowDropDown(false);
        if (option === 'Price') {
            setActiveConditionComponent(<Price setActiveConditionComponent={setActiveConditionComponent} />);
        } else if (option === 'Volume') {
            setActiveConditionComponent(<Volume setActiveConditionComponent={setActiveConditionComponent} />);
        }
    };

    const handleExit = () => {
        setActiveComponent("");
    };

    const handleANDORClick = (item, index) => {
        const updatedANDORItems = [...activeANDORItems];
        updatedANDORItems[index] = item;
        setActiveANDORItems(updatedANDORItems);
    };

    return (
        <>
            {activeConditionComponent ? (
                <div>
                    {activeConditionComponent}
                </div>
            ) : (
                <div className="menu-container">
                    <div className="vertical-menu">
                        <div className="header-container">
                            <button className="add-button" onClick={handleAdd}>+</button>
                            <h1 className="saved-condition-title">Saved Conditions</h1>
                            <button className="exit-button" onClick={handleExit}>x</button>
                        </div>
                        {showDropDown && (
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item" onClick={() => handleOptionClick('Price')}>Price</a>
                                <a href="#" className="dropdown-item" onClick={() => handleOptionClick('Volume')}>Volume</a>
                            </div>
                        )}
                        <div className="saved-conditions-container">
                            {conditions.length > 0 && (
                                conditions.map((condition, index) => (
                                    <div key={index}>
                                        <div className="saved-condition">
                                            <div className="saved-condition-items">Condition {index + 1}</div>
                                            <div className="saved-condition-content">{condition}</div>
                                        </div>
                                        {index < conditions.length - 1 && (
                                            <div className="condition-buttons">
                                                <button
                                                    className={`condition-button ${activeANDORItems[index] === "AND" ? "active" : ""}`}
                                                    onClick={() => handleANDORClick("AND", index)}>AND
                                                </button>
                                                <button
                                                    className={`condition-button ${activeANDORItems[index] === "OR" ? "active" : ""}`}
                                                    onClick={() => handleANDORClick("OR", index)}>OR
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Saved;


