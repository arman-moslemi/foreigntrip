import React from "react";
import { Link } from "react-router-dom";
import RequestDetail from "./RequestDetail";
import ReportBox from "./ReportBox";
const TravelingReport = () =>{


    return (
        <div className="border border-borderGray rounded-md pt-10 px-5 py-5 mt-7">
             <div className="w-full flex justify-end">
            <div className="px-10 w-max h-[40px] rounded-3xl text-white font-IRsans bg-mainColor flex justify-center items-center font-bold">
                در حال سفر
            </div>
            </div>
            <div className="border-b border-b-borderGray">
            <RequestDetail/>
            </div>
            <ReportBox/>
           
          
           
        </div>
    )
}
export default TravelingReport;