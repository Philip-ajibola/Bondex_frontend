import data from "./data.ts";
import style from './index.module.css'

const Services = () =>{
    return (
        <div className={style.container}>
            {data.map((item)=>(
                <div className={style.firsContainer}>
                    <img src={item.image} alt={"IMG"}/>
                    <p className={style.firstP}>{item.serviceType}</p>
                    <p className={style.secondP}>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Services;