import React, { useState } from "react";
import './menu.css';

const Menu = ({ setActiveComponent }) => {
    const [activeItem, setActiveItem] = useState("");
    const [exitButtonClick, setExitButtonClick] = useState(false);

    // Set active item is used to make the css of selected item different,
    // Set active component is used in the editor menu to switch between components in the menu based on clicks
    const handleItemClick = (item) => {
        console.log("Clicked on", item);
        setActiveItem(item);
        setActiveComponent(item);
    };

    const handleExitClick = () => {
        setExitButtonClick(true);
    };

    return (
        !exitButtonClick && (
            <div className="menu-container">
                <div className="vertical-menu">
                    <a 
                        href="#" 
                        className={activeItem === "Types" ? "active" : ""}
                        onClick={() => handleItemClick("Types")}
                    >
                        Types
                    </a>
                    <a 
                        href="#" 
                        className={activeItem === "Triggers" ? "active" : ""}
                        onClick={() => handleItemClick("Triggers")}
                    >
                        Triggers
                    </a>
                    <a 
                        href="#" 
                        className={activeItem === "Conditions" ? "active" : ""}
                        onClick={() => handleItemClick("Conditions")}
                    >
                        Conditions
                    </a>
                    <a 
                        href="#" 
                        className={activeItem === "Actions" ? "active" : ""}
                        onClick={() => handleItemClick("Actions")}
                    >
                        Actions
                    </a>
                </div>
                <button className="exit-button" onClick={handleExitClick}>x</button>
            </div>
        )
    );
};

export default Menu;
