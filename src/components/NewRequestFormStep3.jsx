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
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-11">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">هزینه اقامت بر عهده</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="هزینه اقامت بر عهده"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-11">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">میزان هزینه</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="میزان هزینه"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-14">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">هزینه غذا به عهده</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="هزینه غذا به عهده"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-14">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">میزان هزینه غذا</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="میزان هزینه غذا"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] ml-[2.5%] mb-5">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">نوع بلیط رفت و برگشت</span>
                    <div class="mt-2 flex">
                    <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      Business
                    </label>
                  </div>
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      Economic 
                    </label>
                  </div>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] mr-[2.5%] ml-[35%] mb-14">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-normal font-IRsans">میزان هزینه غذا</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="میزان هزینه غذا"/>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-end">
            <button
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 bg-mainColor shadow-blueShadow font-IRsans text-white text-xl font-normal rounded-lg hover:bg-lightBlue hover:text-mainColor">
                گام بعدی
            </button>
            </div>

        </div>

    )
}
export default NewRequestFormStep3;