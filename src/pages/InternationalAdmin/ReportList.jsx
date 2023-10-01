import React from "react";
import InternationalRightMenu from "../../components/InternationalComponent/InternationalRightMenu";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import InternationalReportTable from "../../components/InternationalComponent/InternationalReportTable";
import {ReactComponent as Search} from "../../assets/icon/white/search.svg"

const InternationalReportsList = () =>{
    return(
        <div className="w-full h-screen  bg-lightGray py-10 px-20 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
        <InternationalRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] xl:p-5 md:w-[95%] md:min-w-[95%] md:rounded-xl md:mx-auto">
            <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                        تاریخچه گزارشات
                </span>
                </div>
                <div className="flex xl-lg:flex-col xl-lg:items-start justify-between mt-10 items-end">
                <div className="flex justify-between border border-[#CCCCCD] rounded-full h-[38px] w-[350px] xl-lg:w-[100%] items-center px-2 py-1">
                    <input type="text" className="border-none focus-visible:outline-none" style={{fontFamily:'Shabnam'}} placeholder="جستجو کنید ..."/>
                    <button className="w-[30px] h-[30px] bg-mainColor shadow-blueShadow rounded-full flex justify-center items-center">
                        <Search/>
                    </button>
                </div>
              
                <div className="flex items-end 2xs:flex-col 2xs:items-start xl-lg:w-[100%] xl-lg:mt-5 xl-lg:mr-1">
                <div className="flex items-end xl-lg:w-[53%] xs:w-[60%] 2xs:w-[100%]">
               
                <div className="flex flex-col w-[164px] xl-lg:w-[100%] ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">مرتب سازی</span>
                    <div class=" mt-3">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">وضعیت</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">در حال انجام ماموریت</option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className=" ">منتظر تایید درخواست</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">اتمام ماموریت</option>
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">تایید گزارش نهایی</option>
                            <option style={{fontFamily:'Shabnam'}} value="waiting" className=" ">رد گزارش نهایی</option>


                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
    
               </div>
                    <button className="shadow-blueShadow xl-lg:w-[30%] xs:w-[40%] 2xs:w-[100%] xl-lg:justify-center flex px-2 mr-4 xs:mr-2 2xs:mr-0 2xs:mt-4  items-center h-[42px] bg-mainColor text-white rounded-md">
                  
                        <span className="text-white" style={{fontFamily:'Shabnam'}}>
                            گزارش گیری
                        </span>
                    </button>
           
                </div>
            </div>
            <InternationalReportTable/>
            </div>
        </div>
    </div>
    )
}
export default InternationalReportsList;

/*responsive--done*/