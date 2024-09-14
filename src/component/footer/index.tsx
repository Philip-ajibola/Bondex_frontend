import image1 from '../../assets/Qr Code.png'
import image2 from '../../assets/AppStore.png'
import image3 from '../../assets/GooglePlay.png'
import image4 from '../../assets/Icon-Facebook.png'
import image5 from '../../assets/Icon-Twitter.png'
import image6 from '../../assets/icon-instagram.png'
import image7 from '../../assets/Icon-Linkedin.png'
import {Link} from "react-router-dom";
import style from './index.module.css'
export const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return(
        <div className={style.motherDiv}>
            <div className={style.container}>
                <div className={style.firstContainer}>
                    <p className={style.p1}>Bobby's Store</p>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <input placeholder={'enter Your email'} className={style.input}/>
                </div>
                <div className={style.secondContainer}>
                    <p className={style.p1}>Support</p>
                    <p> 312 herbert Macaulay way, Sabo Yabo, Lagos</p>
                    <p>exclusive@gmail.com</p>
                    <p>09050006000</p>
                </div>
                <div className={style.thirdContainer}>
                    <p className={style.p1}>Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Term Of Use </p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className={style.forthContainer}>
                    <p className={style.p1}>Download App</p>
                    <p className={style.p2}>Save Up to $3 On Our New (New Users Only)</p>
                    <div className={style.app}>
                        <div className={style.innerApp}>
                            <img className={style.img} src={image1}/>
                            <div className={style.googleApp}>
                                <img className={style.img} src={image2}/>
                                <img className={style.img} src={image3}/>
                            </div>
                        </div>
                        <div className={style.link}>
                            <Link to={'#'}>
                                <img src={image4}/>
                            </Link>
                            <Link to={'#'}>
                                <img src={image5}/>
                            </Link>
                            <Link to={'#'}>
                                <img src={image6}/>
                            </Link>
                            <Link to={'#'}>
                                <img src={image7}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.lastDiv}>
                Copyright Rimel {currentYear}. All right reserved
            </div>
        </div>

    )
}