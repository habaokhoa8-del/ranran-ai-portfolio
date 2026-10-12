'use client';

import { useEffect, useRef } from 'react';

export function PointerLight() {
  const light = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let x = 0;
    let y = 0;
    const hide = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (light.current) light.current.dataset.visible = 'false';
      if (cursor.current) cursor.current.dataset.visible = 'false';
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== 'mouse') { hide(); return; }
      x = event.clientX;
      y = event.clientY;
      if (cursor.current) cursor.current.dataset.interactive = String(event.target instanceof Element && !!event.target.closest('a,button,input,summary,[role="button"]'));
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!media.matches) return;
        if (light.current) {
          light.current.style.setProperty('--pointer-x', `${x}px`);
          light.current.style.setProperty('--pointer-y', `${y}px`);
          light.current.dataset.visible = 'true';
        }
        if (cursor.current) {
          cursor.current.style.transform = `translate3d(${x - 17}px, ${y - 17}px, 0)`;
          cursor.current.dataset.visible = 'true';
        }
      });
    };
    const onPreferenceChange = () => { cancelAnimationFrame(frame); frame = 0; hide(); };
    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    media.addEventListener('change', onPreferenceChange);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      media.removeEventListener('change', onPreferenceChange);
    };
  }, []);

  return <><div ref={light} className="pointer-light" aria-hidden="true" data-visible="false" /><div ref={cursor} className="pointer-ring" aria-hidden="true" data-visible="false"><span /></div></>;
}
