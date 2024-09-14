import image from '../../assets/Side Image.png';
import style from './index.module.css'
import CustomButton from "../../component/customeButton/customButton.tsx";
import image1 from '../../assets/Icon-Google.png'
import {Link} from "react-router-dom";
const SignUp = ()=>{
    return(
        <div className={style.container}>
            <div className={style.firstContainer}>
                <img className={style.img} src={image} alt={'Img'}/>
            </div>
            <div className={style.secondContainer}>
                <p className={style.p1}>Create Your Account</p>
                <p className={style.p2}>Enter Your Detail Below</p>
                <div className={style.innerDiv}>
                    <input className={style.input} placeholder={'Name'}/>
                    <input className={style.input} placeholder={'Email'}/>
                    <input className={style.input} placeholder={'Password'}/>
                    <CustomButton  text={"Sign Up"} style={style.button1}/>
                    <CustomButton text={"Sign In With Google"} style={style.button2} image={image1}/>
                    <p className={style.lastP}>Already had an Account???.. <span>
                        <Link to={'/sign-in'} className={style.span}>Login</Link></span></p>
                </div>
            </div>
        </div>

    )
}
export default SignUp;