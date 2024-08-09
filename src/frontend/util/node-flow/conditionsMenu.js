import React, { useState } from "react";
// import ConditionOptionsComp from "./conditionOptionsComp";
// import ConditionSavedComp from "./conditionsSavedComp";
// const ConditionsMenu = (props) => 
// {
//     // States
//     const [symbol, setSymbol] = useState("Select");
//     const [priceEquality, setPriceEquality] = useState("Select");
//     const [priceAmount, setPriceAmount] = useState("Input");
//     const [volumeEquality, setVolumeEquality] = useState("Select");
//     const [volumePercent, setVolumePercent] = useState("Input");
//     const [showOptionsComponent, setShowOptionsComponent] = useState(true);
//     const [showSavedComponent, setShowSavedComponent] = useState(false);
//     const [showANDOR, setShowANDOR] = useState(false);
//     const [activeComponent, setActiveComponent] = useState({
//         options: true,
//         saved: false
//     })

//     return
//     (
//         <div>
//         <ConditionOptionsComp/>
//         </div>
//     )
// }

// export default ConditionsMenu;






// Counter
// What should the one we saved look like
// setSelectedEquality(""); => previously saved gets erased?
const ConditionsMenu = ({ openSections, setOpenSections }) => {
    const equalityOptions = ["Above", "Below"];
    const [symbol, setSymbol] = useState("");
    const [price, setPrice] = useState("");
    const [volumePercent, setVolumePercent] = useState("");
    const [selectedEquality, setSelectedEquality] = useState("Select");
    const [selectedVolumeEquality, setSelectedVolumeEquality] = useState("Select");
    const [counter, setCounter] = useState(0);
    const [showAddButton, setShowAddButton] = useState(false);
    const [showDropDownButton, setShowDropDownButton] = useState(true);

    const handleEqualityClick = (option) => {
        setSelectedEquality(option);
    };

    const handleVolumeEqualityClick = (option) => {
        setSelectedVolumeEquality(option);
    };

    const handleSaveClick = () => {
        if(counter == 0)
        {
            setShowDropDownButton(false);
            setCounter(1);
        }
        if (counter == 1)
        {
            setOpenSections(false);
            setCounter(2);
        }
    };

    const resetState = ()  => {
        setSymbol("");
        setPrice("");
        setVolumePercent("");
        setSelectedEquality("Select");
        setSelectedVolumeEquality("Select");
    }

    return (
        <div className="menu-container">
            <div className="condition-row">
                <h3>If </h3>
                <input
                    type="text"
                    value={symbol}
                    placeholder="Symbol"
                    onChange={(e) => setSymbol(e.target.value)}
                />
                <h3>is {!showDropDownButton && selectedEquality !== "Select" && selectedEquality}</h3>
                <div className="dropdown">
                    {showDropDownButton && (
                        <button className="dropbtn">{selectedEquality}</button>       
                    )}
                    <div className="dropdown-content">
                        {equalityOptions.map((option, index) => (
                            <a href="#" key={index} onClick={() => handleEqualityClick(option)}>
                                {option}
                            </a>
                        ))}
                    </div>
                </div>
                <h3>$</h3>
                <input
                    type="number"
                    value={price}
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            {showDropDownButton && (
                <div className="condition-row">
                <h3>If Volume is {!showDropDownButton && selectedVolumeEquality !== "Select" && selectedVolumeEquality}</h3>
                <div className="dropdown">  
                    <button className="dropbtn">{selectedVolumeEquality}</button>
                    <div className="dropdown-content">
                        {equalityOptions.map((option, index) => (
                            <a href="#" key={index} onClick={() => handleVolumeEqualityClick(option)}>
                                {option}
                            </a>
                        ))}
                    </div>
                </div>
                <input
                    type="number"
                    value={volumePercent}
                    placeholder="Percent"
                    onChange={(e) => setVolumePercent(e.target.value)}
                />
                <h3>%</h3>
            </div>)}
            {!showDropDownButton && (
                <button className="addbtn" onClick={resetState}>+</button>
            )}
            
            <button className="savebtn" onClick={handleSaveClick}>Save</button>
        </div>
    );
};

export default ConditionsMenu;
