import React from "react";

import RequestDetail from "./RequestDetail";
const RequestRejected = () =>{


    return (
        <div className="border border-borderGray rounded-md pt-10 px-5 py-5 mt-7">
            <div className="w-full flex justify-end">
            <div className="px-10 w-max h-[40px] rounded-3xl text-white font-IRsans bg-[#ff0000] flex justify-center items-center font-bold">
                رد شده
            </div>
            </div>
         <RequestDetail/>
            <div className="mt-20">
                <p className="font-IRsans text-base font-bold text-[#0D296E]">
علت رد درخواست مامورد اعزامی :
                </p>
                <p className="font-IRsans علت رد درخواست مامور اعزامی را اینجا بنویسیدtext-sm font-medium text-darkGray mt-4 leading-7">
                    درخواست شما به علت عدم توضیح کافی راجع به موضوع سفر  و مشخص نبودن تاریخ دقیق سفر پذیرفته نشد.
                    لطفا موارد ذکر شده را اصلاح کنید و سپس مجدد درخواست خود را ثبت کنید.
                </p>
            </div>
           
        </div>
    )
}
export default RequestRejected;

/*responsive--done*/