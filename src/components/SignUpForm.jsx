import React , {useState} from "react";

import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Lock} from "../assets/icon/black/lock.svg"
import {ReactComponent as Reload} from "../assets/icon/black/reload.svg"
import {ReactComponent as Secure} from "../assets/icon/black/secure.svg"
import {ReactComponent as Doc} from "../assets/icon/black/doc.svg"
import {ReactComponent as Phone} from "../assets/icon/black/phone.svg"
import {ReactComponent as Show} from "../assets/icon/black/show.svg"
import Captcha from "../assets/img/captcha.png"
import { Link } from "react-router-dom";
const SignUpForm = () =>{
    const [passwordShown, setPasswordShown] = useState(false);

 
    const togglePassword = () => {
   
      setPasswordShown(!passwordShown);
    };
  
    const [passwordAgainShown, setPasswordAgainShown] = useState(false);

 
    const togglePasswordAgain = () => {
   
      setPasswordAgainShown(!passwordAgainShown);
    };
    return(
       <div>
         <div class="relative my-6">
                    <div class="absolute top-6 right-2 flex items-center pl-3 pointer-events-none">
                        <User/>
                    </div>
                    <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="نام و نام خانوادگی"/>
                </div>
                <div class="relative my-6">
                    <div class="absolute inset-y-5 right-2 flex items-center pl-3 pointer-events-none">
                        <Doc/>
                    </div>
                    <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="کد ملی"/>
                </div>
                <div class="relative my-6">
                    <div class="absolute inset-y-5 right-2 flex items-center pl-3 pointer-events-none">
                        <Phone/>
                    </div>
                    <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="شماره تلفن همراه"/>
                </div>
                <div class="relative my-6">
                    <div class="absolute inset-y-5 right-2 flex items-center pl-3 pointer-events-none">
                        <Lock/>
                    </div>
                    <input type={passwordShown ? "text" : "password"} id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="رمز عبور"/>
                    <button onClick={togglePassword} className="absolute top-[10px] left-[10px]">
                        <Show/>
                    </button>
                </div>
                <div class="relative my-6">
                    <div class="absolute inset-y-5 right-2 flex items-center pl-3 pointer-events-none">
                        <Lock/>
                    </div>
                    <input type={passwordAgainShown ? "text" : "password"} id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="تکرار رمز عبور"/>
                    <button onClick={togglePasswordAgain} className="absolute top-[10px] left-[10px]">
                        <Show/>
                    </button>
                </div>
                <div className="flex justify-between items-center ">
                <div class="relative mt-0 w-[90%]">
                    <div class="absolute top-[10px] right-2 flex items-center pl-3 pointer-events-none">
                        <Secure/>
                    </div>
                    <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md mb-0 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="کد امنیتی"/>
                    <img src={Captcha} alt="captcha" className="w-[90px] top-1 left-2 absolute"/>
                </div>
                <button>
                    <Reload/>
                </button>
                </div>
                <button className="w-full h-12 bg-mainColor shadow-blueShadow mt-10 font-IRsans text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                    ثبت نام
                </button>
                <div className="flex items-center justify-start mt-2">
                    <p className="font-IRsans text-black text-xs">
                        حساب کاربری دارید؟
                    </p>
                    <Link to={'/'} className="font-IRsans text-mainColor text-xs mr-1 font-bold hover:text-lightBlue">
                        وارد شوید
                    </Link>
                </div>
              
       </div>
         
    )
}
export default SignUpForm;