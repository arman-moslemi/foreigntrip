import React,{useState} from "react";
import {ReactComponent as Info} from "../assets/icon/black/info.svg"
import { Link } from "react-router-dom";
const PassportForm = () =>{
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    return(
        <>
        <p style={{fontFamily:'Shabnam'}} className="text-black font-IRsans font-bold">
            فرم زیر را با دقت پر کنید.
        </p>
        <div className="flex items-center mt-3">
            <Info/>
            <p style={{fontFamily:'Shabnam'}} className="text-darkGray font-IRsans font-medium text-sm mr-2">
            تمام فیلدهای لاتین را با حروف بزرگ پر کنید.
        </p>
        </div>
        <div className="mt-5 flex flex-wrap items-center">
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    نام به فارسی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    نام به لاتین (حروف بزرگ)
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    نام خانوادگی به فارسی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    نام خانوادگی به لاتین
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                   نام پدر به فارسی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    نام پدر به لاتین
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    استان محل تولد
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    شهرستان محل تولد
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    استان محل صدور شناسنامه
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    شهرستان محل صدور شناسنامه
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    شماره شناسنامه
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    کد ملی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                   تاریخ تولد
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                   تلفن همراه
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                    محل ماموریت
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                   نوع ماموریت
                </span>
                <div class="flex items-center mt-3">
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black text-xs font-medium ml-4">موقت</label>
       
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black text-xs font-medium ml-4">ثابت</label>
       
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    </div>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                    مدرک تحصیلی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                    ایمیل
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                   وضعیت تاهل
                </span>
                <div class="flex items-center mt-3">
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black text-xs font-medium ml-4">مجرد</label>
       
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black text-xs font-medium ml-4">متاهل</label>
       
            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    </div>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                    کد پستی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                    تلفن ثابت
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[92%] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                    آدرس
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-bold">
                    ارگان اعزام کننده
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
       
        </div>
        <p style={{fontFamily:'Shabnam'}} className="text-black font-IRsans font-bold">
           بارگذاری فایل ها و عکس ها
        </p>
        <div className="mt-5 flex flex-wrap items-center">
        <div className="w-[250px] flex flex-col mb-5 mx-3">
        <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    عکس صفحه اول شناسنامه
                </span>
        <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-[100%] md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5 mt-1 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
           </div>
           <div className="w-[250px] flex flex-col mb-5 mx-3">
        <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    عکس صفحه دوم شناسنامه
                </span>
        <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-[100%] md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5 mt-1 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
           </div>
           <div className="w-[250px] flex flex-col mb-5 mx-3">
        <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    عکس صفحه سوم شناسنامه
                </span>
        <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-[100%] md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5 mt-1 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
           </div>
           <div className="w-[250px] flex flex-col mb-5 mx-3">
        <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    عکس طرف اول کارت ملی
                </span>
        <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-[100%] md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5 mt-1 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
           </div>
           <div className="w-[250px] flex flex-col mb-5 mx-3">
        <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    عکس طرف دوم کارت ملی
                </span>
        <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-[100%] md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5 mt-1 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
           </div>
           <div className="w-[250px] flex flex-col mb-5 mx-3">
        <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    عکس 3*4
                </span>
        <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-[100%] md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5 mt-1 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
           </div>
           <div className="w-[250px] flex flex-col mb-5 mx-3">
        <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    حکم استخدام ارگان دولتی
                </span>
        <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-[100%] md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5 mt-1 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
           </div>
           <div className="w-[250px] flex flex-col mb-5 mx-3">
        <span style={{fontFamily:'Shabnam'}} className="text-black font-IRsans text-sm font-medium">
                    عکس امضا
                </span>
        <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-[100%] md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5 mt-1 text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
           </div>
           <div className="w-[250px] flex flex-col mb-5 mx-3">
            
              <button onClick={() => setShowSuccessModal(true)} className="mt-6 min-w-[160px] h-12 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-md font-semibold rounded-lg hover:bg-lightBlue hover:text-mainColor">
              ثبت درخواست
              </button>
          
            </div>  
            </div>
            {showSuccessModal ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold font-IRsans text-green">
                    ثبت درخواست صدور گذرنامه
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm font-IRsans leading-relaxed">
                 ثبت درخواست صدور گذرنامه خدمت سیاسی با موفقیت انجام شد
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
           
        </>
    )
}

export default PassportForm;