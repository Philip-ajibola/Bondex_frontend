import SmallDiv from "../../../component/smallDiv/smallDiv.tsx";
import style from './index.module.css'
import data from "../flash_sale/data.ts";
import Item from "../../../component/item/item.tsx";
import CustomButton from "../../../component/customeButton/customButton.tsx";
import {useNavigate} from "react-router-dom";

const OurProduct = () =>{
    const navigate = useNavigate();
    const onProductClick = (index:number)=>{
        const product = data[index-1];
        navigate('/one-product',{state:{data:product}});
    }
    const handleViewAllProduct = ()=>{
        navigate('/view-all',{state:{data: data.slice(0,16),header:"Our Products"}})
    }

    return(
        <div className={style.container}>
            <SmallDiv item={'Our Products'} text={'Explore Our Products'}/>
            <div className={style.firstContainer}>
                {data.slice(8,16).map((item)=>(
                    <div>
                        <Item item={item} onclick={()=>onProductClick(item.id)}/>
                    </div>
                ))}
            </div>
            <div className={style.button}>
                <CustomButton text={'View All Product'} style={style.customButton} onPress={()=>handleViewAllProduct()}/>
            </div>
        </div>
    )
}
export default OurProduct
