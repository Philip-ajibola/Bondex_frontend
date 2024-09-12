import SmallDiv from "../../../component/smallDiv/smallDiv.tsx";
import style from './index.module.css'
import {data} from "../flash_sale/data.ts";
import Item from "../../../component/item/item.tsx";
import CustomButton from "../../../component/customeButton/customButton.tsx";

const OurProduct = () =>{
    return(
        <div className={style.container}>
            <SmallDiv item={'Our Products'} text={'Explore Our Products'}/>
            <div className={style.firstContainer}>
                {data.slice(8,16).map((item)=>(
                    <div>
                        <Item item={item}/>
                    </div>
                ))}
            </div>
            <div className={style.button}>
                <CustomButton text={'View All Product'} style={style.customButton}/>
            </div>
        </div>
    )
}
export default OurProduct
