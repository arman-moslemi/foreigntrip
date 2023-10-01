import React from "react";
import MainRightMenu from "../../components/MainAdminComponent/MainRightMenu";
import {ReactComponent as Profile} from "../../assets/icon/blue/profile.svg"
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import MainAdminRequestList from "../../components/MainAdminComponent/MainAdminRequestList";
import {ReactComponent as Search} from "../../assets/icon/white/search.svg"

const RequestsList = () =>{
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-10 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <MainRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-8 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] md:min-w-[95%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
           
            <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                    تاریخچه درخواست ها
                </span>
                
                </div>
            <div className="flex xl-1400:flex-col xl-1400:items-start justify-between mt-10 items-end">
                
                <div className="flex justify-between border border-[#CCCCCD] rounded-full h-[38px] w-[260px] xl-1400:w-[100%] items-center px-2 py-1">
                    <input type="text" className="border-none focus-visible:outline-none" style={{fontFamily:'Shabnam'}} placeholder="جستجو کنید ..."/>
                    <button className="w-[30px] h-[30px] bg-mainColor shadow-blueShadow rounded-full flex justify-center items-center">
                        <Search/>
                    </button>
                </div>
                <div className="flex items-end justify-between lg:flex-col-reverse lg:items-start  w-[70%] xl-1400:w-[100%] xl-1400:mt-6">
                <div className="flex lg:flex-wrap items-end xl-1400:w-[83%] lg:w-[100%] lg:mt-6">
                <div className="flex flex-col w-[150px] lg:w-[48%] lg:ml-[2%] 2xs:w-[100%] 2xs:mx-0 ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">بازه زمانی</span>
                    <div class=" mt-3">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب بازه زمانی</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">5 روز گذشته</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">10 روز گذشته</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">15 روز گذشته</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">20 روز گذشته</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">ماه گذشته</option>
                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[150px] lg:w-[48%] lg:mr-0 mr-2 xl-1400:mr-1 2xs:w-[100%] 2xs:mx-0 2xs:mt-4">
                <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">وضعیت درخواست</span>
                   <div class=" mt-3">
                  
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" "> وضعیت درخواست </option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">درخواست جدید</option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className=" ">منتظر آپلود امضا</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">تایید شده</option>
                         
                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[150px] lg:w-[48%] lg:ml-[2%] lg:mr-0 mr-2 xl-1400:mr-1 lg:mt-4 2xs:w-[100%] 2xs:mx-0">
                <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">تایید شده توسط</span>

                   <div class=" mt-3">
                 
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب کارشناس</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">علیرضا ابطهی</option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className=" ">اصغر جوادی</option>
                        

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <button className="bg-mainColor shadow-blueShadow py-2 px-4 text-white lg:w-[48%]  lg:mr-0 mr-2 2xs:w-[100%] 2xs:mx-0 2xs:mt-4 xl-1400:mr-1 rounded-md" style={{fontFamily:'Shabnam'}} >
                    اعمال
                </button>
                </div>
                <div className="flex mr-8 xl-1400:mr-0 xl-1400:w-[16%] lg:w-[100%] justify-end">
                    <button className="shadow-blueShadow  flex px-2 xl-1400:w-[100%] xl-1400:justify-center items-center h-[40px] bg-mainColor text-white rounded-md">
                  
                        <span className="text-white" style={{fontFamily:'Shabnam'}}>
                            گزارش گیری
                        </span>
                    </button>
         
                </div>
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