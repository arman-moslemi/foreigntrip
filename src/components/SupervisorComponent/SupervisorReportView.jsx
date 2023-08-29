import React,{useState} from "react";
import { Link } from "react-router-dom";
import RequestDetail from "./RequestDetail";
import ReportBox from "./ReportBox";
const SupervisorReportView = () =>{

    const [show,setShow] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [showSendModal, setShowSendModal] = React.useState(false);
       
    return (
        <div className="border border-borderGray rounded-md pt-10 px-5 py-5 mt-7">
           
            <div className="border-b border-b-borderGray">
            <RequestDetail/>
            </div>
            <ReportBox/>
          
           
        </div>
    )
}
export default SupervisorReportView;