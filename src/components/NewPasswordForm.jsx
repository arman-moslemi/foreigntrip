import React , {} from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Doc } from "../assets/icon/black/doc.svg"
const NewPasswordForm = () =>{
 
    
    return(
        <div>
          
                <div class="relative my-6">
                    <div class="absolute top-[22px] right-2 flex items-center pl-3 pointer-events-none">
                       <Doc/>
                    </div>
                    <input style={{fontFamily:'Shabnam'}} type="text" id="input-group-1" class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="کد تایید"/>
                    
                </div>
                
                <div className="flex items-center justify-start mt-2">
                    <p style={{fontFamily:'Shabnam'}} className="  text-black text-xs">
                       ارسال مجدد : 
                    </p>
                    <p style={{fontFamily:'Shabnam'}}   className="  text-mainColor text-xs mr-1 font-bold hover:text-lightBlue">
                        00:20
                    </p>
                </div>
              
               <Link style={{fontFamily:'Shabnam'}}     to={'/newPasswordSet'}>
               <button style={{fontFamily:'Shabnam'}}  className="w-full h-12 bg-mainColor shadow-blueShadow mt-6   text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                 ثبت
                </button>
               </Link>
                
        </div>
         
    )
}
export default NewPasswordForm;