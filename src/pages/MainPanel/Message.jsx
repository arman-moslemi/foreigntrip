import React,{useState} from "react";
import MainRightMenu from "../../components/MainRightMenu";
import { Link } from "react-router-dom";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import MessageForm from "../../components/MessageForm";
const Message = () => {
    const [showNewTicket,setShowNewTicket] = React.useState(false);
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <MainRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between sm:flex-wrap">
                    <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mr-3 font-bold">
                   ارسال پیام جدید
                </span>
                    </div>
             
                </div>
                <MessageForm/>
                </div>
            </div>
            {
                showNewTicket ?
                <>
                  <div
                   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                 >
                   <div className="relative w-[30%] my-5 mx-auto max-w-5xl md:w-[90%]">
                    
                     <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  
                       <div className="flex items-centers justify-center p-4 border-b border-solid border-b-[#EDF3FA] rounded-t">
                      
                         <span style={{fontFamily:'Shabnam'}} className="mr-3 text-base font-bold font-IRsans text-black text-center">
                         عنوان پیام خود را بنویسید
                         </span>
                      
                       </div>
                       
                       <div className="flex flex-col p-3">

                        <span style={{fontFamily:'Shabnam'}} className="font-IRSans text-black font-Bold text-base">
                            عنوان پیام شما
                        </span>
                        <input type="text" style={{fontFamily:'Shabnam'}} className="pr-2 font-IRsans text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5" placeholder="عنوان پیام خود را اینجا بنویسید..."/>
                       </div>
                      
                       <div className="flex items-center mb-2 justify-endborder-t justify-center border-solid border-slate-200 rounded-b">
                       <Link style={{fontFamily:'Shabnam'}}  to={'/'}>
                        <button
                           className="text-mainColor font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           
                         >
                          بستن
                         </button>
                        </Link>
                        <Link to={'/mainAdmin/ticketShowMain'}>
                        <button
                           className="text-white bg-mainColor shadow-blueShadow rounded-lg font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                          
                         >
                          شروع ارسال پیام
                         </button>
                        </Link>
                      
                      
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                 
                </>
                :null
            }
        </div>
    )
}
export default Message;


/*responsive--done*/