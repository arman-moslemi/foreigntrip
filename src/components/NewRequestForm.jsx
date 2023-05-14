import React from "react";

import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Location} from "../assets/icon/black/location.svg"
import {ReactComponent as Calendar} from "../assets/icon/black/calender.svg"
import {ReactComponent as Clock} from "../assets/icon/black/clock.svg"
import {ReactComponent as Doc} from "../assets/icon/black/doc.svg"
import {ReactComponent as Website} from "../assets/icon/black/website.svg"
import {ReactComponent as Card} from "../assets/icon/black/card.svg"
import {ReactComponent as Add} from "../assets/icon/blue/add.svg"
import {ReactComponent as Dollar} from "../assets/icon/blue/dollar.svg"
import { Link } from "react-router-dom";

const NewRequestForm = () =>{
   
    return(
    <div>
        <div className="flex items-center">
            <Add/>
            <span className="font-IRsans text-mainColor mr-3 font-bold">
                ثبت درخواست جدید
            </span>
        </div>
      <div className="flex w-[80%] mx-auto flex-wrap justify-between mt-10 xl:w-[100%]">
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <User/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="نام و نام خانوادگی"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Doc/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="شناسه ملی"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <User/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="سمت"/>
        </div>
              
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Location/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="محل خدمت"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1" >
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Doc/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="نوع استخدام"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Calendar/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="تاریخ سفر"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Clock/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="مدت سفر"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Doc/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="موضوع سفر"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Website/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="کشور مقصد"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Card/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="پرداخت کننده"/>
        </div>
        <div class="relative my-2 w-[45%] lg:w-[48%] xs:w-[100%] xs:my-1">
            <div class="absolute top-5 right-2 flex items-center pl-3 pointer-events-none">
                <Dollar/>
            </div>
            <input type="text" id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="هزینه سفر"/>
        </div>
        <Link to={`/requestRegistered`} className="w-full">
        <button className="w-[140px] h-10 bg-mainColor shadow-blueShadow mt-5 font-IRsans xs:mr-auto xs:float-left text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                        ثبت درخواست
            </button>
        </Link>
             
      </div>
              
    </div>
         
    )
}
export default NewRequestForm;