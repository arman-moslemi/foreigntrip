import React from "react";
import {ReactComponent as Attachment} from "../assets/icon/blue/attach.svg"
import {ReactComponent as Send} from "../assets/icon/black/send.svg"
const TicketDetail = () =>{
 
    return(
        <>
         <div className="flex justify-between border-b border-b-midGray pb-5 mt-5">
          <div className="flex flex-col">
            <span className="font-IRSans text-[#0D296E] text-lg font-bold">
              فراموشی رمزعبور اکانت
            </span>
            <span className="font-IRSans text-darkGray mt-2">
              #1256
            </span>
          </div>
          <div className="flex flex-col justify-end items-end">
            <p className="font-IRSans text-[#0d296e] text-lg font-bold">
              وضعیت تیکت : 
              <span className="text-darkGray font-medium">
                پاسخ داده شده
              </span>
            </p>
            <p className="font-IRSans text-[#0d296e] text-lg font-bold mt-2">
              زمان ایجاد : 
              <span className="text-darkGray font-medium">
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
              <span className="font-IRSans text-black mb-3">
                پیام
              </span>
              <div className="flex w-full h-auto items-center justify-between border  px-2 py-3 border-midGray mt-2 rounded-md">
                <textarea className="w-[90%] min-h-[120px] overflow-y-auto resize-none" placeholder="متن پیام ..." />
                <button>
                  <Send/>
                </button>
              </div>
            </div>
         </div>
        </>
    )
}
export default TicketDetail;