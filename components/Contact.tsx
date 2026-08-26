import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: allen.haici.ai@gmail.com</p>
      <div className={styles.social}>
        <a href="https://github.com/haicil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github" />
        </a>
        <a href="https://linkedin.com/in/allen-haici-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </section>
  )
}
