import React from "react"

const ConditionOptionsComp = (props) => 
{
    const [activeComponent, setActiveComponent] = props;

    const handleExit = () =>
    {
        setActiveComponent(false);
    }

    return(
        <div className="ConditionOptionsComp">
        <h3>Price Condition</h3>
        <h3>Volume Condition</h3> 
        <button className = "saveBtn" onClick={handleExit}>Save</button>
        <button className= "exitBtn">X</button>
        </div>
    )
}

export default ConditionOptionsComp