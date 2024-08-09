import React, { useState } from "react";
import Types from "./types";
import './menu.css';

const Menu = ({ setActiveComponent }) => {
    const [activeItem, setActiveItem] = useState("");

    // Set active item is used to make the css of selected item different,
    // Set active component is used in the editor menu to switch between components in the menu based on clicks
    const handleItemClick = (item) => {
        console.log("Clicked on", item);
        setActiveItem(item);
        setActiveComponent(item);
    };

    return (
        <div className="menu-container">
            <div className="vertical-menu">
                <a 
                    href="#" 
                    className={activeItem === "Types" ? "active" : ""}
                    onClick={() => handleItemClick("Types")}
                >
                    Types
                </a>
                {/* This is wrong since we need to hide the menu component while displaying any specific item component
                {activeItem === "Types" && <Types/>} */}
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
        </div>
    );
};

export default Menu;
