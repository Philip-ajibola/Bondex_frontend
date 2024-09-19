import CustomButton from "../../component/customeButton/customButton.tsx";
import rating from '../../assets/Four Star.png'
import style from './index.module.css'

import delivery from '../../assets/icon-delivery.png'
import Return from '../../assets/Icon-return.png'
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const OneProduct = ()=> {
    const navigate = useNavigate()
    const location = useLocation();
    const { state } = location;
    const product = state?.data;
    const [subTotal,setSubtotal] = useState(0)
    const [quantities, setQuantities] = useState(0);

    const incrementQuantity = () => {
        setQuantities(quantities+1);
        setSubtotal(quantities*quantities);
    };

    const decrementQuantity = () => {
        if (quantities > 0) {
            setQuantities(quantities-1);
            setSubtotal(quantities*quantities);
        }
    };
    const handleBuyNow = ()=>{
        if(subTotal===0) {
            window.alert("You Haven't Tell us the How Many You want to buy Please select how many you want to buy!");
        }else navigate('/check-out',{state:{amount:subTotal}})
    }

    return (
        <div className={style.motherDiv}>
        <div className={style.container}>
            <div className={style.firstDiv}>
                <img src={product.productImage} alt={"IMG"}/>
            </div>
            <div className={style.secondDiv}>
                <div className={style.secondDiv_1}>
                    <p className={style.p1}>{product.productName}</p>
                    <div className={style.secondDiv_1_1}>
                        <img src={rating} alt={"IMG"}/>
                        <p>(150 reviews)</p>
                    </div>
                    <p className={style.p2}>{product.newPrice}</p>
                    <p className={style.p3}>{product.description}</p>
                </div>
                <div className={style.secondDiv_2}></div>
                <div className={style.secondDiv_3}>
                    <div className={style.secondDiv_3_1}>
                        <button className={style.increase} onClick={()=> incrementQuantity()}>+</button>
                        <p>{String(quantities).padStart(2, '0')}</p>
                        <button className={style.decrease} onClick={() => decrementQuantity()}>-</button>
                    </div>
                    <CustomButton text={subTotal !==0 ?`Buy Now At ${subTotal}`:"Buy Now"} style={style.button} onPress={()=>handleBuyNow()}/>
                </div>
                <div className={style.secondDiv_4}>
                    <div className={style.secondDiv_4_1}>
                        <img src={delivery} alt={"IMG"}/>
                        <div className={style.secondDiv_4_1_1}>
                            <p className={style.p1}>Free Delivery</p>
                            <p className={style.p2}>Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <div className={style.secondDiv_4_1}>
                        <img src={Return} alt={"IMG"}/>
                        <div className={style.secondDiv_4_1_1}>
                            <p className={style.p1}>Return Delivery</p>
                            <p className={style.p2}>Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default OneProduct