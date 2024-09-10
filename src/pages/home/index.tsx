import {Hero} from "./hero";
import {FlashSale} from "./flash_sale";
import style from './index.module.css'

export const Home = ()=>{
    return(
        <>
            <div className={style.home}>
                <Hero/>
                <FlashSale/>
            </div>

        </>
    )
}