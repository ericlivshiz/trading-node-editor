import React, { useState } from "react";
import Header from "./util/header";
import BotMenu from "./util/botMenu";
import SavedBots from "./savedBots";
import CreateNewBots from "./createNewBots";
import Backtest from "./backtest";
import './bot-vault.css';

const BotVault = (props) => {
    const [activeComponent, setActiveComponent] = useState("Saved Bots");
    const {email} = props;
    const renderActiveComponent = () => {
        // Based on which button is pressed in the BotMenu, we will load a diff component
        switch (activeComponent) {
            case "Saved Bots":
                return <SavedBots />;
            case "Create New Bot":
                return <CreateNewBots email={email}/>;
            case "Backtest":
                return <Backtest />;
            default:
                return <SavedBots />;
        }
    };

    return (
        <div className="botVaultContainer">
            <Header />
            <BotMenu setActiveComponent={setActiveComponent} />
            {renderActiveComponent()}
        </div>
    );
};

export default BotVault;
