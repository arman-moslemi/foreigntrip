import React,{useState} from "react";
import MainRightMenu from "../../components/MainAdminComponent/MainRightMenu";
import { Link } from "react-router-dom";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import MessageList from "../../components/MainAdminComponent/MessageList";
const SendMessageList = () => {
    const [showNewTicket,setShowNewTicket] = React.useState(false);
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <MainRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between sm:flex-wrap">
                    <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                      ارسال پیام
                </span>
                    </div>
                   <Link to={'/mainAdmin/message'}>
                   <button  style={{fontFamily:'Shabnam'}}  className="bg-mainColor px-4 py-1.5 shadow-blueShadow text-white   text-base rounded-md sm:mr-auto sm:mt-5">
                        + پیام جدید
                    </button>
                   </Link>
                </div>
                <MessageList/>
                </div>
            </div>
         
        </div>
    )
}
export default SendMessageList;


/*responsive--done*/