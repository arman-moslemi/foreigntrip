import React, {useState} from "react";
import { DatePicker } from "zaman";
import './components.css';
import {Link} from "react-router-dom";


const NewRequestFormStep4 = () => {
    const [showSuccessModal,
        setShowSuccessModal] = React.useState(false);
    return (
        <div>
          <p style={{fontFamily: 'Shabnam'}} className="text-xl text-mainColor font-bold mt-3.5 mb-10 ">گام ۴ - توضیحات سفر</p>
            <div className="flex w-full flex-wrap">
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">شرح اهمیت موضوع سفر ( حداکثر در ۵ سطر )</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={5}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            placeholder="شرح را اینجا بنویسید"></textarea>
                    </div>
            </div>
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">سوابق دستاوردهای قبلی مرتبط با موضوع این ماموریت (حداکثر در ۵ سطر )</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={5}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            placeholder="شرح را اینجا بنویسید"></textarea>
                    </div>
            </div>
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">خلاصه ترجمه شده دعوتنامه و یا قید هزینه ها و برنامه ریزی زمانبندی شده روزهای ماموریت بر اساس دعوتنامه(حداکثر در ۵ سطر)</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={5}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            placeholder="شرح را اینجا بنویسید"></textarea>
                    </div>
            </div>
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">خلاصه ترجمه شده دیگر نامه های طرف خارجی (حداکثر در ۱۰ سطر)</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={10}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            placeholder="شرح را اینجا بنویسید"></textarea>
                    </div>
            </div>
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">آیا سفر مذکور نیاز به موافقت دستگاه های مرجع دیگری در داخل دارد؟ در صورت مثبت بودن پاسخ اصل نامه دعوت نامه ضمیمه شود</span>
                    <div class="mt-4 flex">
                    <div className="flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor  ml-1" type="radio" name="confirmation" id="confirmationYes" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بله</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="confirmation" id="confirmationNo" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">خیر</label>
                    </div>
                    <div className="mr-10">
                    <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-72 md:w-full h-15 border-2 border-midGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex items-center justify-center pt-5 pb-6  ">
                <svg aria-hidden="true" class="w-5 h-5  text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400 mr-2"><span style={{fontFamily:'Shabnam'}} class="font-normal   ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
                    </div>
                    </div>
            </div>
            <div className="flex w-[100%] mb-8">
                  <p style={{fontFamily: 'Shabnam'}} className="text-base font-bold">سفر در راستای برنامه اقتصاد مقاومتی می باشد؟</p>
                  <div className="flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-7 ml-1" type="radio" name="economy" id="EconomyYes" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بله</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="economy" id="EconomyNo" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">خیر</label>
                  </div>
                </div>
            
              
                
                
                
            </div>
            <div className="flex justify-end">
            <Link
            to={'/newRequestStep3'}
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 flex justify-center items-center mt-20 bg-midGray shadow-blackShadow   text-white text-xl font-normal rounded-lg hover:bg-lightGray hover:text-darkGray">
                گام قبلی
            </Link>
            <button
             onClick={() => setShowSuccessModal(true)}
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 mt-20 justify-center items-center flex mr-4 bg-mainColor shadow-blueShadow   text-white text-xl font-normal rounded-lg hover:bg-lightBlue hover:text-mainColor">
                ثبت درخواست
            </button>
            </div>
            {showSuccessModal ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[70%] my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-green">
                    ملاحظات
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۱.قبل از انجام سفر پس از صدور مجوز موافقت با سفر می بایستی مواردی که قطعیت یافته و با علامت مشخص شده است توسط دستگاه تکمیل و مجددا جهت صدور مجوز خروج از کشور(صرفا از بعد نظارت بر سفر های خارجی کارکنان دولت می باشد و فاقد هرگونه ارزش دیگری جهت ارائه به سازمان های دیگر می باشد) ارائه شود.
                  </p>
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۲-بعد از انجام سفر تجربیات حاصل از سفر می بایستی بر روی پورتال اینترنتی دستگاه گذاشته شده (حداکثر در ۱۰ سطر )به اطلاع کارگروه برسد                  </p>
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۳-در صورت هرگونه تغییری در کلیه موارد فوق الذکر قبل یا بعد از انجام سفر بلافاصله به کارگروه داخلی اطلاع رسانی شود.</p>               
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۴-در صورت محرمانه بودن سفر با موضوع یا هر مورد دیگر الزام به تکمیل آن بخش نمایید.                  </p>   
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۵-در صورتی که تامین هزینه ها از طرف بخش خصوصی می باشد.نام بخش خصوصی و علت تامین هزینه ها توضیح داده می شود.             </p>              
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۶-در صورتی که تامین هزینه ها توسط دستگاه است محل تامین ارزی و ریالی آن را ذکر نمایید.            </p>              
                
                </div>
               
                <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                  <Link
                  style={{fontFamily:'Shabnam'}}
                    className="text-white   rounded-sm shadow-blueShadow float-left bg-mainColor font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                   to={'/requestHistory'}
                  >
                    ثبت درخواست
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
export default NewRequestFormStep4;