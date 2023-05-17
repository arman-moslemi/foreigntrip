import React from "react";
import {ReactComponent as Info} from "../assets/icon/black/info.svg"
const PassportForm = () =>{

    return(
        <>
        <p className="text-black font-IRsans font-bold">
            فرم زیر را با دقت پر کنید.
        </p>
        <div className="flex items-center mt-3">
            <Info/>
            <p className="text-darkGray font-IRsans font-medium text-sm mr-2">
            تمام فیلدهای لاتین را با حروف بزرگ پر کنید.
        </p>
        </div>
        <div className="mt-5 flex flex-wrap items-center">
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    نام به فارسی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    نام به لاتین (حروف بزرگ)
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    نام خانوادگی به فارسی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    نام خانوادگی به لاتین
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                   نام پدر به فارسی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    نام پدر به لاتین
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    استان محل تولد
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    شهرستان محل تولد
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    استان محل صدور شناسنامه
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    شهرستان محل صدور شناسنامه
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    شماره شناسنامه
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-medium">
                    کد ملی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-bold">
                   تاریخ تولد
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-bold">
                   تلفن همراه
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-bold">
                    محل ماموریت
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-bold">
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
                <span className="text-black font-IRsans text-sm font-bold">
                    مدرک تحصیلی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-bold">
                    ایمیل
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-bold">
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
                <span className="text-black font-IRsans text-sm font-bold">
                    کد پستی
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-bold">
                    تلفن ثابت
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[92%] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-bold">
                    آدرس
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
            <div className="w-[250px] flex flex-col mb-5 mx-3">
                <span className="text-black font-IRsans text-sm font-bold">
                    ارگان اعزام کننده
                </span>
                <input type="text" placeholder="نام به فارسی" className="font-IRsans text-xs text-midGray border border-borderGray rounded-md p-3 mt-2"/>
            </div>
       
        </div>
        
        </>
    )
}

export default PassportForm;