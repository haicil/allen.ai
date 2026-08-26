import type { Project } from '@/data/projects'
import { BASE_PATH } from '@/lib/basePath'
import BackButton from './BackButton'
import styles from './ProjectLayout.module.css'

export default function ProjectLayout({ project }: { project: Project }) {
  return (
    <div className={styles.body}>
      <BackButton />

      <h1 className={styles.h1}>{project.title}</h1>
      <h2 className={styles.date}>{project.date}</h2>

      <div className={styles.heroWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE_PATH}/images/${project.heroImage}`} alt={project.title} className={styles.heroImg} />
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}><h2>Overview</h2></div>
        {project.overview.map((para, i) => <p key={i}>{para}</p>)}
        {project.link && (
          <div className={styles.relatedLink}>
            <a href={project.link.href} target="_blank" rel="noopener noreferrer">
              {project.link.label}
            </a>
          </div>
        )}
      </div>

      {project.video && (
        <div className={styles.section}>
          <div className={styles.sectionTitle}><h2>Video Demo</h2></div>
          <video controls autoPlay muted loop playsInline className={styles.video}>
            <source src={`${BASE_PATH}/videos/${project.video}`} type="video/mp4" />
          </video>
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionTitle}><h2>Images</h2></div>
          <div className={styles.imageGrid}>
            {project.images.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={`${BASE_PATH}/images/${img}`} alt={`${project.title} ${i + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
