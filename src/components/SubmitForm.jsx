import React from "react";

import {ReactComponent as Info} from "../assets/icon/black/info.svg"
import {ReactComponent as Send} from "../assets/icon/blue/Send.svg"
import { Link } from "react-router-dom";
const SubmitForm = () =>{
    

    return(
      <div>
          <div className="flex items-center">
              <Send/>
              <span className="font-IRsans text-mainColor mr-3 font-bold">
                  ارسال گزارش دستاورد سفر
              </span>
          </div>
          <p className="font-IRsans text-black font-bold text-base mt-5">
            شما موطف هستید بعد از اتمام سفر خود٬گزارش دستاورد خود از این سفر را در سامانه بارگذاری کنید.
          </p>
          <div className="flex items-center mt-2">
            <Info/>
            <p className="font-IRsans text-[#5C5F66] font-bold text-sm mr-2">
            در صورت عدم بارگذاری گزارش دستاورد و یا عدم بارگذاری گزارش مناسب برای سفر آتی اجازه سفر صادر نمی شود.
          </p>
          
          </div>
          <div class="mb-3">
              <label class="block text-gray-700 text-sm font-bold mt-4 mb-2 font-IRsans" for="password">
                موضوع سفر
              </label>
              <input class="shadow appearance-none border text-sm font-IRsans border-[#CCCCCD] rounded md:w-full w-[40%] py-2 px-3 text-[#CCCCCD] mb-3 leading-tight focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" type="text" placeholder="موضوع سفر خود را اینجا بنویسید..."/>
      
          </div> 
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mt-4 mb-2 font-IRsans" for="password">
                توضیحات خود راجع به سفر٬دستاوردها و اتفاقات سفر را بنویسید.
              </label>
              <textarea id="message" rows="8" class="block p-2.5 font-IRsans w-full text-sm text-gray-900 bg-gray-50 rounded border  border-[#CCCCCD] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="توضیحات خود را اینجا بنویسید..."></textarea>
          </div>
          <div class="flex items-center justify-start w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-[40%] md:w-full h-64 border-2 border-[#CCCCCD] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold font-IRsans">انتخاب فایل</span></p>
                <p class="text-xs text-gray-500 dark:text-gray-400 font-IRsans">JPG,JPEG,PNG,PDF,TXT</p>
            </div>
            <input id="dropzone-file" type="file" class=" md:hidden" />
        </label>
        </div>  
        <Link to={`/`}>
              <button className="mt-12 min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
               ارسال
              </button>
            </Link>      
      </div>
         
    )
}
export default SubmitForm;