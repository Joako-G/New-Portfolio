import type { IProject } from '../interfaces/IProject'
import { Project } from './Project'
import styles from './Projects.module.css'

interface ProjectsProps {
    projects: IProject[]
}

export function Projects({ projects }: ProjectsProps) {
    return (
        <section id='projects' className={styles.container}>
            <div className={styles.titleSection}>
                <h1>MISSION_LOGS</h1>
                <div className={styles.border} />
            </div>
            <div className={styles.cards}>
                {
                    projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))
                }
            </div>
        </section>
    )
}