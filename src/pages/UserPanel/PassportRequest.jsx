import React from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import PassportForm from "../../components/PassportForm";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
const PassportRequest = () => {
    return(
        <div className="w-full h-full bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
            <div className="flex md:block">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center mb-10">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mr-3 font-bold">
                        درخواست صدور گذرنامه خدمت سیاسی
                </span>
                </div>
                <PassportForm/>
                </div>
            </div>
        </div>
    )
}
export default PassportRequest;

/*responsive -- done */