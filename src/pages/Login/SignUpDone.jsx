import React  from "react";
import blackLogo from "../../assets/img/logoBlack.png"
import { Link } from "react-router-dom";
import {ReactComponent as Phone} from "../../assets/icon/black/phone.svg"
const SignUpDone = () =>{

    return(
        <div className="w-full h-screen bg-lightGray p-16 sm:p-2" style={{direction:'rtl'}}>
            <img src={blackLogo} alt="logo" className="w-[218px] h-[110px] mx-auto"/>
            <div className="bg-white flex flex-col w-[32%] p-16 sm:p-6 rounded-xl mx-auto shadow-blackShadow my-8 xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] xs:w-[100%]">
              <p style={{fontFamily:'Shabnam'}}  className="text-right font-bold text-black font-IRsans">
                 ثبت نام اولیه شما با موفقیت انجام شد
                </p>
                <hr className="border-t-4 border-t-mainColor mb-6 border-solid w-8 rounded-full float-right mt-2"/>
               
                <p style={{fontFamily:'Shabnam'}}  className="font-IRSans text-black text-center">
               ثبت نام شما انجام شد.پس از تایید اطلاعات وارد شده از طریق پیامک به شما اطلاع داده می شود تا از بتوانید از پنل کاربری خود استفاده کنید.
               </p>

            </div>
        </div>
    )
}
export default SignUpDone;