import { useId } from 'react'
import styles from './Contact.module.css'
import { SendSvg } from './SendSvg'
import emailjs from '@emailjs/browser'

export function Contact() {
    const idOportunity = useId()
    const idUser = useId()
    const idEmail = useId()
    const idMessage = useId()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const oportunity = formData.get(idOportunity)
        const user = formData.get(idUser)
        const email = formData.get(idEmail)
        const message = formData.get(idMessage)
        console.log('Email: ', email)

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                oportunity: oportunity,
                user: user,
                message: message,
                email: email
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            alert("Enviado")
        })
            .catch(() => {
                alert("error")
            })
    }

    return (
        <section id="contact" className={styles.container}>
            <div className={styles.console}>
                <div className={styles.rodTop}>
                    <div className={styles.circle} />
                    <div className={styles.circle} />
                    <div className={styles.circle} />
                    <h4 className={styles.title}>TERMINAL_COMMAND</h4>
                </div>
                <form onSubmit={handleSubmit} action="">
                    <h3>INITIATING_CONTACT_SEQUENCE</h3>
                    <h3 className={styles.title}>READY_TO_RECEIVE_INPUT</h3>

                    <label htmlFor="oportunity">OPPORTUNITY_TYPE</label>
                    <input required type="text" id='oportunity' name={idOportunity} placeholder='JOB_OFFER / FREELANCE / COLLAB' />

                    <label htmlFor="username">FULL_NAME</label>
                    <input required type="text" id='username' name={idUser} placeholder='FULL_NAME' />

                    <label htmlFor="email">EMAIL_ADDRESS</label>
                    <input required type="email" id='email' name={idEmail} placeholder='EMAIL_ADDRESS' />

                    <label htmlFor="message">MESSAGE</label>
                    <textarea required name={idMessage} id="message" placeholder='ENTER_YOUR_MESSAGE_' />

                    <button className={styles.btnSend}>
                        <SendSvg />
                        SEND_MESSAGE
                    </button>

                </form>
            </div>
        </section>
    )
}