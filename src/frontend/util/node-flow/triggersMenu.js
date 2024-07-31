import React, {useState} from "react";

const TriggersMenu = (props) => {
    const options = ["Open","Close"];
    const [selectedDropDownOption, setSelectedDropDownOption] = useState("Select");
    
    const {openSections, setOpenSections} = props;
    
    const [showDropDownButton, setShowDropDownButton] = useState(true);
    const [showAddButton, setShowAddButton] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedDropDownOption(option);
    };

    

    const handleSaveClick = () => {
        setShowDropDownButton(false);
        setShowAddButton(true);

    };

    return(
        <div className="menu-container">
            <div className="dropdown">

                <h3> Start on Market {!showDropDownButton && selectedDropDownOption !== "Select" && selectedDropDownOption} </h3>

                {showDropDownButton && (
                    <button className="dropbtn">{selectedDropDownOption}</button>       
                )}

                {showAddButton && (
                    <button className="addbtn">Add Button</button>
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
                    <button>+</button>
        </div>
          );
      };
export default TriggersMenu;
    