import React,{useState} from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import { Link } from "react-router-dom";
import {ReactComponent as Ticket} from "../../assets/icon/blue/ticket.svg"
import TicketDetail from "../../components/TicketDetail";
const TicketShow = () => {
    const [showNewTicket,setShowNewTicket] = React.useState(false);
    return(
        <div className="w-full h-full bg-lightGray py-10 px-32 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <Ticket/>
                <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mr-3 font-bold">
                      مشاهده پیام
                </span>
                    </div>
                   
                </div>
                <TicketDetail/>
                </div>
            </div>
         
        </div>
    )
}
export default TicketShow;


/*responsive--done*/