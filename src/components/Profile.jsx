import React,{useState} from "react";

import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Doc} from "../assets/icon/black/doc.svg"
import {ReactComponent as Phone} from "../assets/icon/blue/phone.svg"
import {ReactComponent as Profile} from "../assets/icon/blue/profile.svg"
import {ReactComponent as Info} from "../assets/icon/black/info.svg"
import User2 from "../assets/img/user2.png"
import { Link } from "react-router-dom";
import SuccessModal from "./SuccessModal";
const ProfileInfo = () =>{
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);

    return(
    <div>
        <div className="flex items-center">
            <Profile/>
            <span className="font-IRsans text-mainColor mr-3 font-bold">
                ویرایش اطلاعات حساب کاربری
            </span>
        </div>
        <div className="w-[70%] mx-auto block sm:w-[95%] xs:w-[100%]">
        <div className="flex justify-center">
            <div className="relative rounded-full h-[150px] w-[150px] mt-4 mb-4">
                <img src={User2}/>
              
            </div>
        </div>
        <div className="flex mt-4 mb-5">
          <Info/>
          <p className="font-IRsans text-sm text-black">
          شما فقط میتوانید اطلاعات کاربری خود را در اینجا مشاهده کنید و امکان تغییر آنها وجود ندارد .اگر موارد زیر با اطلاعات شما مغایرت دارد میتوانید از طریق تیکت به پشتیبانی پیام دهید تا درخواست تغییر اطلاعات شما بررسی شود.
          </p>
        </div>
      <div className="flex w-full flex-wrap">
      <div className="flex flex-col w-[49%] ml-[1%] mb-4">
            <span className="font-IRsans text-sm text-black font-bold">نام شما</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <User/>
                    </div>
                    <input type="text" disabled="true" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="علی"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] mr-[1%] mb-4">
            <span className="font-IRsans text-sm text-black font-bold">نام خانوادگی شما</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <User/>
                    </div>
                    <input type="text" id="input-group-1" disabled="true"  class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="اطهری"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] ml-[1%] mb-4">
            <span className="font-IRsans text-sm text-black font-bold">کد ملی شما</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Doc/>
                    </div>
                    <input type="text" id="input-group-1" disabled="true" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="۰۰۲۰۱۶۵۴۷۸"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] mr-[1%] mb-4">
            <span className="font-IRsans text-sm text-black font-bold">شماره تلفن همراه شما</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Phone/>
                    </div>
                    <input type="text" id="input-group-1" disabled="true"  class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="۰۹۱۲۰۰۸۹۰۷۶"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] ml-[1%] mb-4">
            <span className="font-IRsans text-sm text-black font-bold">نام هولدینگ را وارد کنید</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Doc/>
                    </div>
                    <input type="text" id="input-group-1" disabled="true" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="شستا"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] mr-[1%] mb-4">
            <span className="font-IRsans text-sm text-black font-bold">نام شرکت را وارد کنید</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Doc/>
                    </div>
                    <input type="text" id="input-group-1" disabled="true" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="فراتوسعه هوشمند ایرانیان"/>
                </div>
         </div>
         <div className="flex flex-col w-[49%] ml-[1%] mb-4">
            <span className="font-IRsans text-sm text-black font-bold">سمت خود را وارد کنید</span>
            <div class="relative mt-3">
                    <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                        <Doc/>
                    </div>
                    <input type="text" id="input-group-1"  disabled="true" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="مدیر کل"/>
                </div>
         </div>
   
      </div>
            
                
                
             
                
              
              
       </div>
              
    </div>
         
    )
}
export default ProfileInfo;