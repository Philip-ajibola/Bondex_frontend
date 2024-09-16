import style from './index.module.css'
import CustomButton from "../../component/customeButton/customButton.tsx";

const Checkout = ()=>(
    <div className={style.mainDiv}>
        <div className={style.container}>
            <div className={style.motherDiv}>
                <div className={style.firstDiv}>
                    <p className={style.p}>Receiver's Address <span>*</span></p>
                    <input className={style.inputDiv}/>
                </div>
                <div className={style.firstDiv}>
                    <p className={style.p}>Receiver's Phone Number <span>*</span></p>
                    <input className={style.inputDiv}/>
                </div>
                <div className={style.firstDiv}>
                    <p className={style.p}>Receiver's Email <span>*</span></p>
                    <input className={style.inputDiv}/>
                </div>
                <div className={style.firstDiv}>
                    <p className={style.p}>Receiver's Delivery Address(street) <span>*</span></p>
                    <input className={style.inputDiv}/>
                </div>
                <div className={style.firstDiv}>
                    <p className={style.p}>Receiver's City/State <span>*</span></p>
                    <input className={style.inputDiv}/>
                </div>
            </div>
            <div className={style.checkBoxDiv}>
                <input type='checkbox'/>
                <p>Save this information for faster check-out next time</p>
            </div>
            <div className={style.lastDiv}>
                <div className={style.lastDiv_1}>
                    <div className={style.lastDiv_1_1}>
                        <input type='radio'/>
                        <p>Bank Transfer</p>
                    </div>
                    <div className={style.lastDiv_1_1}>
                        <input type='radio'/>
                        <p>Payment On Delivery</p>
                    </div>
                </div>
                <CustomButton text={'Place Order'} style={style.button}/>
            </div>
        </div>
    </div>

)
export default Checkout