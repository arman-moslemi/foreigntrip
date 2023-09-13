import React  from "react";
import blackLogo from "../../assets/img/logoBlack.png"

import NewPasswordSetForm from "../../components/NewPasswordSetForm";

const NewPasswordSet = () =>{

    return(
        <div className="w-full h-screen bg-lightGray sm:p-8 xs-510:px-6 p-16 " style={{direction:'rtl'}}>
            <img src={blackLogo} alt="logo" className="w-[218px] h-[110px] mx-auto"/>
            <div className="bg-white w-[32%] p-16 sm:px-6 xs-510:py-7 xs-510:px-3 rounded-xl mx-auto shadow-blackShadow my-8 xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] xs:w-[100%]">
              <p style={{fontFamily:'Shabnam'}}  className="text-right font-bold text-black font-Shabnam" style={{fontFamily:'Shabnam'}}>
                 رمز عبور جدید
                </p>
                <hr className="border-t-4 border-t-mainColor mb-6 border-solid w-8 rounded-full float-right mt-2"/>
                    <NewPasswordSetForm/>
            </div>
        </div>
    )
}
export default NewPasswordSet;