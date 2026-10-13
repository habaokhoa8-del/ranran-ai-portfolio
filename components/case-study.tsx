'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, Layers3, Play, RotateCcw, Download, AlertCircle, ChevronDown } from 'lucide-react';
import { type Project, projects } from '@/content/portfolio';
import { Reveal, AssetSlot, CaseLink } from './ui';
import { caseNarratives } from '@/content/case-narratives';

const Architecture = dynamic(() => import('./architecture'), { ssr: false, loading: () => <div className="architecture-loading"><Layers3 size={26} /><span>加载业务架构</span></div> });
const sections = [{ id: 'context', label: '业务理解' }, { id: 'solution', label: 'AI 方案设计' }, { id: 'results', label: '数据分析' }, { id: 'implementation', label: '产品化思维' }];

function EfficiencyCompare({ crossborder = false }: { crossborder?: boolean }) {
  const [position, setPosition] = useState(55);
  return <div className="compare-tool">
    <div className="compare-head"><span>BEFORE / AFTER</span><span>{crossborder ? '单日选品分析耗时' : '图文生产速率'} · 项目记录</span></div>
    <div className="comparison-stage"><div className="compare-side after-side"><div className="comparison-copy"><span>工具辅助</span><strong>{crossborder ? '15' : '15'}<small>{crossborder ? 'min' : '篇 / h'}</small></strong><p>{crossborder ? 'CSV 导入 → 对比分析 → 报告' : '结构化输入 → AI 生成 → 人工审核'}</p></div></div><div className="compare-side before-side" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}><div className="comparison-copy"><span>原人工流程</span><strong>{crossborder ? '3h+' : '1'}<small>{crossborder ? '' : '篇 / h'}</small></strong><p>{crossborder ? '人工导入、整理与逐项比较' : '约 8 小时生产 8 篇'}</p></div></div><div className="compare-divider" style={{ left: `${position}%` }}><span>↔</span></div></div>
    <label className="compare-control"><span>人工</span><input type="range" min="0" max="100" value={position} onChange={e => setPosition(Number(e.target.value))} aria-label="调整人工与 AI 辅助对比展示比例" /><span>工具辅助</span></label>
    <p className="content-note">{crossborder ? '该对比反映项目记录中的分析耗时，不代表销售提升。' : '约 15 倍仅指内容生产效率；投放效果需另外验证。'}</p>
  </div>;
}

function BaselineDemo() {
  const [baseline, setBaseline] = useState(1000); const [reading, setReading] = useState(1330);
  const valid = Number.isFinite(baseline) && Number.isFinite(reading) && baseline > 0 && reading >= 0;
  return <div className="baseline-demo"><span className="eyebrow">指标逻辑演示 · 合成数值</span><h3>先把账号基础放回比较里。</h3><div className="baseline-fields"><label>账号历史均读<input type="number" min="0" value={Number.isNaN(baseline) ? '' : baseline} onChange={e => setBaseline(e.target.value === '' ? NaN : Number(e.target.value))} /></label><span>→</span><label>内容阅读量<input type="number" min="0" value={Number.isNaN(reading) ? '' : reading} onChange={e => setReading(e.target.value === '' ? NaN : Number(e.target.value))} /></label><span>→</span><div className="baseline-result" aria-live="polite"><span>相对基线</span><strong>{valid ? `${(reading / baseline).toFixed(2)}×` : '不可计算'}</strong></div></div><p>仅演示「内容阅读量 ÷ 历史均读」，不是实际动态基线算法。窗口、加权与异常排除规则待补充。</p></div>;
}

