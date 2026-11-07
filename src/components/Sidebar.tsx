import { GitHubSvg } from './GitHubSvg'
import { SendSvg } from './SendSvg'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <div className={styles.container}>
            <svg className={styles.logo} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M405.333333 469.333333h213.333334v426.666667H405.333333zM128 256h213.333333v640H128zM682.666667 128h213.333333v768H682.666667z" fill="#00BCD4" />
            </svg>

            <div className={styles.line} aria-hidden="true" />

            <nav className={styles.links} aria-label="Social links">
                <a
                    href="https://github.com/Joako-G"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                >
                    <GitHubSvg />
                </a>
                <a href="#contact" aria-label="Contact" title="Contact">
                    <SendSvg />
                </a>
            </nav>
        </div>
    )
}
