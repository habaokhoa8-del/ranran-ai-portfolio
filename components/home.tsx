'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Download, MapPin, Workflow, ScanLine, ChartNoAxesCombined, Layers3, Sparkles, Check, Copy, Mail, Phone, GraduationCap, BriefcaseBusiness, Cpu, Plus, FileText } from 'lucide-react';
import { profile, projects, categories, skills, more, aiCommunityIntro, type Project } from '@/content/portfolio';
import { Reveal, MagneticLink, Modal, CaseLink } from './ui';

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return <div className={`project-visual ${project.color} ${compact ? 'compact' : ''}`} aria-label={`${project.title}业务逻辑示意`}>
    <div className="visual-top"><span><span className="tiny-dot" />{project.slug === 'topify' ? 'CONTENT EXPERIMENT' : project.slug === 'beike' ? 'AI NATIVE WORKFLOW' : 'PRODUCT ANALYTICS'}</span><span>业务示意</span></div>
    {project.slug === 'topify' ? <div className="experiment-visual">
      <div className="account-matrix" aria-label="15 账号矩阵">{Array.from({ length: 15 }, (_, i) => <span key={i}><ScanLine size={15} /></span>)}</div>
      <div className="experiment-copy"><span>15 ACCOUNTS · 5 CONTENT TYPES</span><strong>从内容表现<br />到获客判断</strong><div className="mini-bars"><div><span>红利催促</span><i style={{ '--bar': '88%' } as CSSProperties} /><b>1.33×</b></div><div><span>非常规打法</span><i style={{ '--bar': '78%' } as CSSProperties} /><b>1.19×</b></div></div><small>相对账号历史基线 · 项目观察结果</small></div>
    </div> : project.slug === 'beike' ? <div className="workflow-visual"><div className="workflow-step"><FileText size={22} /><span>结构化输入</span></div><ArrowRight size={16} /><div className="workflow-step main-step"><Sparkles size={24} /><span>AI 图文生成</span></div><ArrowRight size={16} /><div className="workflow-step"><Check size={22} /><span>人工审核</span></div><div className="workflow-result"><span>12 版 Skill</span><span>5 套模板</span><span>飞书字段映射</span></div></div>
      : <div className="csv-visual"><div className="file-graphic"><FileText size={38} strokeWidth={1.3} /><strong>CSV</strong><span>ABS 搜索数据</span></div><ArrowRight size={22} /><div className="report-graphic"><div className="report-title"><ChartNoAxesCombined size={17} />选品分析报告</div><div className="report-lines"><i /><i /><i /></div><div className="report-time"><span>单日分析</span><strong>15 <small>min</small></strong></div></div></div>}
  </div>;
}

function Portrait() {
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 120, damping: 22 }); const y = useSpring(0, { stiffness: 120, damping: 22 });
  return <div className="portrait-scene" onPointerMove={e => {
    if (reduced || e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - rect.left - rect.width / 2) * .018); y.set((e.clientY - rect.top - rect.height / 2) * .018);
  }} onPointerLeave={() => { x.set(0); y.set(0); }}>
    <div className="portrait-outline" />
    <motion.div className="portrait-frame" style={{ x, y }}>
      {profile.portrait ? <img src={profile.portrait} alt="王冉冉，来自本人简历的真实头像" fetchPriority="high" width={900} height={1200} /> : <div className="portrait-placeholder">个人照片待补充</div>}
      <div className="portrait-caption"><span>RANRAN WANG</span><span>以业务为起点。</span></div>
    </motion.div>
    <motion.div className="floating-label label-workflow" style={{ x }}><span className="floating-icon"><Workflow size={20} /></span><div><strong>AI Workflow</strong><span>从想法到可运行的流程</span></div><Check size={15} className="floating-check" /></motion.div>
    <motion.div className="floating-label label-data" style={{ y }}><span className="floating-icon mint-icon"><ChartNoAxesCombined size={20} /></span><div><strong>Business × AI</strong><span>设计 · 验证 · 交付</span></div></motion.div>
    <div className="portrait-note"><span className="tiny-dot" />真实简历头像</div>
  </div>;
}

