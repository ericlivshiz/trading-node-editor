import React from "react"
import './menu.css'

const Triggers = ({setActiveComponent}) => 
{

    const handleBackClick = () =>
    {
        setActiveComponent("");
    }

    const handleSaveClick = () =>
    {
        // Looks very confusing when two functions do the exact same thing!
        // In the future though, this function should use the inputs to make a node out of it
        setActiveComponent("");
    }
    
    return(
        <div className="menu-container">
            <div className = "vertical-menu">
            <div className="button-container">
                    <button className="custom-button" onClick={handleBackClick}>
                        Back
                    </button>
                    <button className="custom-button" onClick={handleSaveClick}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Triggers;