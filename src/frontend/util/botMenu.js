import {React, useState} from "react";
import './botMenu.css';

const BotMenu = ({ setActiveComponent }) => {
    const [activeItem, setActiveItem] = useState("Saved Bots");

    const handleItemClick = (item) => {
        console.log("Clicked on", item);
        setActiveItem(item);
        setActiveComponent(item);
    };

    return (
        <div className="horizontal-menu">
            <a 
                href="#" 
                className={activeItem === "Saved Bots" ? "active" : ""}
                onClick={() => handleItemClick("Saved Bots")}
            >
                Saved Bots
            </a>
            <a 
                href="#" 
                className={activeItem === "Create New Bot" ? "active" : ""}
                onClick={() => handleItemClick("Create New Bot")}
            >
                Create New Bot
            </a>
            <a 
                href="#" 
                className={activeItem === "Backtest" ? "active" : ""}
                onClick={() => handleItemClick("Backtest")}
            >
                Backtest
            </a>
        </div>
    );
};

export default BotMenu;