export function Home() {
  const [filter, setFilter] = useState('全部');
  const [skill, setSkill] = useState<{ name: string; slug: string | null; detail: string } | null>(null);
  const [copied, setCopied] = useState(false); const [copyError, setCopyError] = useState(false);
  const reduced = useReducedMotion();
  const visibleProjects = projects.filter(p => filter === '全部' || p.categories.includes(filter));
  return <main id="main" className="portfolio-home">
    <section className="hero container" aria-labelledby="hero-title">
      <Reveal className="hero-copy"><div className="availability"><span className="status-dot" />2026 届 · 目标城市 深圳</div>
        <p className="hello">Hi，我是</p><h1 id="hero-title">王冉冉<span className="wave" aria-label="挥手">👋</span></h1>
        <h2 className="hero-tagline">从业务问题出发，<br />让 AI <span>真正落地。</span></h2>
        <p className="hero-description">专注于 AI 解决方案设计、工作流搭建<br className="desktop-break" />与业务系统交付。</p>
        <div className="hero-actions"><MagneticLink href="#projects">探索我的项目<ArrowUpRight size={18} /></MagneticLink><MagneticLink href={profile.resume} secondary download><Download size={16} />下载简历</MagneticLink></div>
        <div className="hero-tags">{['AI Workflow', 'Solution Design', 'Data Analytics', 'AI Native'].map(t => <span key={t}>{t}</span>)}</div>
      </Reveal>
      <Reveal className="hero-image" delay={.15}><Portrait /></Reveal>
      <a className="scroll-cue" href="#projects"><ArrowDown size={16} />向下，看看如何落地<span>SELECTED WORK · 2025—2026</span></a>
    </section>

    <section className="chapter-band about-band" id="about"><div className="section container">
      <Reveal className="section-heading"><span className="eyebrow">01 / ABOUT ME</span><h2>理解业务。<br /><span className="muted">也把想法做出来。</span></h2></Reveal>
      <div className="about-layout"><Reveal className="about-copy"><p className="large-copy">我关注的不是 AI 能做多少，<br />而是它能解决什么。</p><p>从国际经济与贸易的学习，到内容获客、广告投放与跨境运营的实践，我习惯从业务问题出发，梳理需求与数据，再设计可验证的 AI 方案。</p><p>通过 AI 辅助开发、工作流搭建和实验分析，推动方案落地。我的重点是业务理解、方案设计与交付迭代。</p><p>{aiCommunityIntro}</p><div className="education"><GraduationCap size={23} /><div><strong>{profile.education}</strong><span>{profile.major} · {profile.graduation}</span></div></div></Reveal>
        <Reveal className="polaroid-wrap"><div className="polaroid">{profile.portrait ? <img src={profile.portrait} alt="王冉冉的简历头像" width={900} height={1200} loading="lazy" /> : <div className="portrait-placeholder">个人照片待补充</div>}<div><span>保持好奇，认真落地。</span><small>RANRAN / 2026</small></div></div><span className="polaroid-note">Business first. Always curious.</span></Reveal></div>
    </div></section>

    <section className="projects-band" id="projects"><div className="container section">
      <Reveal className="section-heading heading-row"><div><span className="eyebrow">02 / SELECTED WORK</span><h2>三个项目。<br /><span className="muted">三个真实的业务问题。</span></h2></div><p>从内容获客，到广告生产，再到数据分析。<br />看看问题如何被拆解、设计与验证。</p></Reveal>
      <div className="filters" role="group" aria-label="项目分类">{categories.map(c => <button key={c} aria-pressed={c === filter} onClick={() => setFilter(c)} className={c === filter ? 'active' : ''}>{c}</button>)}</div>
      <motion.div layout={!reduced} className="project-grid"><AnimatePresence mode="popLayout">{visibleProjects.map(p => <motion.article layout={!reduced} key={p.slug} className={`project-card ${p.slug === 'topify' && visibleProjects.length === 3 ? 'wide-card' : ''}`} initial={false} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0 }} transition={{ duration: .3 }}>
        <Link href={`/projects/${p.slug}/`} className="project-main-link"><ProjectVisual project={p} /><div className="project-content"><div className="project-meta"><span>{p.company} · {p.role}</span><span>{p.date}</span></div><h3>{p.title}<ArrowUpRight size={25} /></h3><p>{p.subtitle}</p><div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div></Link>
        <div className="project-bottom"><span>{p.slug === 'topify' ? '15 个账号 · 51 条客资' : p.slug === 'beike' ? '12 版 Skill · 15× 生产效率' : '3h+ → 15min 单日分析'}</span><Link href={`/projects/${p.slug}/`} className="preview-button" aria-label={`查看${p.title}案例`} title="查看完整案例"><ArrowUpRight size={19} /></Link></div>
      </motion.article>)}</AnimatePresence></motion.div>
      <p className="content-note">指标均附项目语境；案例明确区分已实现、方案设计与后续规划。</p>
    </div></section>

    <section className="chapter-band skills-band" id="skills"><div className="section container"><Reveal className="section-heading heading-row"><div><span className="eyebrow">03 / CAPABILITIES & TOOLS</span><h2>工具是手段。<br /><span className="muted">解决问题，才是能力。</span></h2></div><p>每项能力，都回到实际使用。<br />有依据的应用，以及待补充的细节。</p></Reveal>
      <div className="skills-groups">{skills.map((group, i) => <Reveal key={group.group} className="skill-row"><div><span className="skill-number">0{i + 1}</span><h3>{group.group}</h3></div><div className="skill-buttons">{group.items.map(s => <button key={s.name} onClick={() => setSkill(s)}>{s.name}<ArrowUpRight size={14} /></button>)}</div></Reveal>)}</div>
    </div></section>

    <section className="more-band" id="more"><div className="section container"><Reveal className="section-heading"><span className="eyebrow">04 / BEYOND THE PROJECTS</span><h2>经历，让理解更具体。</h2></Reveal><div className="more-grid">{more.map((m, i) => <Reveal key={m.title}><div className="more-item"><span className="more-index">0{i + 1}</span><span className="eyebrow">{m.label}</span><h3>{m.title}</h3><p>{m.text}</p></div></Reveal>)}</div><Reveal className="honors"><GraduationCap size={19} /><span>专业排名前 15%</span><span>国家奖项 3 项</span><span>省级及校级奖项 10 余项</span><span>CET-4</span></Reveal></div></section>

    <section className="chapter-band contact-band" id="contact"><div className="contact section container"><Reveal><span className="eyebrow">05 / LET’S CONNECT</span><div className="contact-heading"><h2>下一个业务问题，<br /><span className="muted">一起解。</span></h2><ArrowUpRight size={70} strokeWidth={1} /></div><div className="contact-links"><a href={`mailto:${profile.email}`} className="contact-email"><Mail size={23} />{profile.email}<ArrowUpRight size={20} /></a><button className="icon-button" aria-label="复制邮箱" title="复制邮箱" onClick={async () => { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }}>{copied ? <Check size={19} /> : <Copy size={19} />}</button><span role="status" className="copy-status">{copyError ? '请手动复制上方邮箱' : copied ? '邮箱已复制' : ''}</span></div><div className="contact-secondary"><a href={`tel:${profile.phone}`}><Phone size={15} />{profile.phone}</a><span><MapPin size={15} />目标城市 · 深圳</span><a href={profile.resume} download><Download size={15} />简历 PDF</a></div></Reveal></div></section>

    {skill && <Modal title={skill.name} onClose={() => setSkill(null)}><span className="eyebrow">实际应用与依据</span><p>{skill.detail}</p>{skill.slug ? <CaseLink slug={skill.slug}>查看关联项目</CaseLink> : <p className="content-note">尚未提供独立案例详情，不展示虚构的熟练度。</p>}</Modal>}
  </main>;
}
