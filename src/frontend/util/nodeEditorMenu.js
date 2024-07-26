import React, { useState } from "react";
import './nodeEditorMenu.css';

const NodeEditorMenu = () => {
  const [openSections, setOpenSections] = useState({
    types: false,
    triggers: false,
    conditions: false,
    actions: false,
    customs: false,
  });

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const types = ["Stocks", "Indices", "Crypto"];

  const triggers = ["Market Open", "Market Close", "Time Inteval", "Price Crossing Threshold", "Volume Spike", 
    "News Alert", "Earnings Release", "Manual Trigger", "Scheduled Time"];

  const conditions = ["if", "if/else", "while"];

  const actions = ["Place Buy Order", "Place Sell Order", "Place Stop Loss", "Place Take Profit", "Send Email Notification",
    "Send SMS Notification", "Set Trailing Stop", "Close Position", "Adjust Position Size", "Set Limit Order", 
    "Send Webhook Notifcation"];

  const customs = ["Input Code", "Create Variable", "Fetch External Data", "Perform Calculation"];

  return (
    <div className="menu-container">
      <div className="menu-section">
        <h3 onClick={() => toggleSection('types')}>Types</h3>
        {openSections.types && (
          <ul>
            {types.map((type, index) => (
              <li
                key={index}
                className="menu-item"
                onDragStart={(event) => onDragStart(event, type)}
                draggable
              >
                {type}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="menu-section">
        <h3 onClick={() => toggleSection('triggers')}>Triggers</h3>
        {openSections.triggers && (
          <ul>
            {triggers.map((trigger, index) => (
              <li
                key={index}
                className="menu-item"
                onDragStart={(event) => onDragStart(event, trigger)}
                draggable
              >
                {trigger}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="menu-section">
        <h3 onClick={() => toggleSection('conditions')}>Conditions</h3>
        {openSections.conditions && (
          <ul>
            {conditions.map((condition, index) => (
              <li
                key={index}
                className="menu-item"
                onDragStart={(event) => onDragStart(event, condition)}
                draggable
              >
                {condition}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="menu-section">
        <h3 onClick={() => toggleSection('actions')}>Actions</h3>
        {openSections.actions && (
          <ul>
            {actions.map((action, index) => (
              <li
                key={index}
                className="menu-item"
                onDragStart={(event) => onDragStart(event, action)}
                draggable
              >
                {action}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="menu-section">
        <h3 onClick={() => toggleSection('customs')}>Custom Nodes</h3>
        {openSections.customs && (
          <ul>
            {customs.map((custom, index) => (
              <li
                key={index}
                className="menu-item"
                onDragStart={(event) => onDragStart(event, custom)}
                draggable
              >
                {custom}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NodeEditorMenu;
