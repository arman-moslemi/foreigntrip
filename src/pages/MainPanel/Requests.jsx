import React from "react";
import MainRightMenu from "../../components/MainRightMenu";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import MainHistoryRequest from "../../components/MainHistoryRequest";
const Request = () =>{
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-32 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <MainRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
            <div className="flex items-center">
                    <Doc/>
                <span className="font-IRsans text-mainColor mr-3 font-bold">
                        تاریخچه درخواست ها
                </span>
                </div>
                <div className="flex items-center mt-6 justify-between flex-wrap">
                
                <label for="cars" className="font-IRsans">فلیتر بر اساس :</label>

            <div className="flex items-center ">

            <select name="cars" id="cars" className="font-IRsans mr-2 border border-[#c1c1c1] rounded-md p-2">
                  <option value="newRequest" className="font-IRsans">درخواست جدید</option>
                  <option value="waiting" className="font-IRsans">منتظر آپلود امضا</option>
                  <option value="check" className="font-IRsans">تایید شده</option>
                  <option value="not" className="font-IRsans">رد شده</option>
                
            </select>
            <select name="cars" id="cars" className="font-IRsans mr-2 border border-[#c1c1c1] rounded-md p-2">
                  <option value="Farvardin" className="font-IRsans">فروردین</option>
                  <option value="ordibehesht" className="font-IRsans">اردیبهشت</option>
                  <option value="khordad" className="font-IRsans">خرداد</option>
            
            </select>

            </div>

            <div className="flex md:mt-5">
            <button  className="mr-5 bg-mainColor hover:bg-white hover:text-mainColor hover:border-2 hover:border-mainColor w-[162px] md:w-auto md:px-2 rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-blueShadow">
                      اعمال فیلتر
                    </button>
                    <button  className="mr-5 bg-mainColor hover:bg-white hover:text-mainColor hover:border-2 hover:border-mainColor w-[162px] md:w-auto md:px-2 rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-blueShadow">
                      دریافت خروجی اکسل
                    </button>
            </div>

          


        </div>
                <MainHistoryRequest/>
            </div>
        </div>
    </div>
    )
}
export default Request;

/*responsive--done*/