import CustomButton from "../../component/customeButton/customButton.tsx";
import style from './index.module.css'

const Profile = () =>{
    return(
        <div className={style.motherContainer}>
            <div className={style.container}>
                <p className={style.firstP}>Edit Profile</p>
                <div className={style.firstDiv}>
                    <div className={style.firstDiv_1}>
                        <div className={style.firstDiv_1_1}>
                            <p>First Name</p>
                            <input className={style.input} placeholder={'e.g John'}/>
                        </div>
                        <div className={style.firstDiv_1_1}>
                            <p>Last Name</p>
                            <input className={style.input} placeholder={'e.g Daniel'}/>
                        </div>
                    </div>
                    <div className={style.firstDiv_1}>
                        <div className={style.firstDiv_1_1}>
                            <p>Email</p>
                            <input className={style.input} placeholder={'example@gmail.com'}/>
                        </div>
                        <div className={style.firstDiv_1_1}>
                            <p>Address</p>
                            <input className={style.input} placeholder={'312, herbert macaulay way, Sabo Yaba'}/>
                        </div>
                    </div>
                </div>
                <div className={style.secondDiv}>
                    <p>Change Password</p>
                    <input className={style.input} placeholder={'Enter Old Password'}/>
                    <input className={style.input} placeholder={'Enter New Password'}/>
                    <input className={style.input} placeholder={'Confirm Password'}/>
                </div>
                <div className={style.thirdDiv}>
                    <CustomButton text={'Cancel'} style={style.customButton1}/>
                    <CustomButton text={'Save Changes'} style={style.customButton2}/>
                </div>
            </div>
        </div>
    )
}
export default Profile;