import React , {} from "react";
import {ReactComponent as Lock} from "../assets/icon/black/lock.svg"

import { Link } from "react-router-dom";

const NewPasswordSetForm = () =>{
   
    
    return(
        <div>
          
                <div class="relative my-6">
                    <div class="absolute top-[22px] right-2 flex items-center pl-3 pointer-events-none">
                       <Lock/>
                    </div>
                    <input style={{fontFamily:'Shabnam'}} type="text" id="input-group-1" class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="رمز عبور جدید"/>
                    
                </div>
                
                <div class="relative my-6">
                    <div class="absolute top-[12px] right-2 flex items-center pl-3 pointer-events-none">
                       <Lock/>
                    </div>
                    <input style={{fontFamily:'Shabnam'}} type="text" id="input-group-1" class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="تکرار رمز عبور جدید"/>
                    
                </div>
              
               <Link style={{fontFamily:'Shabnam'}}  to={'/'}>
               <button style={{fontFamily:'Shabnam'}} className="w-full h-12 bg-mainColor shadow-blueShadow mt-6   text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                تغییر رمز عبور
                </button>
               </Link>
                
        </div>
         
    )
}
export default NewPasswordSetForm;