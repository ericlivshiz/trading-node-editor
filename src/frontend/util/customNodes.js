import React from 'react';
import { Handle } from '@xyflow/react';
import trashIcon from './../../img/trash-symbol.png';
import conditionIcon from './../../img/split-rgb.png';
import actionIcon from './../../img/action-runner.png';
import triggerIcon from './../../img/trigger-icon.png';
import typeIcon from './../../img/trading-chart-icon.png';
import customIcon from './../../img/lightning-bolt-icon.png';

const categoryImages = {
  condition: conditionIcon,
  action: actionIcon,
  trigger: triggerIcon,
  type: typeIcon,
  custom: customIcon,
  // Add more categories as needed
};

const CustomNode = ({ data, id }) => {


  return (
    <div className={`custom-node ${data.category}`}>
      <Handle type="target" position="top" className="handle-top" />
      <img src={categoryImages[data.category]} alt={`${data.category}-icon`} className="category-icon" />
      <div className="custom-node-label">
        {data.label}
      </div>
      <div className="trash-icon-container">
        <img src={trashIcon} alt="trash-icon" className="trash-icon"/>
      </div>
      <Handle type="source" position="bottom" className="handle-bottom" />
    </div>
  );
};

export default CustomNode;

