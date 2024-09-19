import {DisplayProduct} from "./display_product/display_product.tsx";
import style from './index.module.css';
import {useUser} from "@clerk/clerk-react";


export const Hero = ()=>{
    const {user}  = useUser();
    console.log(user);
    return (
        <div className={style.motherDiv}>
            <p className={style.p}>Welcome To Bobby's Store 👋👋</p>
            <div className={style.hero}>
                <div className={style.category}>
                    <p>ELECTRONICS</p>
                    <p>GROCERIES</p>
                    <p>UTENSILS</p>
                    <p>CLOTHING</p>
                </div>
                <div className={style.display}>
                    <DisplayProduct/>
                </div>
            </div>
        </div>
    )
}