import React from "react";
import RequestDetail from "./RequestDetail";
const RequestAccepted = () =>{


    return (
        <div className="border border-borderGray rounded-md pt-10 px-5 py-5 mt-7">
            <div className="w-full flex justify-end">
            <div className="px-10 w-max h-[40px] rounded-3xl text-white font-IRsans bg-[#3AB50E] flex justify-center items-center font-bold">
                تایید شده
            </div>
            </div>
            <RequestDetail/>

           
        </div>
    )
}
export default RequestAccepted;