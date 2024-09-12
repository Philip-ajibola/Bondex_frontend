import data from "./data.ts";
import style from './index.module.css'
import left from "../../../assets/Vector (2).png";
import right from "../../../assets/Vector (3).png";
import SmallDiv from "../../../component/smallDiv/smallDiv.tsx";

const Category = ()=>{
    return(
            <div className={style.container}>
                <div className={style.section}>
                    <div className={style.innerContainer}>
                       <SmallDiv item={"Category"} text={"Browse By Category"}/>
                    </div>
                    <div className={style.arrows}>
                        <div className={style.arrowImg}>
                            <img src={left} alt={"left logo"} className={style.img}/>
                        </div>
                        <div className={style.arrowImg}>
                            <img src={right} alt={"right logo"} className={style.img}/>
                        </div>
                    </div>
                </div>

                <div className={style.innerContainer2}>
                    {data.map((item) => (
                        <div className={style.category}>
                            <img src={item.image} alt={"Image"}/>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Category