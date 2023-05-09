import React from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import SubmitForm from "../../components/SubmitForm";
const SubmitReport = () => {
    return(
        <div className="w-full h-full bg-lightGray py-10 px-32 " style={{direction:'rtl'}}>
            <div className="flex">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%]">
                <SubmitForm/>
                </div>
            </div>
        </div>
    )
}
export default SubmitReport;