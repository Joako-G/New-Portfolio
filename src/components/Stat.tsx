import type { IStat } from '../interfaces/Stat'
import styles from './Stat.module.css'

interface StatProps {
    stat: IStat
}

export function Stat({ stat }: StatProps) {
    return (
        <article className={`${styles.card} ${styles[`card${stat.id}`] ?? ''}`}>
            <h3>{stat.title}</h3>
            <div className={styles.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
            </div>
            <p>{stat.description}</p>
        </article>
    )
}
