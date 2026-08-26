import { experiences } from '@/data/experience'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className={styles.timeline}>
        <div className={styles.rail} aria-hidden />
        {experiences.map((exp) => (
          <div key={`${exp.organization}-${exp.period}`} className={styles.entry}>
            <div className={styles.nodeCol} aria-hidden>
              <div className={styles.node} />
            </div>
            <div className={styles.content}>
              <p className={styles.titleRow}>{exp.title}</p>
              <div className={styles.orgRow}>
                <span className={styles.org}>{exp.organization}</span>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.location}>{exp.location}</p>
              <p className={styles.summary}>{exp.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
