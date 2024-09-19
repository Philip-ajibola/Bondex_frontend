import { useState } from 'react';
import image from '../../assets/Side Image.png';
import style from './index.module.css';
import CustomButton from "../../component/customeButton/customButton.tsx";
import image1 from '../../assets/Icon-Google.png';
import {useSignUp} from '@clerk/clerk-react';
import {useNavigate} from 'react-router-dom';
import './styles.css'

const SignUp = () => {
    const navigate = useNavigate()
    const {isLoaded, signUp, setActive}  = useSignUp();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [showVerification, setShowVerification] = useState(false);
    const [verification, setVerification] = useState({
        state: 'default',
        error: "",
        code: '',
    });

    const onSignUpPress = async () => {
        if (!isLoaded) return;
        console.log(form.email);
        try {
            await signUp?.create({
                emailAddress: form.email,
                password: form.password,
            });
            await signUp?.prepareEmailAddressVerification({ strategy: 'email_code' });
            setShowVerification(true);
            setLoading(true)
        } catch (err:any) {
            window.alert(`Error:  ${err.errors[0].longMessage}`);
            console.log(err.message);
        }
    };

    const handleVerify = async (e:any) => {
        e.preventDefault();
        if (!isLoaded) return;
        try {
            const response = await signUp?.attemptEmailAddressVerification({ code: verification.code });
            console.log(response.status)
            console.log(response.createdSessionId)
            if (response.status === 'complete') {
                console.log("Yes")
                await setActive({session: response.createdSessionId});
                setVerification({...verification, state: 'success'});
                navigate('/home')
            }

        } catch (err) {
            console.error('Verification error:', err);
            setVerification({ ...verification, state: 'failed', error: 'An error occurred during verification. Please try again.' });
        }
    };

    return (
        <div className={style.container}>
            {showVerification ? (
                <div className='mother-div'>
                    <div className="verification-container">
                        <h2>Email Verification</h2>
                        <p>Please enter the 6-digit verification code sent to your email.</p>
                        <form className="verification-form" onSubmit={handleVerify}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Enter verification code"
                                    maxLength={6}
                                    required
                                    value={verification.code}
                                    onChange={(e) => setVerification({...verification, code: e.target.value})}
                                />
                            </div>
                            {verification.error && <p className="error-message">{verification.error}</p>}
                            <button type="submit" className="verify-btn">
                                Verify
                            </button>
                        </form>
                        <p className="resend-text">
                            Didn’t receive a code?
                            <button className="resend-btn" type="button">
                                Resend Code
                            </button>
                        </p>
                    </div>
                </div>
            ) : (
                <div className={style.firstContainer}>
                    <img className={style.img} src={image} alt={'Img'}/>
                </div>
            )}

            {!showVerification && (

                <div className={style.secondContainer}>
                    <p className={style.p1}>Create Your Account</p>
                    <p className={style.p2}>Enter Your Detail Below</p>
                    <div className={style.innerDiv}>
                        <input
                            className={style.input}
                            placeholder={'Username'}
                            value={form.username}
                            onChange={(e) => setForm({...form, username: e.target.value})}
                        />
                        <input
                            className={style.input}
                            placeholder={'Email'}
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                        />
                        <input
                            className={style.input}
                            placeholder={'Password'}
                            type='password'
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                        <CustomButton text={loading? "processing":"Sign Up"} style={style.button1} onPress={onSignUpPress} />
                        <CustomButton text={ loading? "processing": "Sign In With Google"} style={style.button2} image={image1} disabled={isLoaded} />
                        <p className={style.lastP}>Already have an Account? <span><a href='/sign-in' className={style.span}>Login</a></span></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignUp;
