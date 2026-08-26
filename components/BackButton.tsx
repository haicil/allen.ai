'use client'
import { useRouter } from 'next/navigation'
import styles from './ProjectLayout.module.css'

export default function BackButton() {
  const router = useRouter()
  return (
    <button type="button" onClick={() => router.back()} className={styles.backLink}>
      ← Back to Projects
    </button>
  )
}
