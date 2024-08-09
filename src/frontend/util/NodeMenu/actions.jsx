import React from "react"
import './menu.css'
const Actions = ({setActiveComponent}) => 
{
    
    const handleClose = () =>
    {
        setActiveComponent("");
    }

const handleSave = () =>
    {
        // Looks very confusing when two functions do the exact same thing!
        // In the future though, this function should use the inputs to make a node out of it
        setActiveComponent("");
    }

    return(
        <div className="menu-container">
            <div className = "vertical-menu">
                <div className="button-container">
                <button 
                className="custom-button"
                onClick={handleClose}>Back
                </button>
                <button 
                className="custom-button"
                onClick={handleSave}>Save
                </button>
                </div>
                
            </div>
        </div>
    )
}

export default Actions;