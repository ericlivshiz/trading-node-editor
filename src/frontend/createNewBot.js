import React, { useState } from "react";
import EditorMgr from "./util/NodeMenu/editorMgr";
import './createNewBot.css';

const CreateNewBot = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <div className="createNewBot">
            {/* Should only load the editormgr component on add button */}
            <EditorMgr />
        </div>
    );
};

export default CreateNewBot;
