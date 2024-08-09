import React, { useState } from 'react';

const TypesMenu = (props) => {
    const options = ["Stocks", "Indices", "Crypto"];
    const [selectedDropDownOption, setSelectedDropDownOption] = useState("Select");
    const {openSections, setOpenSections} = props;

    
    const handleOptionClick = (option) => {
        setSelectedDropDownOption(option);
    };

    const handleSaveClick = () => 
    {
        setOpenSections(false);
    };

    return (
        <div className="menu-container">
            <div className="dropdown">
                <button className="dropbtn">{selectedDropDownOption}</button>
                <h3>Trading Bot</h3>
                <div className="dropdown-types-content">
                    {options.map((option, index) => (
                        <a href="#" key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </a>
                    ))}
                </div>
            </div>
            <button className="savebtn" onClick={handleSaveClick}>Save</button>
        </div>
    );
};

export default TypesMenu;


