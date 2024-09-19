import product1 from '../../../assets/ps5-slim-goedkope-playstation_large 1.png';
import product2 from '../../../assets/attractive-woman-wearing-hat-posing-black-background 1.png'
import product3 from '../../../assets/Frame 706.png'
import product4 from '../../../assets/Frame 707.png'
import SmallDiv from "../../../component/smallDiv/smallDiv.tsx";
import style from './index.module.css';
import Data from './data';
import {useNavigate} from "react-router-dom";
const NewArrival = ()=>{
    const navigate = useNavigate();
    const handleOnclick = (product:OurProduct) =>{
        console.log("onProductClick",product)
        navigate('/one-product',{state:{data:product}});
    }
    return (
        <div className={style.container}>
            <SmallDiv item={"Featured"} text={"New Arrival"}/>
            <div className={style.productDiv}>
                <div className={style.firstDiv}>
                    <div>
                        <img className={style.img} src={product1} alt={"IMG"}/>
                    </div>
                    <div className={style.description}>
                        <p>Play Station 5</p>
                        <p className={style.p}>Black and White version of the PS5 coming out on sale.</p>
                        <button className={style.link} onClick={()=>handleOnclick(Data[0])}>Shop Now</button>
                    </div>
                </div>
                <div className={style.secondProductDiv}>
                    <div className={style.product2}>
                            <div className={style.firstDiv1}>
                                <img className={style.img} src={product2} alt={"IMG"}/>
                            </div>
                            <div className={style.description}>
                                <p>Women's Collections</p>
                                <p className={style.p}>Featured woman collections that give you another vibe.</p>
                                <button  className={style.link} onClick={()=>handleOnclick(Data[1])}>Shop Now</button>
                            </div>
                    </div>
                    <div className={style.thirdProductDiv}>
                            <div className={style.product3}>
                                <div className={style.imageDiv}>
                                    <img className={style.img1} src={product4} alt={"IMG"}/>
                                </div>
                                <div className={style.description}>
                                    <p>Speakers</p>
                                    <p className={style.p}>Amazon wireless speakers.</p>
                                    <button  className={style.link} onClick={()=>handleOnclick(Data[2])}>Shop Now</button>
                                </div>
                            </div>
                        <div className={style.product3}>
                                <div className={style.imageDiv}>
                                    <img className={style.img1} src={product3} alt={"IMG"}/>
                                </div>
                                <div className={style.description}>
                                    <p>Perfumes</p>
                                    <p className={style.p}>GUCCI INTENSE OUD EDP</p>
                                    <button className={style.link} onClick={()=>handleOnclick(Data[3])}>Shop Now</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewArrival;