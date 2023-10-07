import React,{useState} from "react";
import {ReactComponent as Attachment} from "../assets/icon/blue/attach.svg"
import {ReactComponent as Send} from "../assets/icon/black/send.svg"
import { ReactComponent as Support } from "../assets/icon/white/support.svg";
import { ReactComponent as User } from "../assets/icon/white/profile.svg";
import Cookies from 'universal-cookie';
import { axiosReq } from "../commons/axiosReq";
const TicketDetail = ({data,ticket,setRecheck,reCheck}) =>{
  const [message, setMessage] = useState()

  const insertTicket= async () => {
    console.log("req")
    const cookies = new Cookies();
    const dataUser = await axiosReq("Ticket/InsertSubTicket", {

        IsAdmin: false,

        Message: message,
        TicketID:ticket?.ticketId

       
    });
    console.log(dataUser)
    if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {

setRecheck(!reCheck)
setMessage()
    }
    else {
        alert("اطلاعات ورودی نادرست می باشند")
    }

}
  return(
    <>
     <div className="flex xs:flex-col justify-between border-b border-b-midGray pb-5 mt-5">
      <div className="flex flex-col">
        <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] text-lg font-bold xl-lg:text-base">
          {ticket?.subject}
        </span>
        <span style={{fontFamily:'Shabnam'}} className="  text-darkGray mt-2 xs:mt-1 xl-lg:text-base">
          #{ticket?.ticketNumber}
        </span>
      </div>
      <div className="flex flex-col justify-end items-end xs:mt-2.5 xs:items-start">
        <p style={{fontFamily:'Shabnam'}} className="  text-[#0d296e] text-lg font-bold xl-lg:text-base">
          وضعیت تیکت : 
          <span style={{fontFamily:'Shabnam'}} className="text-darkGray mr-1 font-medium xl-lg:text-base">
            {ticket?.ticketStatus?.ticketStatusTitle}
          </span>
        </p>
        <p style={{fontFamily:'Shabnam'}} className="  text-[#0d296e] text-lg font-bold mt-2 xl-lg:text-base">
          زمان ایجاد : 
          <span style={{fontFamily:'Shabnam'}} className="text-darkGray mr-1 font-medium xl-lg:text-base">
            {ticket?.registerDate}
          </span>
        </p>
      </div>
     </div>

     <div className="flex items-end my-8  md:flex-col-reverse">
        <button className="bg-[#EDF3FA] h-[47px] w-[47px] rounded-md flex justify-center items-center">
          <Attachment/>
        </button>
        <div className="w-[90%] mr-3 xs:mr-1">
          <span style={{fontFamily:'Shabnam'}} className="  text-black mb-3">
            پیام
          </span>
          <div className="flex w-full h-auto items-center justify-between border    border-midGray mt-2 rounded-md " id="payam">
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} style={{fontFamily:'Shabnam'}} className="w-[90%] min-h-[120px] overflow-y-auto resize-none" placeholder="متن پیام ..." />
            <button onClick={insertTicket} className="ml-3">
              <Send/>
            </button>
          </div>
        </div>
     </div>
     {
      data?.map((item)=>{
        return(
item?.isAdmin?
<div className="flex justify-end mb-4">
<div className="w-[80%] bg-lightBlue min-h-[200px] ml-3 xs:ml-1 rounded-lg p-5 xs:px-1 overflow-y-auto">
     <div className="w-full flex justify-end border-b border-b-black pb-4">
       <p style={{fontFamily:'Shabnam'}} className="  text-black font-bold text-sms">
         پشتیبانی فنی | {item?.registerDate+" "+item?.registerTime}
       </p>
     </div>
     <p style={{fontFamily:'Shabnam'}} className="  text-black font-normal text-base m-4">
{item?.message}       
     </p>
     </div>
  
<div className="bg-[#0889A5] h-[47px] w-[47px] rounded-md flex justify-center items-center">
     <Support/>
   </div>
  
</div>
:

<div className="flex justify-start mb-4">
     <div className="bg-[#A7B4DA] h-[47px] w-[47px] rounded-md flex justify-center items-center">
          <User/>
        </div>
     <div className="w-[80%] bg-[#F7F7F7] min-h-[200px] mr-3 xs:mr-1 rounded-lg p-5 xs:px-1 overflow-y-auto">
          <div className="w-full flex justify-start border-b border-b-black pb-4">
            <p style={{fontFamily:'Shabnam'}} className="  text-black font-bold text-sms">
              کاربر | {item?.registerDate+" "+item?.registerTime}
            </p>
          </div>
          <p style={{fontFamily:'Shabnam'}} className="  text-black font-normal text-base m-4 xs:mx-1">
          {item?.message}       

          </p>
          </div>
       
     
       
     </div>
        )
      })
     }
 

     
    </>
)
}
export default TicketDetail;