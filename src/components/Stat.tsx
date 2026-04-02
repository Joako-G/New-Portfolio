import type { IStat } from '../interfaces/Stat'
import styles from './Stat.module.css'

interface StatProps {
    stat: IStat
}

export function Stat({ stat }: StatProps) {
    return (
        <div className={`${styles.card} ${styles[`card${stat.id}`]}`}>
            <h4>{stat.title}</h4>
            <div className={styles.value}>
                <h2>{stat.value}</h2>
                <span>{stat.label}</span>
            </div>
            <p>{stat.description}</p>
        </div>
    )
}