'use client';

import { ReactFlow, Background, Controls, Handle, Position, useNodesState, useEdgesState, MarkerType, type NodeProps, type Node, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState } from 'react';
import { Workflow, ArrowUpRight } from 'lucide-react';
import { type Module } from '@/content/portfolio';
import { Modal } from './ui';

type ModuleNode = Node<{ module: Module }, 'module'>;
function BusinessNode({ data, selected }: NodeProps<ModuleNode>) {
  const m = data.module;
  return <div className={`flow-node ${selected ? 'selected' : ''}`}>
    <Handle type="target" position={Position.Left} />
    <span className={`delivery ${m.status === '已实现' ? 'done' : m.status === '后续规划' ? 'planned' : 'designed'}`}>{m.status}</span>
    <div className="flow-node-title"><Workflow size={17} /><strong>{m.title}</strong></div><p>{m.input}</p><span className="flow-node-action">模块详情<ArrowUpRight size={14} /></span>
    <Handle type="source" position={Position.Right} />
  </div>;
}
const nodeTypes = { module: BusinessNode };

export default function Architecture({ modules, projectSlug, showText = true, proposal = false }: { modules: Module[]; projectSlug: string; showText?: boolean; proposal?: boolean }) {
  const initialNodes: ModuleNode[] = modules.map((module, i) => ({ id: module.id, type: 'module', data: { module }, position: { x: (i % 3) * 310, y: Math.floor(i / 3) * 235 } }));
  const initialEdges: Edge[] = modules.slice(1).map((module, i) => ({ id: `${modules[i].id}-${module.id}`, source: modules[i].id, target: module.id, type: 'smoothstep', style: { stroke: module.status === '后续规划' ? '#9ca3af' : '#6986ab', strokeWidth: 1.6, strokeDasharray: module.status === '后续规划' ? '5 5' : undefined }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6986ab' } }));
  // Planned automation is a separate extension, not an output of the reporting chain.
  if (projectSlug === 'topify') {
    initialEdges[initialEdges.length - 1] = { id: 'experiment-future', source: 'experiment', target: 'future', type: 'smoothstep', label: '后续扩展', style: { stroke: '#9ca3af', strokeDasharray: '5 5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#9ca3af' } };
    initialEdges.push({ id: 'feedback-experiment', source: 'feedback', target: 'experiment', type: 'smoothstep', label: '下一轮内容实验', style: { stroke: '#6986ab' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6986ab' } });
  }
  if (projectSlug === 'beike') initialEdges.push({ id: 'review-feedback', source: 'review', target: proposal ? 'mapping' : 'brief', type: 'smoothstep', label: proposal ? '策略反馈与内容迭代（方案）' : '人工复盘与规则回写', style: { stroke: '#498a79', strokeDasharray: proposal ? '5 5' : undefined }, markerEnd: { type: MarkerType.ArrowClosed, color: '#498a79' } });
  const [nodes, , onNodesChange] = useNodesState(initialNodes); const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [selected, setSelected] = useState<Module | null>(null);
  return <><div className="architecture-canvas" aria-label="交互式业务架构图">
    <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onNodeClick={(_, node) => setSelected(node.data.module)} fitView fitViewOptions={{ padding: .12 }} minZoom={.35} maxZoom={1.7} nodesConnectable={false} deleteKeyCode={null} ariaLabelConfig={{ 'controls.zoomIn.ariaLabel': '放大架构图', 'controls.zoomOut.ariaLabel': '缩小架构图', 'controls.fitView.ariaLabel': '适应画布', 'controls.interactive.ariaLabel': '切换交互模式' }}>
      <Background gap={22} size={1} color="#d5dce5" /><Controls showInteractive={false} />
    </ReactFlow>
  </div><div className="flow-legend"><span><i className="legend-dot done" />已实现</span><span><i className="legend-dot designed" />方案设计</span><span><i className="legend-dot planned" />后续规划</span><span>业务逻辑示意 · 非原系统截图</span></div>
    {showText && <details className="architecture-text"><summary>查看架构文字版</summary><div>{modules.map(m => <button key={m.id} onClick={() => setSelected(m)}><span>{m.title}</span><span>{m.status}<ArrowUpRight size={15} /></span></button>)}</div></details>}
    {selected && <Modal title={selected.title} onClose={() => setSelected(null)}><span className={`delivery ${selected.status === '已实现' ? 'done' : selected.status === '后续规划' ? 'planned' : 'designed'}`}>{selected.status}</span><dl className="module-details">{[['输入', selected.input], ['处理逻辑', selected.logic], ['输出', selected.output], ['使用工具', selected.tools], ['人工审核边界', selected.human]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Modal>}
  </>;
}
