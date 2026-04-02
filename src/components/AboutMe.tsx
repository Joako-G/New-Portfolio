import styles from './AboutMe.module.css'
import imagePerfil from '../assets/perfil.jpeg'

export function AboutMe() {
    return (
        <section id='aboutMe' className={styles.container}>
            <div className={styles.content}>
                <p className={styles.status}>SEARCHING JOB</p>
                <h1>FRONTEND</h1>
                <h1>DEVELOPER</h1>
                <div className={styles.info}>
                    <div className={styles.image}>
                        <img src={imagePerfil} alt="Matias Gallardo" />
                        <p className={styles.id}>ID: Dev_JoakoG</p>
                    </div>
                    <div className={styles.aboutMe}>
                        <p>
                            Soy un desarrollador frontend apasionado por crear experiencias web excepcionales.
                            Con habilidades en HTML, CSS, JavaScripts, TypeSrcipt y React me esfuerzo por
                            construir interfaces de usuario atractivas y funcionales.
                        </p>
                        <div className={styles.actions}>
                            <button className={styles.btnStartJob}>START_JOB</button>
                            <button className={styles.btnCv}>
                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}