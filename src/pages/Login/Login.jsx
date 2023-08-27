import React  from "react";
import blackLogo from "../../assets/img/logoBlack.png"

import LoginForm from "../../components/LoginForm";
const Login = () =>{

    return(
        <div className="w-full h-screen bg-lightGray p-16 sm:p-2" style={{direction:'rtl'}}>
            <img src={blackLogo} alt="logo" className="w-[280px] h-[110px] mx-auto"/>
            <div className="bg-white w-[32%] p-16 sm:p-6 rounded-xl mx-auto shadow-blackShadow my-6 xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] xs:w-[100%]">
                <p style={{fontFamily:'Shabnam'}} className="text-right font-bold text-black font-IRsans">
                  ورود به سامانه
                </p>
                <hr className="border-t-4 border-t-mainColor mb-6 border-solid w-8 rounded-full float-right mt-2"/>
                    <LoginForm/>
            </div>
        </div>
    )
}
export default Login;