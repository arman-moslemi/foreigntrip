import React, {useState} from "react";
import { DatePicker } from "zaman";
import './components.css';
import {Link} from "react-router-dom";


const NewRequestFormStep4 = () => {
    const [showSuccessModal,
        setShowSuccessModal] = React.useState(false);
    return (
        <div>
          <p style={{fontFamily: 'Shabnam'}} className="text-xl text-mainColor font-normal mt-3.5 mb-10 ">گام ۴ - توضیحات سفر</p>
            <div className="flex w-full flex-wrap">
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">شرح اهمیت موضوع سفر ( حداکثر در ۵ سطر )</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={5}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            placeholder="شرح را اینجا بنویسید"></textarea>
                    </div>
            </div>
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">سوابق دستاوردهای قبلی مرتبط با موضوع این ماموریت (حداکثر در ۵ سطر )</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={5}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            placeholder="شرح را اینجا بنویسید"></textarea>
                    </div>
            </div>
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">خلاصه ترجمه شده دعوتنامه و یا قید هزینه ها و برنامه ریزی زمانبندی شده روزهای ماموریت بر اساس دعوتنامه(حداکثر در ۵ سطر)</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={5}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            placeholder="شرح را اینجا بنویسید"></textarea>
                    </div>
            </div>
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">خلاصه ترجمه شده دیگر نامه های طرف خارجی (حداکثر در ۱۰ سطر)</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={10}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            placeholder="شرح را اینجا بنویسید"></textarea>
                    </div>
            </div>
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">آیا سفر مذکور نیاز به موافقت دستگاه های مرجع دیگری در داخل دارد؟ در صورت مثبت بودن پاسخ اصل نامه دعوت نامه ضمیمه شود</span>
                    <div class="mt-4 flex">
                    <div className="flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor  ml-1" type="radio" name="confirmation" id="confirmationYes" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بله</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="confirmation" id="confirmationNo" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">خیر</label>
                    </div>
                    <div className="mr-10">
                    <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-72 md:w-full h-15 border-2 border-midGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5  text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400 mr-2"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
                    </div>
                    </div>
            </div>
            <div className="flex w-[100%] mb-8">
                  <p style={{fontFamily: 'Shabnam'}} className="text-base font-normal">سفر در راستای برنامه اقتصاد مقاومتی می باشد؟</p>
                  <div className="flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-7 ml-1" type="radio" name="economy" id="EconomyYes" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بله</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="economy" id="EconomyNo" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">خیر</label>
                  </div>
                </div>
            
              
                
                
                
            </div>
            <div className="flex justify-end">
            <button
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 mt-20 bg-midGray shadow-blackShadow font-IRsans text-white text-xl font-normal rounded-lg hover:bg-lightGray hover:text-darkGray">
                گام قبلی
            </button>
            <button
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 mt-20 mr-4 bg-mainColor shadow-blueShadow font-IRsans text-white text-xl font-normal rounded-lg hover:bg-lightBlue hover:text-mainColor">
                ثبت درخواست
            </button>
            </div>

        </div>

    )
}
export default NewRequestFormStep4;