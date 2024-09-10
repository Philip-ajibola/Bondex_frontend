import {DisplayProduct} from "./display_product";
import style from './index.module.css'


export const Hero = ()=>{
    return (
        <>
            <div className={style.hero}>
                <div className={style.category}>
                    <p>ELECTRONICS</p>
                    <p>GROCERIES</p>
                    <p>UNTENSILS</p>
                    <p>CLOTHING</p>
                </div>
                <div>
                    <DisplayProduct/>
                </div>
            </div>
        </>
    )
}