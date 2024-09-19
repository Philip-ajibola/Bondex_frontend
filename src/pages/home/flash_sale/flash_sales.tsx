import style from './index.module.css'
import left from '../../../assets/Vector (2).png'
import right from '../../../assets/Vector (3).png'
import data from "./data.ts";
import Item from "../../../component/item/item.tsx";
import CustomButton from "../../../component/customeButton/customButton.tsx";
import {useNavigate} from "react-router-dom";

export const FlashSale = ()=>{
    const navigate = useNavigate();
    const onProductClick = ({index}:{index:number})=>{
        const product = data[index];
        navigate('/one-product',{state:{data:product}});
    }
    const handleViewAllProduct = ()=>{
        navigate('/view-all',{state:{data: data.slice(0,16),header: "Our Products"}});
    }
    return(
        <>
            <div className={style.mainDiv}>
                <div className={style.innerDiv}>
                    <div className={style.flashContainer}>
                        <div className={style.firstDiv}>
                            <div className={style.red}></div>
                            <div className={style.today}>Today's</div>
                        </div>
                        <div className={style.product2}>
                            <div className={style.flashSales}>Flash Scores</div>
                            <div className={style.days}>
                                <div>
                                    <p className={style.firstP}>Days</p>
                                    <h2 className={style.firstH}>03</h2>
                                </div>
                                <div className={style.dot}>:</div>
                                <div>
                                    <p className={style.firstP}>Hours</p>
                                    <h2 className={style.firstH}>23</h2>
                                </div>
                                <div className={style.dot}>:</div>
                                <div>
                                    <p className={style.firstP}>Minutes</p>
                                    <h2 className={style.firstH}>15</h2>
                                </div>
                                <div className={style.dot}>:</div>
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
                    {data.slice(0, 4).map((item,index)=>(
                        <div>
                            <Item item={item} onclick={()=>onProductClick(index)}/>
                        </div>
                    ))}
                </div>
                <div className={style.button}>
                    <CustomButton text={"View All Products"} style={style.customButton} onPress={()=>handleViewAllProduct()}/>
                </div>
            </div>
        </>
    )
}