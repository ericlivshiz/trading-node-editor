import React, { useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import NodeEditorMenu from "./util/nodeEditorMenu";
import { 
  ReactFlow, 
  addEdge, 
  useNodesState, 
  useEdgesState, 
  Controls, 
  useReactFlow, 
  Background, 
  MiniMap
} from "@xyflow/react";

import '@xyflow/react/dist/style.css';
import './util/nodeStyles.css';
import CustomNode from "./util/customNodes";

const initialNodes = [
  { id: '1', 
    position: { x: 50, y: 50 }, 
    data: { label: 'Start' }, 
    type: 'input',
    className: 'node',
  },
];

const initialEdges = [];

let id = 3;
const getId = () => `dndnode_${id++}`;

const nodeTypes = {
  customNode: CustomNode,
};

const CreateNewBots = (props) => {
  const { email } = props;
  const [botName, setBotName] = useState("");
  const navigate = useNavigate();

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const data = JSON.parse(event.dataTransfer.getData('application/reactflow'));
      const { nodeType, nodeCategory } = data;
      if (!nodeType || !nodeCategory) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      
      const newNode = {
        id: getId(),
        type: 'customNode',
        position,
        data: { label: `${nodeType}`, category: nodeCategory },
        className: 'node',
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes],
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
    <div style={{ display: 'flex', height: '90vh' }}>
      <div style={{ flex: 1, position: 'relative', height: '100%' }}>
        <label>
          Bot Name: <input name="botName" value={botName} onChange={ev => setBotName(ev.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>Save</button>
        <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{ width: '100%', height: '90%' }}>
          <ReactFlow 
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
      <NodeEditorMenu />
    </div>
  );
}

export default CreateNewBots;

