import React, {useCallback} from  "react";
import { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from "@xyflow/react";
import '@xyflow/react/dist/style.css';


const CreateNewBots = () => {
    const initialNodes = [
        { id: '1', position: { x: 50, y: 50 }, data: { label: 'Bot Title:' } },
        { id: '2', position: { x: 300, y: 200 }, data: { label: 'Condition' } },
      ];

    const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
      );

    return(
        <div style={{width: '100vh', height: '85vh'}}>
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
                <button>Save</button>
       </div>
    )
}

export default CreateNewBots;