import React from "react";
import blackLogo from "../../assets/img/logoBlack.png"
import SignUpForm from "../../components/SignUpForm";
const SignUp = () =>{

  
    return(
        <div className="w-full h-full bg-lightGray p-16 sm:p-2" style={{direction:'rtl'}}>
            <img src={blackLogo} alt="logo" className="w-[218px] h-[110px] mx-auto"/>
            <div className="bg-white w-[60%] p-16 sm:p-6 rounded-xl mx-auto shadow-blackShadow my-8 xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] xs:w-[100%]">
              <p className="text-right font-bold text-black font-IRsans">
                  ثبت نام در سامانه
                </p>
                <hr className="border-t-4 border-t-mainColor mb-6 border-solid w-8 rounded-full float-right mt-2"/>
                <SignUpForm/>
            </div>
        </div>
    )
}
export default SignUp;