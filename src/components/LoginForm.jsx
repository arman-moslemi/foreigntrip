import React from "react";

import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Pass} from "../assets/icon/black/lock.svg"
import {ReactComponent as Reload} from "../assets/icon/black/reload.svg"
import {ReactComponent as Secure} from "../assets/icon/black/secure.svg"

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
                    type="text"
                    id="input-group-1"
                    class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                    placeholder="کد ملی"/>
            </div>
            <div class="relative my-6">
                <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                    <Pass/>
                </div>
                <input
                    type="text"
                    id="input-group-1"
                    class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                    placeholder="رمز عبور"/>
            </div>
            {/* <div class="relative my-6">
                    <div class="absolute inset-y-5 right-2 flex items-center pl-3 pointer-events-none">
                        <Lock/>
                    </div>
                    <input type={passwordShown ? "text" : "password"} id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="رمز عبور"/>
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
                        type="text"
                        id="input-group-1"
                        class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md mb-0 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                        placeholder="کد امنیتی"/>
                    <img src={Captcha} alt="captcha" className="w-[90px] top-1 left-2 absolute"/>
                </div>
                <button>
                    <Reload/>
                </button>
            </div>
            <div className="flex mt-3 mb-4">
                <p className="text-xs font-IRsans text-black font-normal">کلمه عبور خود را فراموش کرده اید ؟</p>
                <a className="text-xs font-IRsans text-linkBlue font-normal mr-1" href="#">تغییر رمز عبور</a>
            </div>
            {/* <div className="flex items-center justify-start mt-2">
                    <p className="font-IRsans text-black text-xs">
                        کلمه عبور خود را فراموش کردید ؟
                    </p>
                    <Link to={'/changePassStep1'} className="font-IRsans text-mainColor text-xs mr-1 font-bold hover:text-lightBlue">
                        تغییر رمز عبور
                    </Link>
                </div> */}
            <Link to={'/newPassword'}>
                <button
                    className="w-full h-12 bg-mainColor shadow-blueShadow mt-6 font-IRsans text-white text-xl font-medium rounded-lg hover:bg-lightBlue hover:text-mainColor">
                      ورود   
                </button>
            </Link>

            {/* <div className="flex items-center justify-start mt-2 xs:flex-wrap">
                    <p className="font-IRsans text-black text-xs">
                       حساب کاربری ندارید ؟
                    </p>
                    <Link to={'/signup'} className="font-IRsans text-mainColor text-xs mr-1 font-bold hover:text-lightBlue">
                       ثبت نام کنید
                    </Link>
                </div> */}
        </div>

    )
}
export default LoginForm;