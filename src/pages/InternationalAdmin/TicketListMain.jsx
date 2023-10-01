import React from "react";
import InternationalRightMenu from "../../components/InternationalComponent/InternationalRightMenu";
import { Link } from "react-router-dom";
import {ReactComponent as Ticket} from "../../assets/icon/blue/ticket.svg"
import InternationalTicketListTable from "../../components/InternationalComponent/InternationalTicketListTable";
const InternationalTicketList= () => {
    const [showNewTicket,setShowNewTicket] = React.useState(false);
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-20 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <InternationalRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] md:min-w-[95%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between 2xs:flex-col 2xs:items-start">
                    <div className="flex">
                    <Ticket/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                       تیکت ها و پشتیبانی
                </span>
                    </div>
                    <button onClick={() =>{setShowNewTicket(true)}} style={{fontFamily:'Shabnam'}}  className="bg-mainColor px-4 py-1.5 shadow-blueShadow text-white   text-base rounded-md 2xs:mt-4 2xs:w-[100%] ">
                        + تیکت جدید
                    </button>
                </div>
                <InternationalTicketListTable/>
                </div>
            </div>
            {
                showNewTicket ?
                <>
                  <div
                   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                 >
                   <div className="relative w-[30%] xl:w-[50%] my-5 mx-auto max-w-5xl md:w-[90%] 2xs:w-[100%]">
                    
                     <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  
                       <div className="flex items-centers justify-center p-4 border-b border-solid border-b-[#EDF3FA] rounded-t">
                      
                         <span style={{fontFamily:'Shabnam'}} className="mr-3 text-base font-bold   text-black text-center">
                         عنوان پیام خود را بنویسید
                         </span>
                      
                       </div>
                       
                       <div className="flex flex-col p-3">

                        <span style={{fontFamily:'Shabnam'}} className="  text-black font-Bold text-base">
                            عنوان پیام شما
                        </span>
                        <input type="text" style={{fontFamily:'Shabnam'}} className="pr-2   text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5" placeholder="عنوان پیام خود را اینجا بنویسید..."/>
                       </div>
                      
                       <div className="flex items-center mb-2 justify-endborder-t justify-center border-solid border-slate-200 rounded-b">
                      
                        <button
                        style={{fontFamily:'Shabnam'}}
                           className="text-mainColor   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           
                         >
                          بستن
                         </button>
                       
                        <Link to={'/internationalAdmin/ticketShow'}
                       style={{fontFamily:'Shabnam'}}
                           className="text-white bg-mainColor shadow-blueShadow rounded-lg   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          
                          >
                        
                          شروع ارسال پیام
                       
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
export default InternationalTicketList;


/*responsive--done*/