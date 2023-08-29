import React, {useState} from "react";
import { DatePicker } from "zaman";
import './components.css';
import {Link} from "react-router-dom";

const NewRequestFormStep3 = () => {
    const [showSuccessModal,
        setShowSuccessModal] = React.useState(false);
    return (
        <div>
          <p style={{fontFamily: 'Shabnam'}} className="text-xl text-mainColor font-normal mt-3.5 mb-8 ">گام 3 - اطلاعات تکمیلی</p>
            <div className="flex w-full flex-wrap">
            <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans mb-4">نوع اقامت</span>
                <div className="flex flex-wrap w-[100%] mb-4">
                  <div className="ml-10 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      هتل 3 ستاره
                    </label>
                  </div>
                  <div className="ml-10 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      هتل 4 ستاره
                    </label>
                  </div>
                  <div className="ml-10 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      هتل 5 ستاره 
                    </label>
                  </div>
                  <div className="ml-10 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      مکان متعلق به دستگاه خارجی
                    </label>
                  </div>
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      مکان متعلق به دستگاه داخلی
                    </label>
                  </div>
                  

                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">هزینه اقامت بر عهده</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="هزینه اقامت بر عهده"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">میزان هزینه</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="میزان هزینه"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">هزینه غذا به عهده</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="هزینه غذا به عهده"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">میزان هزینه غذا</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="میزان هزینه غذا"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">نوع بلیط رفت و برگشت</span>
                    <div class="mt-6 flex">
                    <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      Business
                    </label>
                  </div>
                  <div className="mr-10 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      Economic 
                    </label>
                  </div>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">شرکت هواپیمایی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="نام شرکت هواپیمایی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">هزینه بلیط بر عهده</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="هزینه بلیط بر عهده"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">میزان هزینه بلیط</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="میزان هزینه بلیط"/>
                    </div>
                </div>
                <div className="flex flex-col w-[35%] ml-[2.5%] mb-16">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">حق ماموریت</span>
                    <div class="mt-5 flex-col">
                        <div className="flex items-center">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-3" type="radio" name="RightMission" id="InWith" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">با دریافت حق ماموریت از دستگاه داخلی</label>
                        </div>
                        <div className="flex items-center mt-4">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-3" type="radio" name="RightMission" id="InWithout" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بدون دریافت حق ماموریت از دستگاه داخلی</label>
                        </div>
                        <div className="flex items-center mt-4">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-3" type="radio" name="RightMission" id="OutWith" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">با دریافت حق ماموریت از دستگاه خارجی</label>
                        </div>
                        <div className="flex items-center mt-4">
                          <input className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-3" type="radio" name="RightMission" id="OutWithout" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بدون دریافت حق ماموریت از دستگاه خارجی</label>
                        </div>
                          
                    </div>
                </div>
                <div className="flex flex-col w-[45%] mr-[2.5%] ml-[15%] mb-16">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">میزان حق ماموریت</span>
                    <div class="mt-5 flex-col w-[100%]">
                      <div className="flex items-center w-[100%]">
                        <div className="w-36">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4 mr-8"/>
                           کارشناس : 
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[52%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="w-36">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4 mr-8"/>
                            مدیر :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[52%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="w-36">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4 mr-8"/>
                            مدیر کل :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[52%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[100%]  mb-11">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">حق آموزش</span>
                    <div class="mt-5 flex-col w-[100%]">
                      <div className="flex items-center w-[100%]">
                        <div className="w-[41%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            هزینه آموزش توسط متقاضی پرداخت می شود. میزان هزینه :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[16%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="w-[41%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            هزینه آموزش توسط دستگاه داخلی پرداخت می شود. میزان هزینه :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[16%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="w-[41%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                             با توجه به پرداخت حق عضویت بین المللی هزینه ای ندارد.
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[16%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[43%]  mb-11">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">حق ایاب و ذهاب </span>
                    <div class="mt-5 flex-col w-[100%]">
                      <div className="flex items-center w-[100%]">
                        <div className="w-[61%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            بر عهده دستگاه اجرایی . میزان هزینه :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[36%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="w-[61%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            بر عهده شخص می باشد . میزان هزینه :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[36%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="w-[61%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                             بر عهده طرف خارجی می باشد.
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[36%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[51%] mr-[6%]  mb-11">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">ویزا</span>
                    <div class="mt-5 flex-col w-[100%]">
                      <div className="flex items-center w-[100%]">
                        <div className="w-[71%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                                هزینه ویزا توسط دستگاه پرداخت می شود . هزینه اخذ ویزا:
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[22%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="w-[41%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            هزینه ویزا ندارد.
                          </label>
                        </div>


                      </div>
                      
                        
                    </div>
                </div>
                <div className="flex flex-col w-[100%]  mb-14">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">عوارض خروج </span>
                    <div class="mt-5 flex-col w-[100%]">
                      <div className="flex items-center w-[100%]">
                        <div className="w-[41%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            با توجه به اینکه گذرنامه دولتی است عوارض خروج ندارد.
                          </label>
                        </div>
                        


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="w-[26%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                           بر عهده شخص . مبلغ عوارض :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[16%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="w-[26%]">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                             بر عهده دستگاه متبوعه. مبلغ عوارض :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[16%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[100%]  mb-14">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">پرداخت از طریق سیستم بانکی</span>
                    <div class="mt-5  w-[100%]">
                    <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[40%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />
                      
                        
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
                گام بعدی
            </button>
            </div>

        </div>

    )
}
export default NewRequestFormStep3;