import {React, useState} from "react";
import Header from "./util/header";
import BotMenu from "./util/botMenu";
import SavedBots from "./savedBot";
import CreateNewBot from "./createNewBot";
import DataAnalysis from "./dataAnalysis";
import Backtest from "./backtest";
//make the actual bot features (i think)
import './bot-vault.css';

const BotVault = (props) => {
    // What item in the list is clicked
    const [activeComponent, setActiveComponent] = useState("Saved Bots");
    const {email} = props;
    // Render that component that has been clicked
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case "Saved Bots":
                return <SavedBots email={email}/>
            case "Create New Bot":
                return <CreateNewBot email={email}/>
            case "Backtest":
                return <Backtest />
            case "Data Analysis":
                return <DataAnalysis/>;
            }
            
    };
    
    
    return (
        <div className="botVaultContainer" >
            <Header />
            <BotMenu setActiveComponent={setActiveComponent}/>
            {renderActiveComponent()}
        </div>
    )

}
export default BotVault;