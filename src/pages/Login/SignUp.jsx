import React from "react";
import blackLogo from "../../assets/img/logoBlack.png"
import SignUpForm from "../../components/SignUpForm";
const SignUp = () =>{

  
    return(
        <div className="w-full h-full bg-lightGray p-16 " style={{direction:'rtl'}}>
            <img src={blackLogo} alt="logo" className="w-[218px] h-[131px] mx-auto"/>
            <div className="bg-white w-[32%] p-16 rounded-xl mx-auto shadow-blackShadow my-8">
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