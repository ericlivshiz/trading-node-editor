import React, {useState} from "react";

const TriggersMenu = (props) => {
    const options = ["Open","Close"];
    const [selectedDropDownOption, setSelectedDropDownOption] = useState("Select");
    
    const {openSections, setOpenSections} = props;
    
    const [showDropDownButton, setShowDropDownButton] = useState(true);
    const [showAddButton, setShowAddButton] = useState(false);
    const [counter, setCounter] = useState(0);
    // create a button text state and use that, so when you save the first time you can switch the text to
    // save & exit

    const handleOptionClick = (option) => {
        setSelectedDropDownOption(option);
    };

    

    const handleSaveClick = () => {

        if (counter == 0)
        {
            setShowDropDownButton(false);
            setShowAddButton(true);
            setCounter(1);
        }
        
        if (counter == 1)
        {
            setOpenSections(false);
            setCounter(2);
        }
    };

    return(
        <div className="menu-container">
            <div className="dropdown">

                <h3> Start on Market {!showDropDownButton && selectedDropDownOption !== "Select" && selectedDropDownOption} </h3>

                {showDropDownButton && (
                    <button className="dropbtn">{selectedDropDownOption}</button>       
                )}

                
                 {showDropDownButton && (
                <div className="dropdown-triggers-content">
                {options.map((option, index) => (
                    <a href="#" key={index} onClick={() => handleOptionClick(option)}>
                        {option}
                    </a>
                    ))}
            </div>
                    )}   
            </div>
                  <button className="savebtn" onClick={handleSaveClick}>Save</button>
                  
        </div>
          );
      };
export default TriggersMenu;
    