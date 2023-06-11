import React,{useState} from "react";

import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Location} from "../assets/icon/black/location.svg"
import {ReactComponent as Calendar} from "../assets/icon/black/calender.svg"
import {ReactComponent as Clock} from "../assets/icon/black/clock.svg"
import {ReactComponent as Doc} from "../assets/icon/black/doc.svg"
import {ReactComponent as Website} from "../assets/icon/black/website.svg"
import {ReactComponent as Card} from "../assets/icon/black/card.svg"
import {ReactComponent as Add} from "../assets/icon/blue/add.svg"
import {ReactComponent as Check} from "../assets/icon/black/check.svg"
import { Link } from "react-router-dom";

const NewRequestForm = () =>{
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    return(
    <div>
        <div className="flex items-center">
            <Add/>
            <span className="font-IRsans text-mainColor mr-3 font-bold">
                ثبت درخواست جدید
            </span>
        </div>
      <div className="flex w-[100%] mx-auto flex-wrap justify-between mt-10 xl:w-[100%]">
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Calendar/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="تاریخ سفر"/>
        </div>
       
    
             
      </div>
      <div class="my-2 w-[100%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <span>دلایل فوری بودن سفر خود را بنویسید</span>
            <textarea type="text" id="input-group-1" class="pr-4 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  h-[218px]" placeholder="توضیحات خود را اینجا بنویسید..."/>
        </div>  
        <p className="font-IRSans text-black text-base font-bold mt-5 mb-5">
            بارگزاری مستندات سفر
        </p>
        <p className="font-IRSans text-black text-base font-medium">
            مستندات سفر
        </p>
        <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-[30%] md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5 mt-1 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-0 text-xs text-gray-500 dark:text-gray-400"><span class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
      
        <button onClick={() => setShowSuccessModal(true)} className="w-[140px] h-10 bg-mainColor shadow-blueShadow mt-5 font-IRsans xs:mr-auto xs:float-left text-white float-left text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                        ثبت درخواست
            </button>
    
        {showSuccessModal ?
                  <>
                   <div
                   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                 >
                   <div className="relative w-[30%] my-5 mx-auto max-w-5xl">
                    
                     <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  
                       <div className="flex items-centers justify-center p-4 border-b border-solid border-b-[#EDF3FA] rounded-t">
                         <Check/>
                         <span className="mr-3 text-base font-bold font-IRsans text-black text-center">
                         درخواست شما با موفقیت ثبت شد
                         </span>
                      
                       </div>
                       
                       <div className="relative p-6 flex-auto">
                         <p className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal font-IRsans">
                         درخواست شما با کد رهگیری 1256359 ثبت شد.میتوانید نتیجه ی درخواست خود را پس از بررسی توسط ارگان مربوطه،در قسمت تاریخچه درخواست ها مشاهده کنید.
همچنین میتوانید فرم پر شده ی درخواست خود را دانلود کنید.
</p>
                       </div>
                      
                       <div className="flex items-center mb-2 justify-endborder-t justify-center border-solid border-slate-200 rounded-b">
                         <button
                           className="text-white bg-mainColor shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           onClick={() => setShowSuccessModal(false)}
                         >
                           دانلود فرم ثبت شده
                         </button>
                        <Link to={'/newRequest'}>
                        <button
                           className="text-mainColor font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           
                         >
                          تاریخچه درخواست ها
                         </button>
                        </Link>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                 
                  </>
                  :null
               }
    </div>
    
         
    )
}
export default NewRequestForm;