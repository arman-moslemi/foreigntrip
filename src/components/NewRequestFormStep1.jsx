import React, {useState} from "react";
import { DatePicker } from "zaman";
import './components.css';
import {Link} from "react-router-dom";

const NewRequestFormStep1 = () => {
    const [showSuccessModal,
        setShowSuccessModal] = React.useState(false);
    return (
        <div>
          <p style={{fontFamily: 'Shabnam'}} className="text-xl text-mainColor font-bold mt-3.5 mb-8 ">گام 1 - اطلاعات اولیه</p>
            <div className="flex w-full flex-wrap">
                <div className="flex flex-col w-[31%] ml-[1.5%] mb-5">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نام دستگاه اجرایی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="نام دستکاه اجرایی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[32%] mx-[1.5%] mb-5">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">آدرس اینترنتی دستگاه اجرایی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="آدرس اینترنتی دستگاه اجرایی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[31%] mr-[1.5%] mb-5">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">کشور و شهر مقصد</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="کشور و شهر مقصد"/>
                    </div>
                </div>
                <div className="flex flex-col w-[31%] ml-[1.5%] mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">مسیر پروازی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="مسیر پروازی"/>
                    </div>
                </div>
                <div className="flex w-[32%] mx-[1.5%] mb-7 items-end">
                    <div className="flex flex-col w-[39%] ">
                        <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">تاریخ و مدت سفر</span>
                        <div class="mt-2   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full" id="StartDate">
                        <DatePicker style={{fontFamily:'Shabnam'}} placeholder="خهاخعل"  onChange={(e) => console.log(e.value)} />
                            {/* <input style={{fontFamily: 'Shabnam'}}
                                type="text"
                                id="input-group-1"
                                class="   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                                placeholder="کد پستی"/> */}
                        </div>
                    </div>
                    <div className="w-[22%] flex justify-center pb-2"><p style={{fontFamily: 'Shabnam'}} className="text-base font-normal">لغایت</p></div>
                    <div className="w-[39%]   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block" id="EndDate">
                    <DatePicker style={{fontFamily:'Shabnam'}} placeholder="خهاخعل"  onChange={(e) => console.log(e.value)} />
                            {/* <input style={{fontFamily: 'Shabnam'}}
                                type="text"
                                id="input-group-1"
                                class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                                placeholder="کد پستی"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[31%] mr-[1.5%] mb-7">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">مدت زمان سفر</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="تعداد روز"/>
                    </div>
                </div>
                <div className="flex flex-col w-[100%]  mb-8">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">موضوع سفر</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="موضوع سفر را اینجا بنویسید"/>
                    </div>
                </div>
                <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold   mb-4">اهداف سفر</span>
                <div className="flex flex-wrap w-[100%]">
                  <div className="ml-14 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      اداری
                    </label>
                  </div>
                  <div className="ml-14 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      تجاری
                    </label>
                  </div>
                  <div className="ml-14 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      آموزشی
                    </label>
                  </div>
                  <div className="ml-14 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      فرهنگی
                    </label>
                  </div>
                  <div className="ml-14 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      سیاسی
                    </label>
                  </div>
                  <div className="ml-14 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      اقتصادی
                    </label>
                  </div>
                  <div className="ml-14 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      صنعتی
                    </label>
                  </div>
                  <div className="ml-14 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      علمی
                    </label>
                  </div>

                </div>
                <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold   mb-4 mt-9">اهداف شغلی</span>
                <div className="flex flex-wrap w-[100%]">
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      مذاکرات
                    </label>
                  </div>
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      تامین تجهیزات
                    </label>
                  </div>
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      برگزاری نمایشگاه
                    </label>
                  </div>
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      تست کالا و خدمات
                    </label>
                  </div>
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      حسابرسی
                    </label>
                  </div>
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      صدور خدمات فنی و مهندسی
                    </label>
                  </div>
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      بازاریابی
                    </label>
                  </div>

                </div>
                <div className="flex flex-col w-[48.5%] ml-[1.5%] mt-8 mb-12">
                  
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">متولیان / شرکت کنندگان</span>
                    
                    <div class="mt-5 flex w-[100%]">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-[28%] p-2.5  "
                            placeholder="نام دستکاه "/>
                        <div className="flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-5 ml-1" type="radio" name="hhh" id="r1" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="r1">متولی</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-5 ml-1" type="radio" name="hhh" id="r2" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="r2">شرکت کننده</label>
                        </div>
                    </div>
                
                </div>
                <div className="flex flex-col w-[48.5%] mr-[1.5%] mt-8 mb-12">
                  
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نوع گذرنامه</span>
                    
                    <div class="mt-7 flex w-[100%]">
                        <div className="flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1" type="radio" name="pp" id="r3" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="r3">عادی</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-5 ml-1" type="radio" name="pp" id="r4" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="r4">خدمت</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-5 ml-1" type="radio" name="pp" id="r5" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="r5">سیاسی</label>
                        </div>
                    </div>
                
                </div>
                <div className="flex w-[100%] mb-10">
                  <p style={{fontFamily: 'Shabnam'}} className="text-base font-bold">آیا نیاز به یادداشت وزارت امور خارجه برای اخذ ویزا دارد ؟</p>
                  <div className="flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-7 ml-1" type="radio" name="q1" id="a1" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بله</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="q1" id="a2" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">خیر</label>
                  </div>
                </div>
                <div className="flex w-[100%] mb-8">
                  <p style={{fontFamily: 'Shabnam'}} className="text-base font-bold">آیا سفر مشترک بین چند دستگاه اجرایی است ؟</p>
                  <div className="flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-7 ml-1" type="radio" name="q2" id="a3" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بله</label>
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" name="q2" id="a4" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a2">خیر</label>
                  </div>
                </div>
                <div className="flex flex-col w-[90%] ml-[1.5%] mb-3">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">شماره تاریخ نامه و مقام پیشنهاد دهنده داخلی دستگاه برای انجام سفر را درج نمائید :</span>
                    <div class="mt-6">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-[40%] p-2.5  "
                            />
                    </div>
                </div>
                
            </div>
            <div className="flex justify-end">
            <Link to={'/newRequestStep2'}
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 flex justify-center items-center bg-mainColor shadow-blueShadow   text-white text-xl font-bold rounded-lg hover:bg-lightBlue hover:text-mainColor">
                گام بعدی
            </Link>
            </div>

        </div>

    )
}
export default NewRequestFormStep1;