import React,{useState} from "react";
import InternationalRightMenu from "../../components/InternationalComponent/InternationalRightMenu";

import { Link } from "react-router-dom";
const InternationalReportsView = () =>{
    const [show , setShow]=useState(false);
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [showSendModal, setShowSendModal] = React.useState(false);
    return(
        <div className="w-full h-full  bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <InternationalRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
            <div className="flex items-center justify-between">
                    
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor  font-bold">
                       مشاهده گزارش ارسال شده
                </span>
           
                </div>
                <div className="flex justify-between flex-wrap">
                <div className="w-full my-3">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        نام و نام خانوادگی مامور یا مامورین :
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                             علی مرادزاده - تقی احمدزاده - مرتضی احمدی
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                       شماره و تاریخ درخواست : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                             02/04/28 - 123
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        شماره و تاریخ مجوز :
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                        02/04/28 - 123
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        تاریخ انجام سفر :
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              02/12/12
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                       آدرس الکترونیکی دستگاه مقصد : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              info@mta.com
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        نام دستگاه داخلی : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              وزارت نیرو
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        نام دستگاه مقصد : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                             وزارت نیرو خارج
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        کشور مقصد : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                             قراردادی
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                       کشور مقصد :  
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              ایتالیا
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                       شهر مقصد : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            رم
                        </span>
                    </p>
                </div>
                <div className="w-full my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                       خلاصه دستاورد سفر(اعم از مکان های مورد بازدید طرفها و مقامات ملاقات شونده موضوعات مطروحه توافقات بعمل آمده موارد کاربردی برای سایر دستگاه های ذیربط و ...) :
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                        این سفر شامل دستاوردهای مادی و معنوی زیادی بود از جمله مورد یک و مورد دو و مورد سه می باشد.
می توان به مورد یک و دو و سه اشاره کرد که حائز اهمیت است !
                        </span>
                    </p>
                </div>
            </div>
            {
                show?
                <div className="mt-20 w-full">
                   <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        علت رد درخواست مامور اعزامی را اینجا بنویسید
                        </p>
                        <textarea id="message" rows="8" class="block p-2.5 mt-5   w-full text-sm text-gray-900 bg-gray-50 rounded border  border-borderGray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="توضیحات خود را اینجا بنویسید..."></textarea>
                       <div className="flex justify-end w-full">
                       
              <button style={{fontFamily:'Shabnam'}}  onClick={() => setShowSendModal(true)} className="mt-5 min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow   text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor ">
               ارسال
              </button>
              {showSendModal ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-red">
                    رد گزارش                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                علت رد گزارش مامور اعزامی با موفقیت برای ایشان ارسال گردید.
                  </p>
                </div>
               
                <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                  <Link to={'/internationalAdmin/reportList'} style={{fontFamily:'Shabnam'}} 
                    className="text-mainColor   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSendModal(false)}
                  >
                    بستن
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
                </div>
                :
                <div className="flex w-full justify-end mt-10">
                <button style={{fontFamily:'Shabnam'}}  className=" bg-[#ff0000] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white    font-medium text-base shadow-redShadow hover:bg-white hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]" 
                onClick={()=>setShow(true)
                }>
                        رد کردن گزارش
                    </button>
                    <button style={{fontFamily:'Shabnam'}}  onClick={() => setShowSuccessModal(true)} className="mr-5 bg-[#3AB50E] hover:bg-white hover:text-[#3AB50E] hover:border-2 hover:border-[#3AB50E] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white    font-medium text-base shadow-greenShadow">
                       تایید گزارش
                    </button>
                    {showSuccessModal ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[30%] my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-green">
                    تایید گزارش
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm  ">
تایید گزارش مامور اعزامی با موفقیت انجام شد.
                  </p>
                </div>
               
                <div className="flex items-center justify-center  border-solid border-slate-200 rounded-b mb-4">
                  <button style={{fontFamily:'Shabnam'}} 
                    className=" float-left flex bg-mainColor items-center rounded-md shadow-blueShadow uppercase px-3 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSuccessModal(false)}
                  >
                  
                    <span style={{fontFamily:'Shabnam'}} className="text-white   text-sm font-bold">
                   بستن
                    </span>
                   
                    
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
            }
            </div>
        </div>
    </div>
    )
}
export default InternationalReportsView;

/*responsive--done*/