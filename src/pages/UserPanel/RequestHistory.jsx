import React from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import CheckImg from "../../assets/img/check.png";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import UserHistoryRequest from "../../components/UserHistoryRequest";

const RequestHistory = () => {
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-32 " style={{direction:'rtl'}}>
            <div className="flex">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%]">
                <div className="flex items-center">
                    <Doc/>
                <span className="font-IRANSans text-mainColor mr-3 ">
                        تاریخچه درخواست ها
                </span>
                </div>
                <UserHistoryRequest/>
                </div>
            </div>
        </div>
    )
}
export default RequestHistory;