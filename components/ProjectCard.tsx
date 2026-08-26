import Link from 'next/link'
import type { Project } from '@/data/projects'
import { BASE_PATH } from '@/lib/basePath'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      {project.thumbnail && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${BASE_PATH}/images/${project.thumbnail}`}
          alt={project.title}
          className={styles.img}
        />
      )}
      <div className={styles.info}>
        <h3>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
