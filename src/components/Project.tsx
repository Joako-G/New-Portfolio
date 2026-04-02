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
        <div className={styles.card}>
            <img src={`/images/${image}`} alt={title} />
            <span className={styles.status}> {status.toUpperCase()} </span>
            <div className={styles.infoCard}>
                <div className={styles.header}>
                    <h1> {title} </h1>
                </div>
                <div className={styles.body}>
                    <p> {description} </p>
                    <div className={styles.technologies}>
                        {
                            stacks.map((stack) => (
                                <span> {stack} </span>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.border} />
                    <div className={styles.links}>
                        <a href={gitUrl}>
                            <CodeSvg />
                            <p>View Code</p>
                        </a>
                        <a href={webUrl}>
                            <OpenInNewSvg />
                            <p>Aplicacion Web</p>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}