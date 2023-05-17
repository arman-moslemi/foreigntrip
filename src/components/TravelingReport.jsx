import React from "react";
import { Link } from "react-router-dom";
import RequestDetail from "./RequestDetail";
import ReportBox from "./ReportBox";
const TravelingReport = () =>{


    return (
        <div className="border border-borderGray rounded-md pt-10 px-5 py-5 mt-7">
           
            <div className="border-b border-b-borderGray">
            <RequestDetail/>
            </div>
            <ReportBox/>
           
          
           
        </div>
    )
}
export default TravelingReport;