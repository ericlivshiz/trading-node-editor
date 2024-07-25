import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import NodeEditorMenu from "./util/nodeEditorMenu";

const CreateNewBots = (props) => {
  const { email } = props;
  const [botName, setBotName] = useState("");

  const navigate = useNavigate();

  const initialNodes = [
    { id: '1', position: { x: 50, y: 50 }, data: { label: 'Condition' } },
    { id: '2', position: { x: 300, y: 200 }, data: { label: 'Action' } },
  ];

  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleSubmit = () => {
    fetch("http://localhost:3080/saved-bots", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, botName })
    })
    .then(r => r.json())
    .then(r => {
      if (r.message === 'Bot saved successfully') {
        setBotName(botName)
        navigate("/")
      } else {
        window.alert("Something went wong...Failed to save bot")
      }
    })
  }

  return (
    <div style={{ display: 'flex', height: '85vh' }}>
      <div style={{ flex: 1, position: 'relative'}}>
        <label>
          Bot Name: <input name="botName" value={botName} onChange={ev => setBotName(ev.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>Save</button>
        <ReactFlow 
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}>
          <Controls />
          <MiniMap /> 
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
      <NodeEditorMenu />
    </div>
  );
}

export default CreateNewBots;
