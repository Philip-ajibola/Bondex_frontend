import data from "../home/service/data.ts";
import style from "./index.module.css";
import sideImage from '../../assets/Side Image (1).png'
import {Boards, OurService} from "./data.ts";
import X from '../../assets/Icon-Twitter (1).png'
import LinkendIn from '../../assets/Icon-Linkedin (1).png'
import insta from '../../assets/icon-instagram (1).png'


const AboutUs = () =>(
    <div className={style.container}>
        <div className={style.firstDiv}>
            <div className={style.firstDiv_1}>
                <p className={style.p1}>Our Story</p>
                <p className={style.p2}>Launce in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active
                    presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
                    Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region</p>
                <p className={style.p2}>
                    Bobby's Store has more than 1 Million products to offer, growing at a very fast. Bobby's Store offers a
                    diverse assortment in categories ranging  from consumer.
                </p>
            </div>
            <div className={style.firstDiv_2}>
                <img src={sideImage} alt={'Image'}/>
            </div>
        </div>
        <div className={style.secondDiv}>
            {OurService.map((item)=> (
                <div className={style.secondDiv_1}>
                    <img src={item.image} alt={"IMG"}/>
                    <p className={style.p1}>{item.count}</p>
                    <p className={style.p2}>{item.description}</p>
                </div>
            ))}

        </div>
        <div className={style.thirdDiv}>
            {Boards.map((board)=>(
                <div className={style.thirdDiv_1}>
                    <img className={style.img} src={board.image} alt={"IMG"}/>
                    <p className={style.p1}>{board.name}</p>
                    <p className={style.p2}>{board.role}</p>
                    <div className={style.thirdDiv_1_1}>
                        <img src={X} alt={"tweeter"}/>
                        <img src={insta} alt={'Instagram'}/>
                        <img src={LinkendIn} alt={'LinkedIn'}/>
                    </div>
                </div>
            ))}
        </div>
        <div className={style.forthDiv}>
            {data.map((item) => (
                <div className={style.forthContainer}>
                    <img src={item.image} alt={"IMG"}/>
                    <p className={style.firstP}>{item.serviceType}</p>
                    <p className={style.secondP}>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
)
export default AboutUs;