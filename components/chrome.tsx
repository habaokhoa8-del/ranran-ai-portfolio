'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import { profile } from '@/content/portfolio';
import { PointerLight } from './pointer-light';

const links = [{ label: '关于', id: 'about' }, { label: '项目', id: 'projects' }, { label: '能力', id: 'skills' }, { label: '更多', id: 'more' }];
export function Chrome({ children }: { children: ReactNode }) {
  const pathname = usePathname(); const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll(); const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const reduced = useReducedMotion();
  useEffect(() => { setMenu(false); }, [pathname]);
  return <>
    <PointerLight />
    <a className="skip-link" href="#main">跳到正文</a>
    <motion.div className="scroll-progress" style={{ scaleX: reduced ? scrollYProgress : progress }} />
    <header className="nav-wrap"><nav className="nav" aria-label="主导航">
      <Link href="/" className="wordmark" onClick={() => setMenu(false)}><span className="brand-mark">r.</span><span>王冉冉<span className="brand-sub"> / AI SOLUTIONS</span></span></Link>
      <div className="desktop-nav">{links.map(link => <Link key={link.id} href={`/#${link.id}`}>{link.label}</Link>)}</div>
      <Link href="/#contact" className="nav-contact">聊聊合作 <ArrowUpRight size={15} /></Link>
      <button className="mobile-toggle icon-button" aria-label={menu ? '关闭导航' : '打开导航'} aria-expanded={menu} aria-controls="mobile-navigation" onClick={() => setMenu(!menu)}>{menu ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>{menu && <div className="mobile-nav" id="mobile-navigation">{links.map(link => <Link key={link.id} href={`/#${link.id}`} onClick={() => setMenu(false)}>{link.label}</Link>)}<Link href="/#contact" onClick={() => setMenu(false)}>联系</Link></div>}</header>
    {children}
    <footer className="footer container"><Link href="/" className="wordmark"><span className="brand-mark">r.</span><span>{profile.name}</span></Link><p>从业务问题出发，让 AI 真正落地。</p><span>© 2026 · AI 辅助设计与开发</span></footer>
  </>;
}
