import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <div className={styles.container}>
            <svg width="800px" height="800px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M405.333333 469.333333h213.333334v426.666667H405.333333zM128 256h213.333333v640H128zM682.666667 128h213.333333v768H682.666667z" fill="#00BCD4" />
            </svg>
        </div>
    )
}