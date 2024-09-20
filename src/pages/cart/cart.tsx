import CustomButton from "../../component/customeButton/customButton.tsx";
import style from './index.module.css';
import data from "../home/flash_sale/data.ts";
import arrowDown from "../../assets/Drop-Down-Small.png";
import arrowUp from "../../assets/Drop-Up-Small.png";
import {useContext, useState} from "react";
import {CartContext} from "../../context.tsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Cart = () => {
    const { cartItems,cancelOrder } = useContext(CartContext);
    const navigate = useNavigate();
    const [quantities, setQuantities] = useState<number[]>(data.map(() => 1));
    let totalPrice= 0;

    const  handlePayment = ()=>{
        navigate('/check-out',{state:{amount:totalPrice}})
    }
    const incrementQuantity = (index: number) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const decrementQuantity = (index: number) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 0) {
            newQuantities[index] -= 1;
        }
        setQuantities(newQuantities);
    };

    const calculateSubtotal = (price: string, quantity: number) => {
        price = price.slice(1)
        const newPrice = Number(price)
        totalPrice +=newPrice;
        console.log(totalPrice);
        return (newPrice * quantity).toFixed(2);

    };
const handleCancelOrder = ()=>{
    cancelOrder();
    toast.warning("You Cancelled Your Order")
    navigate('/home')
}

    return (
        <div className={style.container}>
            <div className={style.firstContainer}>
                <div className={style.fDiv1}>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>SubTotal</p>
                </div>
                <div className={style.fDiv2}>
                    {cartItems.map((item, index) => (
                        <div key={item.id} className={style.fDiv2_1}>
                            <div className={style.fDiv2_1_1}>
                                <img src={item.productImage} alt={"Product Image"}/>
                                <p>{item.productName}</p>
                            </div>
                            <p className={style.fDivp}>{item.newPrice}</p>
                            <div className={style.quantitySelector}>
                                <div>
                                    <span className={style.quantityDisplay}>{String(quantities[index]).padStart(2, '0')}</span>
                                </div>
                                <div className={style.buttonContainer}>
                                    <button className={style.quantityButton} onClick={() => decrementQuantity(index)}>
                                        <img src={arrowDown} alt={"Arrow Down"}/>
                                    </button>
                                    <button className={style.quantityButton} onClick={() => incrementQuantity(index)}>
                                        <img src={arrowUp} alt={"Arrow Up"}/>
                                    </button>
                                </div>
                            </div>
                            <p className={style.fDivp2}>${calculateSubtotal(item.newPrice, quantities[index])}</p>
                        </div>
                    ))}
                </div>
                <div className={style.fDiv3}>
                    <CustomButton text={'Return To Shop'} style={style.button} onPress={()=>navigate('/home')}/>
                    <CustomButton text={'Cancel Cart'} style={style.button} onPress={()=>handleCancelOrder()}/>
                </div>
            </div>
            <div className={style.secondContainer}>
                <div className={style.sDivMother}>
                    <p className={style.p}>Cart Total</p>
                    <div className={style.sDiv1}>
                        <p className={style.p2}>Subtotal</p>
                        <p className={style.p2}>${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className={style.sDiv1}>
                        <p className={style.p2}>Shipping</p>
                        <p className={style.p2}>Free</p>
                    </div>
                    <div className={style.sDiv1}>
                        <p className={style.p2}>Sum Total</p>
                        <p className={style.p2}>${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
                <CustomButton text={'Process To CheckOut'} style={style.downButton} onPress={()=>handlePayment()}/>
            </div>
        </div>
    );
};

export default Cart;
