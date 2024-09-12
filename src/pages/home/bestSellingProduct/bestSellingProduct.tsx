import SmallDiv from "../../../component/smallDiv/smallDiv.tsx";
import CustomButton from "../../../component/customeButton/customButton.tsx";
import style from './index.module.css';
import {data} from "../flash_sale/data.ts";
import Item from "../../../component/item/item.tsx";

const BestSellingProduct = ()=>{
    return(
        <div className={style.container}>
            <div className={style.firstContainer}>
                <div className={style.firstDiv}>
                    <SmallDiv item={'This Month'} text={'Best Selling Product'}/>
                </div>
                <div >
                    <CustomButton text={'View All'} style={style.secondDiv}/>
                </div>
            </div>
            <div className={style.secondContainer}>
                {data.slice(0,6).map((item)=>(
                    <div className={style.itemContainer}>
                        <Item item={item}/>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default BestSellingProduct;