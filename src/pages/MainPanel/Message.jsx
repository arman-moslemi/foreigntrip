import React from "react";
import MainRightMenu from "../../components/MainAdminComponent/MainRightMenu";

import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import MessageForm from "../../components/MainAdminComponent/MessageForm";
const Message = () => {

    return(
        <div className="w-full h-full bg-lightGray py-10 px-20 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <MainRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] md:min-w-[95%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between sm:flex-wrap">
                    <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                   ارسال پیام جدید
                </span>
                    </div>
             
                </div>
                <MessageForm/>
                </div>
            </div>
       
        </div>
    )
}
export default Message;


/*responsive--done*/