import SmallDiv from "../../../component/smallDiv/smallDiv.tsx";
import CustomButton from "../../../component/customeButton/customButton.tsx";
import style from './index.module.css';
import data from "../flash_sale/data.ts";
import Item from "../../../component/item/item.tsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const BestSellingProduct = ()=>{
    const navigate = useNavigate();
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")|| "false");
    const onProductClick = (index: number)=>{
        if(isLoggedIn){
            const product = data[index];
            navigate('/one-product',{state:{data:product}});
        }else toast.warning("You Are Not Logged In")

    }
    const handleOnClick = ()=>{
        if(isLoggedIn){
            navigate('/view-all',{state:{data: data.slice(0,6),header: "Our Best Selling Products"}});
        }else toast.warning("You Are Not Logged In");
    }

    return(
        <div className={style.container}>
            <div className={style.firstContainer}>
                <div className={style.firstDiv}>
                    <SmallDiv item={'This Month'} text={'Best Selling Product'}/>
                </div>
                <div >
                    <CustomButton text={'View All'} style={style.secondDiv} onPress={()=>handleOnClick()}/>
                </div>
            </div>
            <div className={style.secondContainer}>
                {data.slice(0,6).map((item,index)=>(
                    <div className={style.itemContainer}>
                        <Item item={item} onclick={()=>onProductClick(index)}/>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default BestSellingProduct;