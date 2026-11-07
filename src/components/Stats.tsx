import type { IStat } from "../interfaces/Stat"
import { Stat } from "./Stat"
import styles from './Stats.module.css'

interface StatsProps {
    stats: IStat[]
}

export function Stats({ stats }: StatsProps) {
    return (
        <section id='stats' className={styles.container}>
            <div className={styles.titleSection}>
                <h2>CHARACTER_STATS</h2>
                <div className={styles.border} />
            </div>
            <div className={styles.containerCard}>
                {
                    stats.map((stat) => (
                        <Stat key={stat.id} stat={stat} />
                    ))
                }
            </div>
        </section>
    )
}
