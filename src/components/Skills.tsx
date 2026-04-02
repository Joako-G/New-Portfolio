import { ApiSvg } from './ApiSvg'
import { ReactSvg } from './ReactSvg'
import styles from './Skills.module.css'
import { TsVsg } from './TsSvg'

export function Skills() {
    return (
        <section id='technologies' className={styles.container}>

            <div className={styles.info}>
                <h1 className={styles.title}>UPGRADE_TREE</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat commodi maiores
                    sint officiis numquam doloremque vitae omnis, explicabo non optio sunt quibusdam
                    corporis totam officia distinctio ratione obcaecati corrupti!
                </p>
                <div className={styles.label}>
                    <div className={styles.circle} />
                    <span >CURRENT_SKILLS</span>
                </div>
            </div>

            <div className={styles.skills}>
                <div className={styles.skill}>
                    <div className={styles.skillInfo}>
                        <ReactSvg />
                        <h4 className={styles.tech}>REACT</h4>
                        <p className={styles.value}>70%</p>
                    </div>
                    <div className={styles.rod}>
                        <div className={styles.rodReact} />
                    </div>
                </div>


                <div className={styles.skill}>
                    <div className={styles.skillInfo}>
                        <TsVsg />
                        <h4 className={styles.tech}>TYPESCRIPT</h4>
                        <p className={styles.value}>60%</p>
                    </div>
                    <div className={styles.rod}>
                        <div className={styles.rodTs} />
                    </div>
                </div>

                <div className={styles.skill}>
                    <div className={styles.skillInfo}>

                        🐻
                        <h4 className={styles.tech}>STATE_MANAGEMENT (ZUSTAND)</h4>
                        <p className={styles.value}>50%</p>
                    </div>
                    <div className={styles.rod}>
                        <div className={styles.rodZustand} />
                    </div>
                </div>

                <div className={styles.skill}>
                    <div className={styles.skillInfo}>
                        <ApiSvg />
                        <h4 className={styles.tech}> API_INTEGRATION</h4>
                        <p className={styles.value}>60%</p>
                    </div>
                    <div className={styles.rod}>
                        <div className={styles.rodApi} />
                    </div>
                </div>

            </div>

        </section>
    )
}