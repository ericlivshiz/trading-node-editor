import React from 'react';
import { Handle } from '@xyflow/react';

const CustomNode = ({ data }) => {
  const { label, category } = data;

  const getNodeStyle = () => {
    switch (category) {
      case 'trigger':
        return { backgroundColor: '#f39c12' }; // Orange for triggers
      case 'condition':
        return { backgroundColor: '#27ae60' }; // Green for conditions
      case 'action':
        return { backgroundColor: '#2980b9' }; // Blue for actions
      case 'type':
        return { backgroundColor: '#8e44ad' }; // Purple for types
      default:
        return { backgroundColor: '#2c3e50' }; // Default color
    }
  };

  return (
    <div style={{ ...getNodeStyle(), padding: '5px', color: '#fff' }}>
      {label}
      <Handle type="target" position="top" />
      <Handle type="source" position="bottom" />
    </div>
  );
};

export default CustomNode;
