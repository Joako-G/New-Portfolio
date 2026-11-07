import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { ApiSvg } from './ApiSvg'
import { ReactSvg } from './ReactSvg'
import styles from './Skills.module.css'
import { TsVsg } from './TsSvg'

const MAX_LEVEL = 3

const LEVEL_LABELS: Record<SkillLevel, string> = {
    1: 'LVL_1 / LEARNING',
    2: 'LVL_2 / INTERMEDIATE',
    3: 'LVL_3 / ADVANCED',
}

type SkillLevel = 1 | 2 | 3

interface SkillItem {
    name: string
    level: SkillLevel
    color: string
    icon: ReactNode
}

const SKILLS: SkillItem[] = [
    { name: 'REACT', level: 2, color: 'var(--bg-btn-primary)', icon: <ReactSvg /> },
    { name: 'TYPESCRIPT', level: 2, color: 'var(--accent-ts)', icon: <TsVsg /> },
    { name: 'STATE_MANAGEMENT (ZUSTAND)', level: 1, color: 'var(--accent-zustand)', icon: <span aria-hidden="true">🐻</span> },
    { name: 'API_INTEGRATION', level: 2, color: 'var(--accent-api)', icon: <ApiSvg /> },
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
                    {SKILLS.map(({ name, level, color, icon }) => (
                        <li
                            key={name}
                            className={styles.skill}
                            style={{ '--skill-value': `${(level / MAX_LEVEL) * 100}%`, '--skill-color': color } as CSSProperties}
                        >
                            <div className={styles.skillInfo}>
                                {icon}
                                <h3 className={styles.tech}>{name}</h3>
                                <p className={styles.value}>{LEVEL_LABELS[level]}</p>
                            </div>
                            <div
                                className={styles.rod}
                                role="progressbar"
                                aria-label={name}
                                aria-valuenow={level}
                                aria-valuemin={0}
                                aria-valuemax={MAX_LEVEL}
                                aria-valuetext={LEVEL_LABELS[level]}
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
