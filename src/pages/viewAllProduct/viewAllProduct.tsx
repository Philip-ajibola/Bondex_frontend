import Item from "../../component/item/item.tsx";
import style from './index.module.css'
import {useLocation, useNavigate} from "react-router-dom";

const ViewAllProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const data = state?.data;
    const header = state?.header;
    const handleOnclick = (product:CartItem)=>{
        navigate('/one-product',{state:{data:product}});
    }
    return(
        <div className={style.motherDiv}>
            <div className={style.firstDiv}>
                <p className={style.p}>{header}</p>
                <div className={style.container}>
                    {data.map(({item}:{item:CartItem}) => (
                        <div className={style.innerDiv}>
                            <Item item={item} onclick={()=>handleOnclick(item)}/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ViewAllProduct;