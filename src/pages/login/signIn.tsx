import image from '../../assets/Side Image.png';
import style from './index.module.css'
import CustomButton from "../../component/customeButton/customButton.tsx";
import image1 from '../../assets/Icon-Google.png'
import {Link} from "react-router-dom";
const SignIn = ()=>{
    return(
        <div className={style.container}>
            <div className={style.firstContainer}>
                <img className={style.img} src={image} alt={'Img'}/>
            </div>
            <div className={style.secondContainer}>
                <p className={style.p1}>Login To Bobby's Store</p>
                <p className={style.p2}>Enter Your Detail Below</p>
                <div className={style.innerDiv}>
                    <input className={style.input} placeholder={'Email'}/>
                    <input className={style.input} placeholder={'Password'}/>
                    <CustomButton text={"Sign Up"} style={style.button1}/>
                    <Link to={'#'} className={style.forgetPassword}>Forgot Your  Password??</Link>
                    <p className={style.lastP}>Don't Have An Account???.. <span>
                        <Link to={'/sign-up'} className={style.span}>Sign Up</Link></span>
                    </p>
                </div>
            </div>
        </div>

    )
}
export default SignIn;