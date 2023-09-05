import React  from "react";
import { DatePicker } from "zaman";
import {ReactComponent as Info} from "../assets/icon/black/info.svg"
import {ReactComponent as Send} from "../assets/icon/blue/Send.svg"
import { Link } from "react-router-dom";
const TravelForm = () =>{
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

    return(
      <div>
          <div className="flex items-center">
              <Send/>
              <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
              ارسال گزارش دستاورد سفر
              </span>
          </div>
          <p style={{fontFamily:'Shabnam'}} className="  text-black font-semibold text-base mt-5">
            شما موظف هستید بعد از اتمام سفر خود٬گزارش دستاورد خود از این سفر را در سامانه بارگذاری کنید.
          </p>
          <div className="flex items-center mt-2 w-full border-b border-lightGray border-dashed pb-5">
            <Info/>
            <p style={{fontFamily:'Shabnam'}} className="  text-[#5C5F66] font-medium text-sm mr-2">
            در صورت عدم بارگذاری گزارش دستاورد و یا عدم بارگذاری گزارش مناسب برای سفر آتی اجازه سفر صادر نمی شود.
          </p>
          
          </div>
          <p style={{fontFamily: 'Shabnam'}} className="text-xl text-mainColor font-semibold mt-12 mb-6 ">دستاورد محتوایی انجام سفر</p>
          <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نام و نام خانوادگی مامور یا مامورین</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={4}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            ></textarea>
                    </div>
            </div>
            <div className="flex flex-wrap w-[100%] mb-4">
            <div className="flex flex-col w-[30%] ml-[2.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">شماره تاریخ درخواست</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            />
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">شماره و تاریخ مجوز</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            />
                    </div>
                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">تاریخ انجام سفر</span>
                    <div class="mt-2">
                    <div class="mt-2   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full" id="StartDate">
                        <DatePicker style={{fontFamily:'Shabnam'}} placeholder="خهاخعل"  onChange={(e) => console.log(e.value)} />
                            {/* <input style={{fontFamily: 'Shabnam'}}
                                type="text"
                                id="input-group-1"
                                class="   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                                placeholder="کد پستی"/> */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">مدت (به روز)</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            />
                    </div>
                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">آدرس الکترونیکی دستگاه داخلی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            />
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">آدرس الکترونیکی دستگاه مقصد</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            />
                    </div>
                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نام دستگاه داخلی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            />
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نام دستگاه مقصد</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            />
                    </div>
                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">کشور مقصد</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            />
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">شهر مقصد</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            />
                    </div>
                </div>

                </div>
            <div className="flex flex-col w-[100%]  mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">خلاصه دستاورد سفر (اعم از مکان های مورد بازدید طرفها و مقامات ملافات شونده موضوعات مطروحه توافقات بعمل آمده موارد کاربردی برای سایر دستگاه های ذیربط  و ..)</span>
                    <div class="mt-2">
                    <textarea style={{fontFamily:'Shabnam'}}
                            rows={4}
                            type="text"
                            
                            id="input-group-1"
                            class="pr-4   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  "
                            ></textarea>
                    </div>
            </div>
        
            <div className="flex justify-end mt-12 mb-28">
            <button
            onClick={()=>setShowSuccessModal(true)}
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 bg-mainColor shadow-blueShadow   text-white text-xl font-normal rounded-lg hover:bg-lightBlue hover:text-mainColor">
                ارسال گزارش
            </button>
            </div>
         
            {showSuccessModal ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-green">
                    ارسال گزارش دستاورد سفر
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                 ارسال گزارش دستاورد سفر با موفقیت انجام شد
                  </p>
                </div>
               
                <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                  <Link
                    className="text-mainColor   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                   to={'/requestHistory'}
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
         
    )
}
export default TravelForm;