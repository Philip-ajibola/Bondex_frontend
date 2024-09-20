import CustomButton from "../../../component/customeButton/customButton.tsx";
import Data from "./data.ts";
import style from './index.module.css'
import data from "../../home/flash_sale/data.ts";
import {useNavigate} from "react-router-dom";
const Advert = ()=>{
    const product = data[16];
    const navigate = useNavigate();
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    const onProductClick = ()=>{
        if(isLoggedIn) {
            navigate('/one-product', {state: {data: product}});
        }
    }

    return (
        <div className={style.container}>
            <div className={style.motherContainer}>
                <div className={style.firstContainer}>
                    <p className={style.p}>categories</p>
                    <div className={style.firstDiv}>
                        Enhance Your Music Experience
                    </div>
                    <div className={style.secondDiv}>
                        {Data.map((item) => (
                            <div className={style.firstDiv1}>
                                <p>{item.number}</p>
                                <p>{item.day}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.secondContainer}>
                    <img className={style.img} src={product.productImage} alt={'Image'}/>
                </div>
            </div>

            <CustomButton text={'Buy Now'} style={style.customButton} onPress={()=>onProductClick()}/>
        </div>
    )
}

export default Advert;