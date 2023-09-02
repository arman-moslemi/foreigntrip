import React from "react";
import { DatePicker } from "zaman";
import './components.css';
import {Link} from "react-router-dom";
import NewRequestFormStep2Table from "./NewRequestFormStep2Table";

const NewRequestFormStep2 = () => {

    return (
        <div>
          <p style={{fontFamily: 'Shabnam'}} className="text-xl text-mainColor font-normal mt-3.5 mb-8 ">گام 2 - فهرست اسامی و مشخصات ماموران اعزامی</p>
            <div className="flex w-full flex-wrap">
                <div className="flex flex-col w-[31%] ml-[1.5%] mb-5">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نام</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="نام"/>
                    </div>
                </div>
                <div className="flex flex-col w-[32%] mx-[1.5%] mb-5">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نام خانوادگی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="نام خانوادگی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[31%] mr-[1.5%] mb-5">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نام پدر</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="نام پدر"/>
                    </div>
                </div>
                <div className="flex flex-col w-[31%] ml-[1.5%] mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">شماره شناسنامه</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="شماره شناسنامه"/>
                    </div>
                </div>
                <div className="flex flex-col w-[32%] mx-[1.5%] mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">کد ملی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="کد ملی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[31%] mr-[1.5%] mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">تاریخ تولد</span>
                    <div >
                    
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
                <div className="flex flex-col w-[25%] ml-[1.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">جنسیت</span>
                    <div class="mt-6 flex items-center">
                    <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1" type="radio" name="gender" id="woman" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">خانم</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="gender" id="man" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">آقا</label>
                    </div>
                </div>
                <div className="flex flex-col w-[20%] ml-[1%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">وضعیت تاهل</span>
                    <div class="mt-6 flex items-center">
                    <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1" type="radio" name="MaritalStatus" id="single" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">مجرد</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="MaritalStatus" id="married" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">متاهل</label>
                    </div>
                </div>
                <div className="flex flex-col w-[24%] mx-[1.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">مدرک</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="مدرک"/>
                    </div>
                </div>
                <div className="flex flex-col w-[24%] mr-[1.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">رشته تحصیلی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="رشته تحصیلی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[17%] ml-[5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">سابقه کار (سال)</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="سابقه کار به سال"/>
                    </div>
                </div>
                <div className="flex flex-col w-[43%] ml-[1.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">میزان آشنایی با زبان خارجی</span>
                    <div class="mt-6 flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1" type="radio" name="LanguageKnowledge" id="nothing" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">هیچ</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="LanguageKnowledge" id="low" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">کم</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="LanguageKnowledge" id="medium" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">متوسط</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="LanguageKnowledge" id="acceptable" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">قابل قبول</label>
                    </div>
                </div>
                <div className="flex flex-col w-[32%] mr-[1.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">شماره تلفن همراه</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="شماره تلفن همراه"/>
                    </div>
                </div>
                <div className="flex flex-col w-[31%] ml-[3%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">شماره تلفن ثابت</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="شماره تلفن ثابت"/>
                    </div>
                </div>
                <div className="flex flex-col w-[31%] ml-[1.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نوع گذرنامه</span>
                    <div class="mt-6 flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1" type="radio" name="passport" id="normal" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">عادی</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="passport" id="service" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">خدمت</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="passport" id="political" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">سیاسی</label>
                          
                    </div>
                </div>
                <div className="flex flex-col w-[32%] mr-[1.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">محل خدمت</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="محل خدمت"/>
                    </div>
                </div>
                <div className="flex flex-col w-[31%] ml-[1.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">سمت</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="سمت"/>
                    </div>
                </div>
                <div className="flex flex-col w-[33%] mx-[1.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">وضعیت استخدامی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="وضعیت استخدامی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[1.5%] mb-10">
                    <div class="flex justify-end">
                    <button style={{fontFamily: 'Shabnam'}} className="w-40 h-11 mt-7 bg-mainColor shadow-blueShadow   text-white text-xl font-normal rounded-lg hover:bg-lightBlue hover:text-mainColor">
                    + افزودن 
                    </button>
                    </div>
                </div>
                <div className="flex flex-col w-[100%]">
                <NewRequestFormStep2Table/>
                </div>
                
                
            </div>
            <div className="flex justify-end">
            <Link
            to={'/newRequestStep3'}
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 mt-20  bg-mainColor flex justify-center items-center shadow-blueShadow   text-white text-xl font-bold rounded-lg hover:bg-lightBlue hover:text-mainColor">
                گام بعدی
            </Link>
            <Link
                to={'/newRequestStep1'}
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 mt-20 mr-4 bg-midGray flex justify-center items-center shadow-blackShadow   text-white text-xl font-bold rounded-lg hover:bg-lightGray hover:text-darkGray">
                گام قبلی
            </Link>
         
            </div>

        </div>

    )
}
export default NewRequestFormStep2;