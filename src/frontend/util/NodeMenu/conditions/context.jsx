import React, { createContext, useState } from 'react';

export const ConditionsContext = createContext();

export const ConditionsProvider = ({ children }) => {
    const [conditions, setConditions] = useState([]);

    const addCondition = (condition) => {
        setConditions((prevConditions) => [...prevConditions, condition]);
    };

    return (
        <ConditionsContext.Provider value={{ conditions, addCondition }}>
            {children}
        </ConditionsContext.Provider>
    );
};
