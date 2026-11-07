import { useEffect, useState } from 'react'
import styles from './Header.module.css'

const NAV_ITEMS = [
    { id: 'aboutMe', label: 'Sobre mí' },
    { id: 'stats', label: 'Stats' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'technologies', label: 'Tecnologías' },
    { id: 'contact', label: 'Contacto' },
]

export function Header() {
    const [active, setActive] = useState('aboutMe')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -55% 0px' }
        )

        NAV_ITEMS.forEach(({ id }) => {
            const section = document.getElementById(id)
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <header className={styles.containerHeader}>
            <div className={styles.info}>
                <h1 className={styles.nameDev}>DEVELOPER_ID: Joako_Dev</h1>
                <strong aria-hidden="true">|</strong>
                <p className={styles.status}>
                    <span className={styles.statusDot} aria-hidden="true" />
                    STATUS: Searching work
                </p>
            </div>
            <nav className={styles.navBar} aria-label="Main navigation">
                <ul>
                    {NAV_ITEMS.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={active === id ? `${styles.item} ${styles.isActive}` : styles.item}
                                aria-current={active === id ? 'location' : undefined}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
