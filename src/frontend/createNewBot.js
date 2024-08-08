import React, { useState } from "react";
import Menu from "./util/NodeMenu/menu";
import './createNewBot.css';

const CreateNewBot = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [activeComponent, setActiveComponent] = useState("");

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <div className="createNewBot">
            <Menu setActiveComponent={setActiveComponent} />
        </div>
    );
};

export default CreateNewBot;
