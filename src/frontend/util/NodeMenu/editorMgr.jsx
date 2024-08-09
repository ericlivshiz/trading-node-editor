import React, {useState} from "react";
import Menu from "./menu";
import Types from "./types";
import Triggers from "./triggers";
import Conditions from "./conditions";
import Actions from "./actions";

const EditorMgr = () =>
{
    const [activeComponent, setActiveComponent] = useState("");

    switch (activeComponent) {
        case "":
            return <Menu setActiveComponent={setActiveComponent}/>
        case "Types":
            return <Types setActiveComponent={setActiveComponent}/>
        case "Triggers":
            return <Triggers setActiveComponent={setActiveComponent}/>
        case "Conditions":
            return <Conditions setActiveComponent={setActiveComponent}/>
        case "Actions":
            return <Actions setActiveComponent={setActiveComponent}/>
    }

}

export default EditorMgr;