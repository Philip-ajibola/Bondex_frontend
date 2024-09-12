import CustomButton from "../../../component/customeButton/customButton.tsx";
import image from '../../../assets/Frame 694.png'
import data from "./data.ts";
import style from './index.module.css'
const Advert = ()=>{
    return (
        <div className={style.container}>
            <div className={style.motherContainer}>
                <div className={style.firstContainer}>
                    <p className={style.p}>categories</p>
                    <div className={style.firstDiv}>
                        Enhance Your Music Experience
                    </div>
                    <div className={style.secondDiv}>
                        {data.map((item) => (
                            <div className={style.firstDiv1}>
                                <p>{item.number}</p>
                                <p>{item.day}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.secondContainer}>
                    <img className={style.img} src={image} alt={'Image'}/>
                </div>
            </div>

            <CustomButton text={'Buy Now'} style={style.customButton}/>
        </div>
    )
}

export default Advert;