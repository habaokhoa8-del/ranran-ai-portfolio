import type { Metadata } from 'next';
import { Chrome } from '@/components/chrome';
import { profile } from '@/content/portfolio';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: '王冉冉 · AI 解决方案工程师 / FDE', template: '%s · 王冉冉作品集' },
  description: '从业务问题出发，让 AI 真正落地。探索王冉冉的 AI 工作流、获客实验、广告投放与跨境数据分析项目。',
  openGraph: { title: '王冉冉 · AI 解决方案作品集', description: '业务理解、AI 工作流与数据验证。三个真实项目的设计与交付。', locale: 'zh_CN', type: 'website' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-CN"><body><noscript><style>{'.motion-reveal{opacity:1!important;transform:none!important}'}</style></noscript><Chrome>{children}</Chrome></body></html>;
}
