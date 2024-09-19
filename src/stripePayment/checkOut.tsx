
import PaymentForm from './payment';
import {useLocation} from "react-router-dom";
import style from './index.module.css'

const StripeCheckout = () => {
    const location = useLocation();
    const {state} = location;
    const amount:number = state?.amount || 0;
    return (
        <div className={style.container}>
            <h1>Checkout</h1>
            <PaymentForm amount={amount}/>
        </div>
    );
};

export default StripeCheckout;
