import React,{useState} from "react";
import { Link } from "react-router-dom";
import RequestDetail from "./RequestDetail";
import ReportBox from "./ReportBox";
const TravelingDoneReport = () =>{

    const [show,setShow] = useState(false);

    return (
        <div className="border border-borderGray rounded-md pt-10 px-5 py-5 mt-7">
           
            <div className="border-b border-b-borderGray">
            <RequestDetail/>
            </div>
            <ReportBox/>
            {
                show?
                <div className="mt-20">
                   <p className="font-IRsans text-base font-bold text-[#0D296E]">
                       علت رد گزارش مامور اعزامی را اینجا بنویسید.
                        </p>
                        <textarea id="message" rows="8" class="block p-2.5 mt-5 font-IRsans w-full text-sm text-gray-900 bg-gray-50 rounded border  border-borderGray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="توضیحات خود را اینجا بنویسید..."></textarea>
                       <div className="flex justify-end w-full">
                       <Link to={`/`}>
              <button className="mt-5 min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor ">
               ارسال
              </button>
            </Link>   
                        </div>
                </div>
                :
                <div className="flex w-full justify-end mt-10">
                <button className=" bg-[#ff0000] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-redShadow hover:bg-white hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]" 
                onClick={()=>setShow(true)
                }>
                        رد کردن درخواست
                    </button>
                    <button className="mr-5 bg-[#3AB50E] hover:bg-white hover:text-[#3AB50E] hover:border-2 hover:border-[#3AB50E] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-greenShadow">
                       تایید درخواست
                    </button>
                   
                </div>
            }
          
           
        </div>
    )
}
export default TravelingDoneReport;