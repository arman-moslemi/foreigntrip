import React,{useState} from "react";
import './components.css';
import { Link } from "react-router-dom";
import {ReactComponent as Eye} from "../assets/icon/black/eye.svg";
import User2 from "../assets/img/user2.png"
const SignUpDetailCheck = () =>{

const [showAcceptModal,setShowAcceptModal] = React.useState(false);
const [showRejectModal,setShowRejectModal] = React.useState(false);
    return(
        <div className=" mt-5 w-full overflow-x-auto whitespace-nowrap ">
       <div className="flex justify-center">
            <div className="relative rounded-full h-[150px] w-[150px] mt-4 mb-4">
                <img src={User2} alt=""/>
              
            </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full mb-10">
            <p style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-base">
              نام و نام خانوادگی مامور : 
              <span style={{fontFamily:'Shabnam'}} className="  text-black font-medium">
                علی اطهری
              </span>
            </p>
          </div>
          <div className="w-[50%] mb-10 md:w-full">
            <p style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-base">
              کد ملی : 
              <span style={{fontFamily:'Shabnam'}} className="  text-black font-medium">
                0020786545
              </span>
            </p>
          </div>
          <div className="w-[50%] mb-10 md:w-full">
            <p style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-base">
              شماره تلفن همراه : 
              <span style={{fontFamily:'Shabnam'}} className="  text-black font-medium">
                ۰۹۱۲۲۴۵۶۷۶۵
              </span>
            </p>
          </div>
          <div className="w-[50%] mb-10 md:w-full">
            <p style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-base">
              تاریخ ثبت نام : 
              <span style={{fontFamily:'Shabnam'}} className="  text-black font-medium">
               ۰۲/۰۴/۰۱
              </span>
            </p>
          </div>
          <div className="w-[50%] mb-10 md:w-full">
            <p style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-base">
              سمت : 
              <span style={{fontFamily:'Shabnam'}} className="  text-black font-medium">
               مدیر فنی
              </span>
            </p>
          </div>
          <div className="w-[50%] mb-10 md:w-full">
            <p style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-base">
              هولدینگ : 
              <span style={{fontFamily:'Shabnam'}} className="  text-black font-medium">
               شستا
              </span>
            </p>
          </div>
          <div className="w-[50%] mb-10 md:w-full">
            <p style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-base">
              شرکت : 
              <span style={{fontFamily:'Shabnam'}} className="  text-black font-medium">
                توسعه هوشمند
              </span>
            </p>
          </div>
        </div>
        <divn className="flex justify-end">
       
                <button className=" bg-[#ff0000] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white    font-medium text-base shadow-redShadow hover:bg-white hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]" 
                onClick={() => setShowRejectModal(true)}
                >
                        رد کردن درخواست
                    </button>
                    <button 
                    onClick={() => setShowAcceptModal(true)}
                    className="mr-5 bg-[#3AB50E] hover:bg-white hover:text-[#3AB50E] hover:border-2 hover:border-[#3AB50E] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white    font-medium text-base shadow-greenShadow">
                       تایید درخواست
                    </button>
        </divn>
        {
          showRejectModal ?
          <>
            <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-5 mx-auto max-w-2xl">
           
            <div className="border-0 rounded-md p-2 shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
         
              <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-red">
                 رد درخواست ثبت نام
                </span>
             
              </div>
              
              <div className="relative p-6 flex-auto">
                <p style={{fontFamily:'Shabnam'}} className="my-2 text-black text-sm   leading-relaxed">
             شما میتوانید علت رد درخواست ثبت نام مامور اعزامی را اینجا بنویسید تا به ایشان نمایش داده شود
                </p>
              </div>
              <textarea id="message" rows="3" class="block p-2.5 mt-1 mx-6   w-[90%] text-sm text-gray-900 bg-gray-50 rounded border  border-borderGray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="توضیحات خود را اینجا بنویسید..."></textarea>
              <div className="flex items-center  justify-end border-solid border-slate-200 rounded-b mt-4">
              <button
                    className="text-white   float-left bg-mainColor shadow-blueShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowRejectModal(false)}
                  >
                   ارسال به کاربر
                  </button>
                  <button
                    className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowRejectModal(false)}
                  >
                    بستن
                  </button>
              
                
                </div>
            </div>
          </div>
        </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
          </>
        
           
          :
          null
        }
              {
          showAcceptModal ?
          <>
            <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-5 mx-auto max-w-2xl">
           
            <div className="border-0 rounded-md p-2 shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
         
              <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-green">
                 تایید درخواست ثبت نام
                </span>
             
              </div>
              
              <div className="relative p-6 flex-auto">
                <p style={{fontFamily:'Shabnam'}} className="my-2 text-black text-sm   leading-relaxed">
            تایید درخواست ثبت نام کاربر با موفقیت انجام شد
                </p>
              </div>
             <div className="flex items-center  justify-end border-solid border-slate-200 rounded-b mt-4">
             
                  <button
                    className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowAcceptModal(false)}
                  >
                    بستن
                  </button>
              
                
                </div>
            </div>
          </div>
        </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
          </>
        
           
          :
          null
        }
        </div>
    )
}
export default SignUpDetailCheck;