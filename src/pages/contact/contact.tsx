import CustomButton from "../../component/customeButton/customButton.tsx";
import style from './index.module.css'
import call from '../../assets/icons-phone.png'
import mail from '../../assets/icons-mail.png'

const Contact = ()=>(
    <div className={style.motherDiv}>
        <div className={style.container}>
            <div className={style.firstDiv}>
                <div className={style.firstDiv_1}>
                    <div className={style.firstDiv_1_1}>
                        <img src={call} alt={'IMG'}/>
                        <p className={style.p1}>Call To Us</p>
                    </div>
                    <p className={style.p2}>We are available 24/7, 7 days a week.</p>
                    <p className={style.p2}>Phone: +8801611112222</p>
                </div>
                <div className={style.line}></div>
                <div className={style.firstDiv_1}>
                    <div className={style.firstDiv_1_1}>
                        <img src={mail} alt={''}/>
                        <p className={style.p1}>Write To US</p>
                    </div>
                    <p className={style.p2}>Fill out our form and we will contact you within 24 hours.</p>
                    <p className={style.p2}>Emails: customer@exclusive.com</p>
                    <p className={style.p2}>Emails: support@exclusive.com</p>
                </div>
            </div>
            <div className={style.secondDiv}>
                <div className={style.secondDiv_1}>
                    <input placeholder={'Enter Your Name *'}/>
                    <input placeholder={'Enter Your Email *'}/>
                    <input placeholder={'Enter Your Phone *'}/>
                </div>
                <input placeholder={'Enter Your Message'}/>
                <CustomButton text={'Send Message'} style={style.customButton}/>
            </div>
        </div>
    </div>
)
export default Contact;