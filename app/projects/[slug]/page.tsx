import { projects } from '@/content/portfolio';
import { CaseStudy } from '@/components/case-study';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = projects.find(p => p.slug === slug);
  return { title: p?.title, description: p?.summary, alternates: { canonical: `/projects/${slug}/` } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(p => p.slug === slug);
  if (!project) notFound(); return <CaseStudy project={project} />;
}
