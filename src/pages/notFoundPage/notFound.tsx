import CustomButton from "../../component/customeButton/customButton.tsx";
import style from './index.module.css'

const NotFoundPage = () => {
    return(
        <div className={style.motherContainer}>
            <div className={style.container}>
                <p className={style.p1}>404 Not Found</p>
                <p className={style.p2}>Your visited page not found. You may go home page.</p>
                <CustomButton text={"Back To Home Page"} style={style.button}/>
            </div>
        </div>
    )
}
export default NotFoundPage