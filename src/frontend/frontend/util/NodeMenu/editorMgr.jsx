import React, {useState} from "react";
import Menu from "./menu";
import Types from "./types";
import Triggers from "./triggers";
import Saved from "./conditions/saved";
import Actions from "./actions";
import { ConditionsProvider } from "./conditions/context";
// 8/10/2024
// Editor could originally hold the button name and all those input states that are currently in price and volume
// they could be passed as props to Saved component and from there will be passed as props to price and volume
// price and volume will actually use the set function(again, this is passed in as prop) to input the data.
// therefore, it can be used in saved to display the saved conditions
// This is an anti-pattern that is solved by used "context" but never tried.
// "Context provides a way to pass data through the component tree without having to pass props down manually at every level.""

const EditorMgr = () => {
    const [activeComponent, setActiveComponent] = useState("");

    const renderComponent = () => {
        switch (activeComponent) {
            case "":
                return <Menu setActiveComponent={setActiveComponent} />
            case "Types":
                return <Types setActiveComponent={setActiveComponent} />
            case "Triggers":
                return <Triggers setActiveComponent={setActiveComponent} />
            case "Conditions":
                return <Saved setActiveComponent={setActiveComponent} />
            case "Actions":
                return <Actions setActiveComponent={setActiveComponent} />
            default:
                return null;
        }
    };

    return (
        <ConditionsProvider>
            {renderComponent()}
        </ConditionsProvider>
    );
};

export default EditorMgr;