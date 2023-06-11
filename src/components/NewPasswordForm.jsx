import React , {useState} from "react";
import {ReactComponent as Lock} from "../assets/icon/black/lock.svg"
import {ReactComponent as Show} from "../assets/icon/black/show.svg"
import { Link } from "react-router-dom";

const NewPasswordForm = () =>{
    const [passwordShown, setPasswordShown] = useState(false);

 
    const togglePassword = () => {
   
      setPasswordShown(!passwordShown);
    };
    const [passwordAgainShown, setPasswordAgainShown] = useState(false);

 
    const toggleAgainPassword = () => {
   
        setPasswordAgainShown(!passwordAgainShown);
    };
    
    return(
        <div>
          
                <div class="relative my-6">
                    <div class="absolute top-[22px] right-2 flex items-center pl-3 pointer-events-none">
                        <Lock/>
                    </div>
                    <input type={passwordShown ? "text" : "password"} id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="رمز عبور"/>
                    <button onClick={togglePassword} className="absolute top-[25px] left-[10px]">
                        <Show/>
                    </button>
                </div>
                
                <div className="flex items-center justify-start mt-2">
                    <p className="font-IRsans text-black text-xs">
                       ارسال مجدد : 
                    </p>
                    <p className="font-IRsans text-mainColor text-xs mr-1 font-bold hover:text-lightBlue">
                        00:20
                    </p>
                </div>
              
               <Link to={'/'}>
               <button className="w-full h-12 bg-mainColor shadow-blueShadow mt-6 font-IRsans text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                    ورود به سامانه
                </button>
               </Link>
                
        </div>
         
    )
}
export default NewPasswordForm;