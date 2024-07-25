import React from "react";
import './nodeEditorMenu.css';

const NodeEditorMenu = () => {
    const conditions = ["if", "if-else", "while"];
    const actions = ["Send email", "Place Buy", "Place Sell"];
    const customs = ["Input Code", "Create Variables"];

    return (
        <div className="menu-container">
            <div className="menu-section">
                <h3>Conditions</h3>
                <ul>
                    {conditions.map((condition, index) => (
                        <li key={index} className="menu-item">{condition}</li>
                    ))}
                </ul>
            </div>
            <div className="menu-section">
                <h3>Actions</h3>
                <ul>
                    {actions.map((action, index) => (
                        <li key={index} className="menu-item">{action}</li>
                    ))}
                </ul>
            </div>
            <div className="menu-section">
                <h3>Custom</h3>
                <ul>
                    {customs.map((custom, index) => (
                        <li key={index} className="menu-item">{custom}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NodeEditorMenu;