const sampleRows = [{ keyword: 'sample-keyword-A', volume: 2400 }, { keyword: 'sample-keyword-B', volume: 1800 }, { keyword: 'sample-keyword-C', volume: 3200 }];
function ProductDemo() {
  const [step, setStep] = useState(0); const ordered = [...sampleRows].sort((a, b) => b.volume - a.volume);
  const download = () => { const report = '作品集重建演示 / 合成数据 / 非原项目分析算法\n\n' + ordered.map((r, i) => `${i + 1}. ${r.keyword}: ${r.volume}`).join('\n'); const url = URL.createObjectURL(new Blob([report], { type: 'text/plain;charset=utf-8' })); const a = document.createElement('a'); a.href = url; a.download = 'portfolio-demo-report.txt'; a.click(); URL.revokeObjectURL(url); };
  return <div className="product-demo"><div className="demo-header"><div><span className="eyebrow">操作演示 / 作品集重建</span><h3>从 CSV 到结果。</h3></div><span className="tag">合成样例 · 非原系统</span></div>
    <div className="demo-steps">{['数据输入', '数据处理', '报告输出'].map((s, i) => <span className={step >= i ? 'active' : ''} key={s}><b>0{i + 1}</b>{s}</span>)}</div>
    <div className="demo-content" aria-live="polite">{step === 0 ? <><span className="demo-file">sample.csv</span><pre>keyword,volume{'\n'}sample-keyword-A,2400{'\n'}sample-keyword-B,1800{'\n'}sample-keyword-C,3200</pre><p>三个合成关键词。仅演示输入、排序与报告的操作路径。</p></> : <><div className="table-scroll"><table><thead><tr><th>序号</th><th>合成关键词</th><th>示例搜索量</th></tr></thead><tbody>{ordered.map((r, i) => <tr key={r.keyword}><td>{i + 1}</td><td>{r.keyword}</td><td>{r.volume.toLocaleString()}</td></tr>)}</tbody></table></div><p>{step === 1 ? '演示按示例搜索量降序排列，不代表原产品选品策略。' : '示例报告已生成。真实字段、排序权重与原产品逻辑待补充。'}</p></>}</div>
    <div className="demo-actions">{step < 2 ? <button className="button primary" onClick={() => setStep(step + 1)}><Play size={15} />{step === 0 ? '运行示例处理' : '生成示例报告'}</button> : <button className="button primary" onClick={download}><Download size={15} />下载示例报告</button>}<button className="icon-button" aria-label="重置演示" title="重置演示" onClick={() => setStep(0)}><RotateCcw size={18} /></button></div>
  </div>;
}

function ChapterHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return <Reveal className="case-section-heading"><span className="eyebrow">{number} / {label}</span><h2>{title}</h2></Reveal>;
}

