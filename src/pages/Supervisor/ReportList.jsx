import React from "react";
import UserReportList from "../../components/UserReportList";
import SuperVisorRightMenu from "../../components/SupervisorComponent/SuperVisorRightMenu";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
const ReportList = () =>{

    return(
        <>
         <div className="w-full h-screen md:h-screen bg-lightGray py-10 px-10 xl:px-0 md:p-0  lg:h-screen" style={{direction:'rtl'}}>

<div className="flex md:block">
<SuperVisorRightMenu/>
<div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
<div className="flex items-center justify-between">
                    <div className="flex">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mr-3 font-bold">
                       تاریخچه گزارشات
                </span>
                    </div>
                   
                </div>
<UserReportList/>
</div>
</div>
</div>
        
        </>
    )
}

export default ReportList;