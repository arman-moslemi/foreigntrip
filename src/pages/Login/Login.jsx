import React from "react";
import blackLogo from "../../assets/img/logoBlack.png"
import {ReactComponent as User} from "../../assets/icon/black/profile.svg"


const Login = () =>{
    return(
        <div className="w-screen h-screen bg-lightGray p-24">
            <img src={blackLogo} alt="logo" className="w-[218px] h-[131px] mx-auto"/>
            <div className="bg-white w-[35%] p-16 rounded-xl mx-auto shadow-blackShadow my-8">
                <p className="text-right font-bold text-black test">
                  2 ورود به سامانه
                </p>
                <hr className="border-t-4 border-t-mainColor border-solid w-8 rounded-full float-right mt-2"/>
                <div class="relative mb-6">
                    <div class="absolute inset-y-5 right-2 flex items-center pl-3 pointer-events-none">
                        <User/>
                    </div>
                    <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="کد ملی"/>
                </div>
            </div>
        </div>
    )
}
export default Login;