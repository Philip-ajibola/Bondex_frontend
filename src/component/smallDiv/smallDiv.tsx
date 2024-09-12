import style from "./index.module.css";

const SmallDiv = ({item,text})=>(
    <>
        <div className={style.firstDiv}>
            <div className={style.red}></div>
            <div className={style.categories}>{item}</div>
        </div>
        <div className={style.secondDiv}>
            <div className={style.flashSales}>{text}</div>
        </div>
    </>
)
export default SmallDiv