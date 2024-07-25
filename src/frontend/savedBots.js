import React, { useEffect, useState } from "react";
import './savedBots.css';

const SavedBots = ({ email }) => {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3080/get-bots", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Bots retrieved successfully') {
                setBots(data.bots);
            } else {
                console.error('Error retrieving bots:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [email]);

    return (
        <div className="saved-bots-container">
            {bots.length > 0 ? (
                <ul className="bot-list">
                    {bots.map((bot, index) => (
                        <li key={index} className="bot-item">{bot}</li>
                    ))}
                </ul>
            ) : (
                <div className="no-bots-message">
                    <h1>There are no bots made yet on this account</h1>
                    <p>At least we hope not!</p>
                </div>
            )}
        </div>
    );
};

export default SavedBots;
