import type { IStat } from "../interfaces/Stat"
import { Stat } from "./Stat"
import style from './Stats.module.css'

interface StatsProps {
    stats: IStat[]
}

export function Stats({ stats }: StatsProps) {
    return (
        <section id='skills' className={style.container}>
            <h1 className={style.title}>CHARACTER_STATS</h1>
            <div className={style.containerCard}>
                {
                    stats.map((stat) => (
                        <Stat key={stat.id} stat={stat} />
                    ))
                }
            </div>
        </section>
    )
}