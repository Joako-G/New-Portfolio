import type { IProject } from '../interfaces/IProject'
import { CodeSvg } from './CodeSvg';
import { OpenInNewSvg } from './OpenInNewSvg';
import styles from './Project.module.css'

interface ProjectProps {
    project: IProject;
}

export function Project({ project }: ProjectProps) {
    const { title, description, stacks, status, gitUrl, webUrl, image } = project

    return (
        <article className={styles.card}>
            <div className={styles.media}>
                <img src={`/images/${image}`} alt={title} loading="lazy" />
                <span className={styles.status}>{status.toUpperCase()}</span>
            </div>
            <div className={styles.infoCard}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.technologies}>
                    {
                        stacks.map((stack) => (
                            <li key={stack}>{stack}</li>
                        ))
                    }
                </ul>
                <div className={styles.footer}>
                    <a href={gitUrl} target="_blank" rel="noopener noreferrer">
                        <CodeSvg />
                        <span>View Code</span>
                    </a>
                    <a href={webUrl} target="_blank" rel="noopener noreferrer">
                        <OpenInNewSvg />
                        <span>Live Demo</span>
                    </a>
                </div>
            </div>
        </article>
    )
}
