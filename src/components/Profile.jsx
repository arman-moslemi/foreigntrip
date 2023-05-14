import React,{useState} from "react";

import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Doc} from "../assets/icon/black/doc.svg"
import {ReactComponent as Phone} from "../assets/icon/blue/phone.svg"
import {ReactComponent as Profile} from "../assets/icon/blue/profile.svg"
import {ReactComponent as Lock} from "../assets/icon/black/lock.svg"

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
      <div className="flex w-[80%] mx-auto flex-wrap justify-between mt-10 xl:w-[100%]">
        <div class="relative my-2 w-[45%] lg:w-[48%]">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <User/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="نام و نام خانوادگی"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%]">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Doc/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="شناسه ملی"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%]">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <User/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="سمت"/>
        </div>
              
        <div class="relative my-2 w-[45%] lg:w-[48%]">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Doc/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="کد ملی"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%]">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Phone/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="شماره تلفن همراه"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%]">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Lock/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="رمز عبور"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%]">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Lock/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="تکرار رمز عبور"/>
        </div>
       
       
        <button onClick={() => setShowSuccessModal(true)}
 className="w-[140px] h-10 bg-mainColor shadow-blueShadow mt-5 lg:text-base font-IRsans text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                        ویرایش اطلاعات
            </button>
            {showSuccessModal ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span className="text-base font-bold font-IRsans text-green">
                    ویرایش اطلاعات
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-black text-sm font-IRsans leading-relaxed">
                 ویرایش اطلاعات با موفقیت انجام شد !
                  </p>
                </div>
               
                <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                  <button
                    className="text-mainColor font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSuccessModal(false)}
                  >
                    بستن
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
           </>
           :null
        }
    
             
      </div>
              
    </div>
         
    )
}
export default ProfileInfo;