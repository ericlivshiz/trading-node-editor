import React, { useState } from "react";
import NodeEditorMenu from "./util/node-flow/nodeEditorMenu";
import './createNewBot.css';

const CreateNewBot = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <div className="createNewBot">
            <p>We are still working on this!</p>
            <button onClick={toggleMenu}>Toggle Menu</button>
            {isMenuVisible && <NodeEditorMenu />}
        </div>
    );
};

export default CreateNewBot;