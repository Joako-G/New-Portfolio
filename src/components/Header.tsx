import { useEffect, useState } from 'react'
import styles from './Header.module.css'

export function Header() {
    const [active, setActive] = useState('aboutMe')

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect()
                if (rect.top >= 0 && rect.top < 300) {
                    // console.log(section.id)
                    setActive(section.id)
                }
            })
        }

        // console.log('Active: ', active)
        // window.history.replaceState(null, '', active)

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])


    return (
        <header className={styles.containerHeader}>
            <div className={styles.info}>
                <h1 className={styles.nameDev}>DEVELOPER_ID: Joako_Dev</h1>
                <strong>|</strong>
                <p>STATUS: Searching work</p>
            </div>
            <div className={styles.sections}>
                <nav className={styles.navBar}>
                    <ul>
                        <li className={active === 'aboutMe' ? `${styles.item} ${styles.isActive}` : styles.item}><a href="#aboutMe">Sobre mi</a></li>
                        <li className={active === 'skills' ? `${styles.item} ${styles.isActive}` : styles.item}><a href="#skills">Habilidades</a></li>
                        <li className={active === 'projects' ? `${styles.item} ${styles.isActive}` : styles.item}><a href="#projects">Proyectos</a></li>
                        <li className={active === 'technologies' ? `${styles.item} ${styles.isActive}` : styles.item}><a href="#technologies">Tecnologias</a></li>
                        <li className={active === 'contact' ? `${styles.item} ${styles.isActive}` : styles.item}><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}