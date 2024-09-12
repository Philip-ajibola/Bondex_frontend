import style from './index.module.css'
import left from '../../../assets/Vector (2).png'
import right from '../../../assets/Vector (3).png'
import product1 from '../../../assets/g92-2-500x500 1.png'
import eye from '../../../assets/Fill Eye.png'
import heart from '../../../assets/Fill Heart.png'
import rating from '../../../assets/Frame 566.png'
import {data} from "./data.ts";
import Item from "../../../component/item/item.tsx";
import CustomButton from "../../../component/customeButton/customButton.tsx";

export const FlashSale = ()=>{
    return(
        <>
            <div className={style.mainDiv}>
                <div className={style.innerDiv}>
                    <div className={style.flashContainer}>
                        <div className={style.firstDiv}>
                            <div className={style.red}></div>
                            <div className={style.today}>Today's</div>
                        </div>
                        <div className={style.secondDiv}>
                            <div className={style.flashSales}>Flash Scores</div>
                            <div className={style.days}>
                                <div>
                                    <p className={style.firstP}>Days</p>
                                    <h2 className={style.firstH}>03</h2>
                                </div>
                                <div>:</div>
                                <div>
                                    <p className={style.firstP}>Hours</p>
                                    <h2 className={style.firstH}>23</h2>
                                </div>
                                <div>:</div>
                                <div>
                                    <p className={style.firstP}>Minutes</p>
                                    <h2 className={style.firstH}>15</h2>
                                </div>
                                <div>:</div>
                                <div>
                                    <p className={style.firstP}>Seconds</p>
                                    <h2 className={style.firstH}>56</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.arrows}>
                        <div className={style.arrowImg}>
                            <img src={left} alt={"left logo"} className={style.img}/>
                        </div>
                        <div className={style.arrowImg}>
                            <img src={right} alt={"right logo"} className={style.img}/>
                        </div>
                    </div>
                </div>
                <div className={style.productContainer}>
                    {data.slice(0, 4).map((item,)=>(
                            <Item item={item}/>
                    ))}
                </div>
                <div className={style.button}>
                    <CustomButton text={"View All Products"} style={style.customButton}/>
                </div>
            </div>
        </>
    )
}