function NarrativeSteps({ items }: { items: { title: string; text: string }[] }) {
  return <div className="analysis-steps">{items.map((item, i) => <Reveal key={item.title}><span className="number">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}</div>;
}

export function CaseStudy({ project: p }: { project: Project }) {
  const next = projects[(projects.findIndex(x => x.slug === p.slug) + 1) % projects.length];
  const story = caseNarratives[p.slug];
  const evidence = (chapter: 'context' | 'solution' | 'results' | 'implementation') => story.evidence.filter(a => a.chapter === chapter).map(a => <Reveal className="chapter-evidence" key={a.title}><AssetSlot {...a} /></Reveal>);
  return <main id="main" className={`case-study four-chapter-case ${p.color}`}>
    <section className="case-hero container" id="overview">
      <Link href="/#projects" className="back-link"><ArrowLeft size={16} />所有项目</Link>
      <Reveal><div className="case-eyebrow"><span className="eyebrow">CASE STUDY / {p.number}</span><span>{p.company} · {p.date}</span></div><h1>{p.title}</h1><p className="case-summary">{p.subtitle}</p><div className="case-tags"><span className="tag">{p.role}</span>{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div></Reveal>
    </section>
    <nav className="case-nav" aria-label="案例章节"><div className="container">{sections.map((s, i) => <a href={`#${s.id}`} key={s.id}><small>0{i + 1}</small>{s.label}</a>)}</div></nav>

    <section className="story-band business-story" id="context"><div className="case-section container">
      <ChapterHeading number="01" label="业务理解" title={story.business.title} />
      <div className="case-two-col"><Reveal><h3>业务背景</h3><p className="body-large">{p.background}</p><div className="business-path"><span>原始流程</span><p>{story.business.before}</p><span>改造目标</span><p>{story.business.target}</p></div></Reveal><Reveal><h3>{story.loop ? "逻辑闭环链路" : "需要解决的问题"}</h3>{story.loop ? <><ol className="logic-loop">{story.loop.map(step => <li key={step}>{step}</li>)}</ol><p className="content-note">整体业务逻辑；自动反哺内容生成仍属方案设计。</p></> : story.business.automation ? <div className="automation-scope"><h4>区分 AI 可优化环节与人工环节</h4><ol>{story.business.automation.ai.map(item => <li key={item.title}><strong>{item.title}</strong><p>{item.text}</p></li>)}</ol><div className="manual-scope"><h4>保留人工的环节</h4><ul>{story.business.automation.manual.map(item => <li key={item}>{item}</li>)}</ul></div></div> : <ol className="problem-list">{p.problems.map((problem, i) => <li key={problem}><span>0{i + 1}</span><p>{problem}</p></li>)}</ol>}</Reveal></div>
      <Reveal className="role-band"><span className="eyebrow">我的工作</span><p>{p.responsibility}</p></Reveal>
      {story.business.analysis && <Reveal className="chapter-subsection"><h3>整体链路分析</h3><p className="chapter-intro">{story.business.analysis}</p></Reveal>}
      {evidence('context')}
    </div></section>

    <section className="story-band ai-story" id="solution"><div className="case-section container">
      <ChapterHeading number="02" label="AI 方案设计" title={story.ai.title} />
      <Reveal><p className="chapter-intro">{story.ai.approach}</p></Reveal>
      {story.ai.decisions && <div className="chapter-subsection"><NarrativeSteps items={story.ai.decisions} /></div>}
      <div id="architecture" className="chapter-subsection"><div className="subsection-heading"><h3>{story.ai.modules ? '整体方案架构' : '业务架构'}</h3><span>逻辑示意 · 非原系统截图</span></div><Architecture modules={story.ai.modules ?? p.modules} projectSlug={p.slug} showText={p.slug !== 'beike'} proposal={Boolean(story.ai.modules)} /></div>
      {story.ai.roles && <div className="chapter-subsection agent-roles"><h3>AI Native 结构化所需的团队角色</h3><p>以下为 Agent 职责设计，不代表五个 Agent 均已部署。</p><ul>{story.ai.roles.map(role => <li key={role.title}><h4>{role.title}</h4><p>{role.text}</p></li>)}</ul></div>}
      {evidence('solution')}
    </div></section>

    <section className="story-band data-story" id="results"><div className="case-section container">
      <ChapterHeading number="03" label="数据分析" title={story.data.title} />
      <NarrativeSteps items={story.data.steps} />
      {story.moduleDesign && <Reveal className="chapter-subsection"><div className="metric-definitions"><table><caption>模块设计 · 输入、处理、输出与人工边界</caption><thead><tr><th>模块 / 输入</th><th>处理技术</th><th>输出与人工边界</th></tr></thead><tbody>{story.moduleDesign.map(m => <tr key={m.name}><th scope="row">{m.name}<p>{m.input}</p></th><td>{m.processing}</td><td>{m.output}<p>{m.boundary}</p></td></tr>)}</tbody></table></div></Reveal>}
      {story.data.definitions && <Reveal className="chapter-subsection"><div className="metric-definitions"><table><caption>业务指标口径 · 交接 SOP 摘要</caption><thead><tr><th>指标</th><th>计算方式</th><th>核对边界</th></tr></thead><tbody>{story.data.definitions.map(d => <tr key={d.name}><th scope="row">{d.name}</th><td>{d.formula}</td><td>{d.boundary}</td></tr>)}</tbody></table></div>{story.data.note && <p className="content-note">{story.data.note}</p>}</Reveal>}
      <div className="chapter-subsection"><h3>结果与验证</h3>
        {p.slug === 'topify' ? <><div className="case-metrics">{p.metrics.map(m => <Reveal key={m.label}><strong>{m.value}</strong><span>{m.label}</span><small>{m.note}</small></Reveal>)}</div></> : <Reveal><EfficiencyCompare crossborder={p.slug === 'crossborder'} /></Reveal>}
        {story.results ? <Reveal className="agent-roles"><ul>{story.results.map(result => <li key={result.title}><h4>{result.title}</h4><p>{result.text}</p></li>)}</ul></Reveal> : <Reveal className="validation-note"><AlertCircle size={21} /><p>{p.validation}</p></Reveal>}
      </div>
      {p.slug === 'topify' && <details className="evidence-disclosure"><summary><span>基线计算示例 <small>合成数值 · 非完整动态算法</small></span><ChevronDown size={19} /></summary><BaselineDemo /></details>}
      {evidence('results')}
    </div></section>

    <section className="story-band product-story" id="implementation"><div className="case-section container">
      <ChapterHeading number="04" label="产品化思维" title={story.product.title} />
      <div className="product-decisions"><Reveal><span className="eyebrow">交付与复用</span><h3>留下什么</h3><p>{story.product.output}</p></Reveal><Reveal><span className="eyebrow">人工审核边界</span><h3>谁负责最终判断</h3><p>{story.product.boundary}</p></Reveal></div>
      <details className="evidence-disclosure delivery-disclosure"><summary><span>交付状态与已知限制 <small>已实现 / 方案设计 / 后续规划</small></span><ChevronDown size={19} /></summary><div className="delivery-register">{(story.product.delivery ?? p.modules.map(m => ({ title: m.title, status: m.status, text: m.human }))).map(item => <div key={item.title}><strong>{item.title}</strong><span className={`delivery ${item.status === '已实现' ? 'done' : item.status === '后续规划' ? 'planned' : 'designed'}`}>{item.status}</span><p>{item.text}</p></div>)}</div></details>
      {evidence('implementation')}
      <div className="chapter-subsection" id="reflection"><Reveal><div className="subsection-heading"><h3>复盘与下一步</h3></div><p className="chapter-intro">{story.product.next}</p></Reveal><div className="reflection-list">{p.lessons.map((lesson, i) => <Reveal key={lesson}><span>0{i + 1}</span><p>{lesson}</p></Reveal>)}</div></div>
      <div className="case-ending"><Link href="/#projects" className="button secondary"><ArrowLeft size={16} />返回项目列表</Link><CaseLink slug={next.slug}>下一个案例：{next.title}</CaseLink></div>
    </div></section>
  </main>;
}
