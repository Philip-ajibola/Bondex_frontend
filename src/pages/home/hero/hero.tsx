import {DisplayProduct} from "./display_product/display_product.tsx";
import style from './index.module.css'


export const Hero = ()=>{
    return (
        <>
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
        </>
    )
}