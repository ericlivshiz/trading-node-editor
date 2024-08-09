import React, {useState} from "react"
import './menu.css'

const Triggers = ({setActiveComponent}) => 
{
    const [buttonName, setButtonName] = useState("SELECT");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSelectClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        setShowDropdown(false);
        
        if (option === "Open")
        {
            setButtonName("Open");
        }

        else if (option === "Close")
        {
            setButtonName("Close");
        }
    };

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
            <div className="select-container">          
            <span>Start on Market </span>
                <button className="select-button" onClick={handleSelectClick}>
                    {buttonName}
                </button>
            </div>
                {showDropdown && (
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item" onClick={() => handleOptionClick('Open')}>Open</a>
                        <a href="#" className="dropdown-item" onClick={() => handleOptionClick('Close')}>Close</a>
                    </div>
                )}
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