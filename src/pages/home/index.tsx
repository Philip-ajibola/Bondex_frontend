import {Hero} from "./hero/hero.tsx";
import {FlashSale} from "./flash_sale/flash_sales.tsx";
import style from './index.module.css'
import Category from "./category/category.tsx";
import BestSellingProduct from "./bestSellingProduct/bestSellingProduct.tsx";
import Advert from "./advert/advert.tsx";
import OurProduct from "./ourProduct/ourProduct.tsx";
import NewArrival from "./newArrival/newArrival.tsx";
import Services from "./service/service.tsx";
import {Footer} from "../../component/footer";

export const Home = ()=>{
    return(
        <>
            <div className={style.home}>
                <Hero/>
                <FlashSale/>
                <div className={style.div}></div>
                <Category/>
                <div className={style.div}></div>
                <BestSellingProduct/>
                <Advert/>
                <OurProduct/>
                <NewArrival/>
                <Services/>
            </div>

        </>
    )
}