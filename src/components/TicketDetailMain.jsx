import React from "react";
import {ReactComponent as Attachment} from "../assets/icon/blue/attach.svg"
import {ReactComponent as Send} from "../assets/icon/black/send.svg"
import { ReactComponent as Support } from "../assets/icon/white/support.svg";
import { ReactComponent as User } from "../assets/icon/white/profile.svg";

const TicketDetailMain = () =>{
 
    return(
        <>
         <div className="flex justify-between border-b border-b-midGray pb-5 mt-5">
          <div className="flex flex-col">
            <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] text-lg font-bold sm:text-xs">
              فراموشی رمزعبور اکانت
            </span>
            <span style={{fontFamily:'Shabnam'}} className="  text-darkGray mt-2 sm:text-xs">
              #1256
            </span>
          </div>
          <div className="flex flex-col justify-end items-end">
            <p style={{fontFamily:'Shabnam'}} className="  text-[#0d296e] text-lg font-bold sm:text-xs">
              وضعیت تیکت : 
              <span style={{fontFamily:'Shabnam'}} className="text-darkGray font-medium sm:text-xs">
                پاسخ داده شده
              </span>
            </p>
            <p style={{fontFamily:'Shabnam'}} className="  text-[#0d296e] text-lg font-bold mt-2 sm:text-xs">
              زمان ایجاد : 
              <span style={{fontFamily:'Shabnam'}} className="text-darkGray font-medium sm:text-xs">
                ۰۲/۰۲/۲۸
              </span>
            </p>
          </div>
         </div>

         <div className="flex items-end my-8 ">
            <button className="bg-[#EDF3FA] h-[47px] w-[47px] rounded-md flex justify-center items-center">
              <Attachment/>
            </button>
            <div className="w-[90%] mr-3">
              <span style={{fontFamily:'Shabnam'}} className="  text-black mb-3">
                پیام
              </span>
              <div className="flex w-full h-auto items-center justify-between border  px-2 py-3 border-midGray mt-2 rounded-md">
                <textarea style={{fontFamily:'Shabnam'}} className="w-[90%] min-h-[120px] overflow-y-auto resize-none" placeholder="متن پیام ..." />
                <button>
                  <Send/>
                </button>
              </div>
            </div>
         </div>
         <div className="flex justify-end mb-4">
         <div className="w-[80%] bg-lightBlue min-h-[200px] ml-3 rounded-lg p-5 overflow-y-auto">
              <div className="w-full flex justify-end border-b border-b-black pb-4">
                <p style={{fontFamily:'Shabnam'}} className="  text-black font-bold text-sms">
                  پشتیبانی فنی | ۰۱/۰۳/۱۲
                </p>
              </div>
              <p style={{fontFamily:'Shabnam'}} className="  text-black font-normal text-base m-4">
                با سلام اطلاعات کاربری شما به ایمیل ثبت شده در سامانه ارسال شد
                <br/>
                موفق و پیروز باشید
              </p>
              </div>
           
         <div className="bg-[#0889A5] h-[47px] w-[47px] rounded-md flex justify-center items-center">
              <Support/>
            </div>
           
         </div>

         <div className="flex justify-start mb-4">
         <div className="bg-[#A7B4DA] h-[47px] w-[47px] rounded-md flex justify-center items-center">
              <User/>
            </div>
         <div className="w-[80%] bg-[#F7F7F7] min-h-[200px] mr-3 rounded-lg p-5 overflow-y-auto">
              <div className="w-full flex justify-start border-b border-b-black pb-4">
                <p style={{fontFamily:'Shabnam'}} className="  text-black font-bold text-sms">
                  کاربر | ۰۲/۰۳/۱۸
                </p>
              </div>
              <p style={{fontFamily:'Shabnam'}} className="  text-black font-normal text-base m-4">
                با سلام اطلاعات کاربری شما به ایمیل ثبت شده در سامانه ارسال شد
                <br/>
                موفق و پیروز باشید
              </p>
              </div>
           
         
           
         </div>
        </>
    )
}
export default TicketDetailMain;