import React, { useEffect, useState } from "react";
import './savedBot.css';
import trashIcon from './../img/trash-symbol.png';

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

    const handleDelete = (botName) => {
        fetch("http://localhost:3080/delete-bot", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, botName })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Bot deleted successfully') {
                setBots(bots.filter(bot => bot !== botName));
            } else {
                console.error('Error deleting bot:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="saved-bots-container">
            {bots.length > 0 ? (
                <ul className="bot-list">
                    {bots.map((bot, index) => (
                        <li key={index} className="bot-item">
                            {bot}
                            <img
                                src={trashIcon}
                                alt="Delete"
                                className="trash-icon"
                                onClick={() => handleDelete(bot)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="no-bots-message">
                    <h1>You don't have any bots saved!</h1>
                    <p>Please create a new bot and save to see it here!</p>
                </div>
            )}
        </div>
    );
};

export default SavedBots;