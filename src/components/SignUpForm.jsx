import React , {useState} from "react";

import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Lock} from "../assets/icon/black/lock.svg"
import {ReactComponent as Reload} from "../assets/icon/black/reload.svg"
import {ReactComponent as Secure} from "../assets/icon/black/secure.svg"
import {ReactComponent as Doc} from "../assets/icon/black/doc.svg"
import {ReactComponent as Phone} from "../assets/icon/black/phone.svg"
import {ReactComponent as Show} from "../assets/icon/black/show.svg"
import {ReactComponent as Pencil} from "../assets/icon/white/pencil.svg"
import Captcha from "../assets/img/captcha.png"
import UserImg from "../assets/img/user.png"
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
        <div className="flex justify-center">
            <div className="relative rounded-full h-[86px] w-[86px] mt-4 mb-4">
                <img src={UserImg}/>
                <button className="absolute rounded-full shadow-blueShadow bg-mainColor p-2 top-12 -right-2">
                    <Pencil/>
                </button>
            </div>
        </div>
      <div className="flex w-full flex-wrap">
      <div className="flex flex-col w-[49%] ml-[1%] mb-4">
            <span>نام شما</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <User/>
                    </div>
                    <input type="text" disabled="true" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="علی"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] mr-[1%] mb-4">
            <span>نام خانوادگی شما</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <User/>
                    </div>
                    <input type="text" id="input-group-1" disabled="true"  class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="اطهری"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] ml-[1%] mb-4">
            <span>کد ملی شما</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Doc/>
                    </div>
                    <input type="text" id="input-group-1" disabled="true" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="۰۰۲۰۱۶۵۴۷۸"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] mr-[1%] mb-4">
            <span>شماره تلفن همراه شما</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Phone/>
                    </div>
                    <input type="text" id="input-group-1" disabled="true"  class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="۰۹۱۲۰۰۸۹۰۷۶"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] ml-[1%] mb-4">
            <span>نام هولدینگ را وارد کنید</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Doc/>
                    </div>
                    <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="نام هولدینگ شما"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] mr-[1%] mb-4">
            <span>نام شرکت را وارد کنید</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Doc/>
                    </div>
                    <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="نام شرکت شما"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] ml-[1%] mb-4">
            <span>سمت خود را وارد کنید</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Doc/>
                    </div>
                    <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="سمت شما"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] mr-[1%] mb-4">
            <span>کد امنیتی را وارد کنید</span>
            <div className="flex justify-between items-center ">
            <div class="relative mt-3 w-[90%]">
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
         </div>
      </div>
            
                
                
             
                <button className="w-[60%] mx-auto block h-12 bg-mainColor shadow-blueShadow mt-10 font-IRsans text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                    ورود به سامانه
                </button>
              
              
       </div>
         
    )
}
export default SignUpForm;