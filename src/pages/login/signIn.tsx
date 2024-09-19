import image from '../../assets/Side Image.png';
import style from './index.module.css'
import CustomButton from "../../component/customeButton/customButton.tsx";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useSignIn} from "@clerk/clerk-react";
const SignIn = ()=>{
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email:"",
        password:"",
    });

    const { signIn, setActive, isLoaded } = useSignIn()
    const onSignInPress = React.useCallback(async () => {
        if (!isLoaded) return


        try {
            const signInAttempt = await signIn?.create({
                identifier: form.email,
                password:form.password,
            })
            console.log(signInAttempt)
            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId })
                navigate('/home')

            } else {
                console.error(JSON.stringify(signInAttempt, null, 2))
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2))
        }
    }, [ isLoaded, form.email, form.password])

    return(
        <div className={style.container}>
            <div className={style.firstContainer}>
                <img className={style.img} src={image} alt={'Img'}/>
            </div>
            <div className={style.secondContainer}>
                <p className={style.p1}>Login To Bobby's Store</p>
                <p className={style.p2}>Enter Your Detail Below</p>
                <div className={style.innerDiv}>
                    <input
                        className={style.input}
                        placeholder={'Email'}
                        onChange={(e)=>setForm({...form, email: e.target.value})}
                    />
                    <input
                        className={style.input}
                        placeholder={'Password'}
                        onChange={(e)=>setForm({...form, password: e.target.value})}

                    />
                    <CustomButton text={"Sign Up"} style={style.button1} onPress={onSignInPress}/>
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