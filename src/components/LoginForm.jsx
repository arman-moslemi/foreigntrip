import React from "react";

import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Pass} from "../assets/icon/black/lock.svg"
import {ReactComponent as Reload} from "../assets/icon/black/reload.svg"
import {ReactComponent as Secure} from "../assets/icon/black/secure.svg"
// import { Captcha } from "@nabidam/react-captcha";
import './components.css';

import Captcha from "../assets/img/captcha.png"
import {Link} from "react-router-dom";
const LoginForm = () => {
    // const [passwordShown, setPasswordShown] = useState(false); const
    // togglePassword = () => {   setPasswordShown(!passwordShown); };


    return (
        <div>
            <div class="relative my-6">
                <div class="absolute top-6 right-2 flex items-center pl-3 pointer-events-none">
                    <User/>
                </div>
                <input
                style={{fontFamily:'Shabnam'}}
                    type="number"
                    id="input-group-1"
                    class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                    placeholder="کد ملی"/>
            </div>
            <div class="relative my-6">
                <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                    <Pass/>
                </div>
                <input
                style={{fontFamily:'Shabnam'}}
                    type="text"
                    id="input-group-1"
                    class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                    placeholder="رمز عبور"/>
            </div>
            {/* <div class="relative my-6">
                    <div class="absolute inset-y-5 right-2 flex items-center pl-3 pointer-events-none">
                        <Lock/>
                    </div>
                    <input type={passwordShown ? "text" : "password"} id="input-group-1" class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="رمز عبور"/>
                    <button onClick={togglePassword} className="absolute top-[10px] left-[10px]">
                        <Show/>
                    </button>
                </div>*/}

            <div className="flex justify-between items-center ">
                <div class="relative mt-0 w-[90%]">
                    <div
                        class="absolute top-[10px] right-2 flex items-center pl-3 pointer-events-none">
                        <Secure/>
                    </div>
                    <input
                    style={{fontFamily:'Shabnam'}}
                        type="text"
                        id="input-group-1"
                        class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md mb-0 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                        placeholder="کد امنیتی"/>
                
                   <img src={Captcha} alt="captcha" className="w-[90px] top-1 left-2 absolute"/> 
                </div>
                <button>
                    <Reload/>
                </button> 
              
            </div>
            {/* <div id="captchas"  className="w-[90px] top-1 left-2  flex">
         <Captcha className="absolute"  setWord={setCaptcha} ref={captchaRef} 
         reloadEl={<button onClick={()=>captchaRef.current.initializeCaptcha()}>
        <Reload/>  </button>}
         persianChars={true} fontFamily={"Shabnam"} backgroundColor={"#a0afd5"} fontColor="#fff" border="1px solid #000"/>
         </div> */}
            <div className="flex mt-3 mb-4">
                <p style={{fontFamily:'Shabnam'}}className="text-xs   text-black font-normal">کلمه عبور خود را فراموش کرده اید ؟</p>
                <Link style={{fontFamily:'Shabnam'}}  to={'/changePassword'} className="text-xs   text-linkBlue font-normal mr-1">تغییر رمز عبور</Link>
            </div>
            {/* <div className="flex items-center justify-start mt-2">
                    <p style={{fontFamily:'Shabnam'}} className="  text-black text-xs">
                        کلمه عبور خود را فراموش کردید ؟
                    </p>
                    <Link style={{fontFamily:'Shabnam'}}  to={'/changePassStep1'} className="  text-mainColor text-xs mr-1 font-bold hover:text-lightBlue">
                        تغییر رمز عبور
                    </Link>
                </div> */}
            <Link style={{fontFamily:'Shabnam'}}   to={'/newPassword'}>
                <button style={{fontFamily:'Shabnam'}}
                    className="w-full h-12 bg-mainColor shadow-blueShadow mt-6   text-white text-xl font-medium rounded-lg hover:bg-lightBlue hover:text-mainColor">
                      ورود   
                </button>
            </Link>

            {/* <div className="flex items-center justify-start mt-2 xs:flex-wrap">
                    <p style={{fontFamily:'Shabnam'}} className="  text-black text-xs">
                       حساب کاربری ندارید ؟
                    </p>
                    <Link style={{fontFamily:'Shabnam'}}  to={'/signup'} className="  text-mainColor text-xs mr-1 font-bold hover:text-lightBlue">
                       ثبت نام کنید
                    </Link>
                </div> */}
        </div>

    )
}
export default LoginForm;