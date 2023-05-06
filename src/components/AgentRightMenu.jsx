import React from "react";
import WhiteLogo from "../assets/img/whiteLogo.png"
import { Link } from "react-router-dom";
import {ReactComponent as Add} from "../assets/icon/white/add.svg"
import {ReactComponent as Doc} from "../assets/icon/white/doc.svg"
import {ReactComponent as Profile} from "../assets/icon/white/profile.svg"
import {ReactComponent as Exit} from "../assets/icon/white/exit.svg"
import DocImg from "../assets/img/doc.png"
const AgentRightMenu = () => {
    return(
        
                <div className="bg-mainColor p-9 rounded-2xl w-[20%] min-w-[300px]">
                    <img src={WhiteLogo} alt="logo" className="w-[140px] mx-auto"/>
                    <p className="text-white font-IRsans font-bold text-lg text-center mt-4">
                        علی اطهری خوش آمدید !
                    </p>
                    <hr className="border-t-lightGray my-5 border-opacity-50"/>

                    <ul>
                        <li className="my-10">
                           <Link to={'/'} className="flex items-center">
                           <Add/>
                            <p className="font-IRsans text-white font-medium mr-4">
                                ثبت درخواست جدید 
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link to={'/'} className="flex items-center">
                           <Doc/>
                            <p className="font-IRsans text-white font-medium mr-4">
                                تاریخچه درخواست ها
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link to={'/'} className="flex items-center">
                           <img src={DocImg} alt="doc" className="w-[19px]"/>
                            <p className="font-IRsans text-white font-medium mr-4">
                               درخواست صدور گذرنامه خدمت سیاسی
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link to={'/'} className="flex items-center">
                           <Profile/>
                            <p className="font-IRsans text-white font-medium mr-4">
                               اطلاعات کاربری
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link to={'/'} className="flex items-center">
                           <Exit/>
                            <p className="font-IRsans text-white font-medium mr-4">
                               خروج از حساب کاربری
                            </p>
                           </Link>
                        </li>
                    </ul>
                </div>
          
    )
}
export default AgentRightMenu;