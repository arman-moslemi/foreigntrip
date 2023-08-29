import React from "react";
import MainRightMenu from "../../components/MainAdminComponent/MainRightMenu";
import {ReactComponent as Profile} from "../../assets/icon/blue/profile.svg"
import MainAdminRequestList from "../../components/MainAdminComponent/MainAdminRequestList";
import {ReactComponent as Search} from "../../assets/icon/white/search.svg"
import { Link } from "react-router-dom";
const RequestsList = () =>{
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-10 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <MainRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-8 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
           
            <div className="flex items-center">
                    <Profile/>
                <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mr-3 font-bold">
                    تاریخچه درخواست ها
                </span>
                
                </div>
            <div className="flex justify-between mt-10 items-end">
                <div className="flex justify-between border border-[#CCCCCD] rounded-full h-[38px] w-[260px] items-center px-2 py-1">
                    <input type="text" className="border-none focus-visible:outline-none" style={{fontFamily:'Shabnam'}} placeholder="جستجو کنید ..."/>
                    <button className="w-[30px] h-[30px] bg-mainColor shadow-blueShadow rounded-full flex justify-center items-center">
                        <Search/>
                    </button>
                </div>
                <div className="flex items-end">
                <div className="flex flex-col w-[150px] ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal font-IRsans">بازه زمانی</span>
                    <div class=" mt-3">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className=" font-IRsans text-right  bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className="font-IRsans">انتخاب بازه زمانی</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className="font-IRsans">5 روز گذشته</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className="font-IRsans">10 روز گذشته</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className="font-IRsans">15 روز گذشته</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className="font-IRsans">20 روز گذشته</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className="font-IRsans">ماه گذشته</option>
                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[150px] mr-2">
                <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal font-IRsans">وضعیت درخواست</span>
                   <div class=" mt-3">
                  
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className=" font-IRsans text-right  bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className="font-IRsans"> وضعیت درخواست </option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className="font-IRsans">درخواست جدید</option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className="font-IRsans">منتظر آپلود امضا</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className="font-IRsans">تایید شده</option>
                         
                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[150px] mr-2">
                <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal font-IRsans">تایید شده توسط</span>

                   <div class=" mt-3">
                 
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className=" font-IRsans text-right  bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className="font-IRsans">انتخاب کارشناس</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className="font-IRsans">علیرضا ابطهی</option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className="font-IRsans">اصغر جوادی</option>
                        

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <button className="bg-mainColor shadow-blueShadow py-2 px-4 text-white mr-2 rounded-md" style={{fontFamily:'Shabnam'}} >
                    اعمال
                </button>
                </div>
                <div className="flex">
                    <button className="shadow-blueShadow  flex px-2  items-center h-[40px] bg-mainColor text-white rounded-md">
                  
                        <span className="text-white" style={{fontFamily:'Shabnam'}}>
                            گزارش گیری
                        </span>
                    </button>
         
                </div>
            </div>
            
            <MainAdminRequestList/>
              
            </div>
        </div>
      
        
    </div>
    )
}
export default RequestsList;

/*responsive--done*/