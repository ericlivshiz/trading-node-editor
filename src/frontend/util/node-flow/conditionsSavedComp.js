import React from "react"

const ConditionSavedComp = (props) => 
{
    const [activeComponent, setActiveComponent] = props;
    const handleExit = () =>
    {
        setActiveComponent(false);
    }
    return
    (
        <div className= "CondtionsSavedComp">
            <button onClick={handleExit}>+</button>
            <button onClick={handleExit}>Save & Exit</button>
        </div>
    )
}

export default ConditionSavedComp