import styles from './Contact.module.css'
import { SendSvg } from './SendSvg'

export function Contact() {
    return (
        <section id="contact" className={styles.container}>
            <div className={styles.console}>
                <div className={styles.rodTop}>
                    <div className={styles.circle} />
                    <div className={styles.circle} />
                    <div className={styles.circle} />
                    <h4 className={styles.title}>TERMINAL_COMMAND</h4>
                </div>
                <form action="">
                    <h3>INITIATING_COMUNICATION_PROTOCOL</h3>
                    <h3 className={styles.title}>WAITING_FOR_USER_INPUT_STREAMS</h3>
                    <label htmlFor="username">USER_ALIAS</label>
                    <input type="text" id='username' name='username' placeholder='ENTER_NAME' />

                    <label htmlFor="email">FREQUENCY_ID</label>
                    <input type="email" id='email' name='email' placeholder='ENTER_EMAIL' />

                    <label htmlFor="message">TRANSMISION_DATA</label>
                    <textarea name="message" id="message" placeholder='ENTER_YOUR_MESSAGE_' />

                    <button className={styles.btnSend}>
                        <SendSvg />
                        SEND_TRANSMISSION
                    </button>

                </form>
            </div>
        </section>
    )
}