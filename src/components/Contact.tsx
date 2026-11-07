import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'
import { SendSvg } from './SendSvg'
import emailjs from '@emailjs/browser'

type Status = 'idle' | 'sending' | 'success' | 'error'

const STATUS_MESSAGES: Record<Exclude<Status, 'idle'>, string> = {
    sending: '> TRANSMITTING_PACKETS...',
    success: '> MESSAGE_SENT. Te respondo a la brevedad.',
    error: '> TRANSMISSION_FAILED. Intentá de nuevo en unos minutos.',
}

export function Contact() {
    const [status, setStatus] = useState<Status>('idle')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)

        setStatus('sending')
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    oportunity: formData.get('oportunity'),
                    user: formData.get('user'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                }
            )
            form.reset()
            setStatus('success')
        } catch {
            setStatus('error')
        }
    }

    const isSending = status === 'sending'

    return (
        <section id="contact" className={styles.container}>
            <div className={styles.console}>
                <div className={styles.rodTop}>
                    <div className={styles.circle} />
                    <div className={styles.circle} />
                    <div className={styles.circle} />
                    <h2 className={styles.consoleTitle}>TERMINAL_COMMAND</h2>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.heading}>
                        <h3>INITIATING_CONTACT_SEQUENCE</h3>
                        <p className={styles.ready}>READY_TO_RECEIVE_INPUT<span className={styles.cursor}>_</span></p>
                    </div>

                    <label className={styles.field}>
                        <span>OPPORTUNITY_TYPE</span>
                        <input required type="text" name="oportunity" placeholder='JOB_OFFER / FREELANCE / COLLAB' />
                    </label>

                    <div className={styles.row}>
                        <label className={styles.field}>
                            <span>FULL_NAME</span>
                            <input required type="text" name="user" autoComplete="name" placeholder='FULL_NAME' />
                        </label>

                        <label className={styles.field}>
                            <span>EMAIL_ADDRESS</span>
                            <input required type="email" name="email" autoComplete="email" placeholder='EMAIL_ADDRESS' />
                        </label>
                    </div>

                    <label className={styles.field}>
                        <span>MESSAGE</span>
                        <textarea required name="message" placeholder='ENTER_YOUR_MESSAGE_' />
                    </label>

                    <button type="submit" className={styles.btnSend} disabled={isSending}>
                        <SendSvg />
                        {isSending ? 'SENDING...' : 'SEND_MESSAGE'}
                    </button>

                    <p
                        className={`${styles.feedback} ${status === 'error' ? styles.feedbackError : ''}`}
                        role="status"
                        aria-live="polite"
                    >
                        {status !== 'idle' && STATUS_MESSAGES[status]}
                    </p>
                </form>
            </div>
        </section>
    )
}
