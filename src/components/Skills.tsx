import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { ApiSvg } from './ApiSvg'
import { ReactSvg } from './ReactSvg'
import styles from './Skills.module.css'
import { TsVsg } from './TsSvg'

interface SkillItem {
    name: string
    value: number
    color: string
    icon: ReactNode
}

const SKILLS: SkillItem[] = [
    { name: 'REACT', value: 70, color: 'var(--bg-btn-primary)', icon: <ReactSvg /> },
    { name: 'TYPESCRIPT', value: 60, color: 'var(--accent-ts)', icon: <TsVsg /> },
    { name: 'STATE_MANAGEMENT (ZUSTAND)', value: 50, color: 'var(--accent-zustand)', icon: <span aria-hidden="true">🐻</span> },
    { name: 'API_INTEGRATION', value: 60, color: 'var(--accent-api)', icon: <ApiSvg /> },
]

export function Skills() {
    const listRef = useRef<HTMLUListElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = listRef.current
        if (!node) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true)
                observer.disconnect()
            }
        }, { threshold: 0.3 })

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <section id='technologies' className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.info}>
                    <h2 className={styles.title}>UPGRADE_TREE</h2>
                    <p className={styles.description}>
                        Tecnologías con las que trabajo a diario y que sigo perfeccionando en cada proyecto.
                        Mi foco actual está en escribir componentes reutilizables, tipar todo con TypeScript
                        y manejar el estado de forma predecible.
                    </p>
                    <div className={styles.label}>
                        <div className={styles.circle} />
                        <span>CURRENT_SKILLS</span>
                    </div>
                </div>

                <ul ref={listRef} className={`${styles.skills} ${visible ? styles.isVisible : ''}`}>
                    {SKILLS.map(({ name, value, color, icon }) => (
                        <li
                            key={name}
                            className={styles.skill}
                            style={{ '--skill-value': `${value}%`, '--skill-color': color } as CSSProperties}
                        >
                            <div className={styles.skillInfo}>
                                {icon}
                                <h3 className={styles.tech}>{name}</h3>
                                <p className={styles.value}>{value}%</p>
                            </div>
                            <div
                                className={styles.rod}
                                role="progressbar"
                                aria-label={name}
                                aria-valuenow={value}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div className={styles.rodFill} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
