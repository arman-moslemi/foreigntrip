import React from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
const NewRequest = () => {
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-32 " style={{direction:'rtl'}}>
            <div className="flex">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-5 my-10 w-[80%]">
                
                </div>
            </div>
        </div>
    )
}
export default NewRequest;