import React ,{useState} from "react";
import WhiteLogo from "../assets/img/whiteLogo.png"
import { Link } from "react-router-dom";
import {ReactComponent as Add} from "../assets/icon/white/add.svg"
import {ReactComponent as Doc} from "../assets/icon/white/doc.svg"
import {ReactComponent as Profile} from "../assets/icon/white/profile.svg"
import {ReactComponent as Ticket} from "../assets/icon/white/ticket.svg"
import {ReactComponent as Exit} from "../assets/icon/white/exit.svg"
import DocImg from "../assets/img/doc.png"
import User2 from "../assets/img/user2.png"
const AgentRightMenu = () => {
   const [showMenu,setShowMenu] = useState(false);
    return(
        
               <>
                <div className="bg-mainColor p-9 rounded-2xl w-[20%] min-w-[300px] lg:min-w-[250px] md:hidden">
                    <img src={WhiteLogo} alt="logo" className="w-[170px] mx-auto"/>
                    <img src={User2} alt="user" className="w-[76px] h-[76px] rounded-full mt-4 mb-4 block mx-auto"/>
                    <p style={{fontFamily:'Shabnam'}} className="text-white  font-bold text-lg text-center mt-4 font-IRsans lg:text-base ">
                        آقای هاشمی خوش آمدید !
                    </p>
                    <hr className="border-t-lightGray my-5 border-opacity-50"/>

                    <ul>
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/newRequestStep1'} className="flex items-center">
                           <Add/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                                ثبت درخواست جدید 
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/requestHistory'} className="flex items-center">
                           <Doc/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                                تاریخچه درخواست ها
                            </p>
                           </Link>
                        </li>
                   
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/profile'} className="flex items-center">
                           <Profile/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                               اطلاعات کاربری
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/profile'} className="flex items-center">
                           <Ticket/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                               تیکت ها و پشتیبانی
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/'} className="flex items-center">
                           <Exit/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                               خروج از حساب کاربری
                            </p>
                           </Link>
                        </li>
                    </ul>
                </div>
               <div className="bg-mainColor py-2 px-10 items-center rounded-2xl md:rounded-none w-full  hidden md:flex md:justify-between">
                  <div onClick={() =>{setShowMenu(!showMenu)}}>
                  <svg class="fill-[#fff] h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      
                  </div>
                   <img src={WhiteLogo} alt="logo" className="w-[80px] mx-auto"/>
                    
               </div>
               {
                  showMenu?
                  <div className="w-full  h-full absolute right-0">
                        <div className="bg-mainColor w-[290px] h-full z-50 absolute right-0 px-8 py-10">
                        <p style={{fontFamily:'Shabnam'}} className="text-white  font-bold text-lg text-center mt-4 font-IRsans lg:text-base">
                        علی اطهری خوش آمدید !
                    </p>
                    <hr className="border-t-lightGray my-5 border-opacity-50"/>

                    <ul>
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/newRequest'} className="flex items-center">
                           <Add/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                                ثبت درخواست جدید 
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/requestHistory'} className="flex items-center">
                           <Doc/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                                تاریخچه درخواست ها
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/passportRequest'} className="flex items-center">
                           <img src={DocImg} alt="doc" className="w-[19px]"/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                               درخواست صدور گذرنامه خدمت سیاسی
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/profile'} className="flex items-center">
                           <Profile/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                               اطلاعات کاربری
                            </p>
                           </Link>
                        </li>
                        <li className="my-10">
                           <Link style={{fontFamily:'Shabnam'}}  to={'/'} className="flex items-center">
                           <Exit/>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-white font-medium mr-4 lg:text-sm">
                               خروج از حساب کاربری
                            </p>
                           </Link>
                        </li>
                    </ul>
                        </div>
                  </div>
                  :
                  <div>
                     </div>
               }
               </>
          
    )
}
export default AgentRightMenu;