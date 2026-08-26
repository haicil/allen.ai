import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectLayout from '@/components/ProjectLayout'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  return { title: project ? `${project.title} | Allen Ai` : 'Allen Ai' }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) notFound()
  return <ProjectLayout project={project} />
}
