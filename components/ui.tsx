'use client';

import { motion, useInView, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, X, ImagePlus, ZoomIn } from 'lucide-react';
import Link from 'next/link';

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={`motion-reveal ${className}`} initial={false} whileInView={reduced ? undefined : { opacity: [.6, 1], y: [18, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function MagneticLink({ children, href, secondary = false, download = false }: { children: ReactNode; href: string; secondary?: boolean; download?: boolean }) {
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 300, damping: 25 });
  const y = useSpring(0, { stiffness: 300, damping: 25 });
  return <motion.span style={{ x, y, display: 'inline-flex' }} onPointerMove={e => {
    if (reduced || e.pointerType !== 'mouse') return;
    const box = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - box.left - box.width / 2) * .1); y.set((e.clientY - box.top - box.height / 2) * .1);
  }} onPointerLeave={() => { x.set(0); y.set(0); }}><Link className={`button ${secondary ? 'secondary' : 'primary'}`} href={href} download={download || undefined}>{children}</Link></motion.span>;
}

export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(value);
  useEffect(() => {
    if (!visible || reduced) return;
    const start = performance.now(); let raf = 0;
    const step = (now: number) => { const t = Math.min((now - start) / 1100, 1); setCount(Math.round(value * (1 - (1 - t) ** 3))); if (t < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step); return () => cancelAnimationFrame(raf);
  }, [visible, reduced, value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export function Modal({ title, children, onClose, className = '' }: { title: string; children: ReactNode; onClose: () => void; className?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = 'detail-dialog-title';
  useEffect(() => {
    const element = ref.current; element?.showModal();
    const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { element?.close(); document.body.style.overflow = overflow; };
  }, []);
  return <dialog ref={ref} className={`modal ${className}`} aria-labelledby={titleId} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="modal-head"><h2 id={titleId}>{title}</h2><button className="icon-button" onClick={onClose} aria-label="关闭详情" title="关闭详情"><X size={20} /></button></div>
    {children}
  </dialog>;
}

export function AssetSlot({ title, path, caption }: { title: string; path: string | null; caption: string }) {
  const [expanded, setExpanded] = useState(false);
  return <><figure className={`asset-slot ${path ? 'has-asset' : ''}`}>
    {path ? <button className="asset-image-button" aria-label={`放大${title}`} title={`放大${title}`} onClick={() => setExpanded(true)}><img src={path} alt={title} loading="lazy" /><span className="asset-zoom"><ZoomIn size={20} /></span></button> : <><ImagePlus size={28} strokeWidth={1.3} /><strong>{title}</strong><span className="tag">真实素材待补充</span></>}
    <figcaption>{caption}</figcaption>
  </figure>{expanded && path && <Modal title={title} className="image-modal" onClose={() => setExpanded(false)}><div className="image-pan" tabIndex={0} role="region" aria-label={`${title}大图`}><img src={path} alt={title} /></div><p>{caption}</p></Modal>}</>;
}

export function CaseLink({ slug, anchor, children = '阅读完整案例' }: { slug: string; anchor?: string; children?: ReactNode }) {
  return <Link className="text-link" href={`/projects/${slug}/${anchor ? `#${anchor}` : ''}`}>{children}<ArrowUpRight size={17} /></Link>;
}
