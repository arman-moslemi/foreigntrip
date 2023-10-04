import React,{useState,useEffect} from "react";
import ExpertRightMenu from "../../components/ExpertComponent/ExpertRightMenu";
import { Link } from "react-router-dom";
import {ReactComponent as Ticket} from "../../assets/icon/blue/ticket.svg"
import ExpertTicketListTable from "../../components/ExpertComponent/ExpertTicketListTable";
import Cookies from 'universal-cookie';
import { axiosReq } from "../../commons/axiosReq";
import { useNavigate } from "react-router-dom";
const ExpertTicketList= () => {
    const [showNewTicket,setShowNewTicket] = useState(false);
    const [data, setData] = useState();
    const [admins, setAdmins] = useState();
    const [admin, setAdmin] = useState();
    const [reCheck, setRecheck] = useState(false);
    const [message, setMessage] = useState();
  
    let navigate = useNavigate();
  
    useEffect(() => {
    
      auth();
    }, [reCheck]);
    const auth=async()=>{
      const cookies = new Cookies();
      var token= cookies.get('token');
      console.log(token)
      if(!token){
       navigate("/");
      }else{
   if( cookies.get('Role')=="InternationalExpert")
   {
     GetData()
  
   }
   else{
    navigate("/");
  
   }
      }
    }
    const GetData=async()=>{
        console.log(1234)
        const cookies = new Cookies();
     
     
     
       const dataUser = await axiosReq("Ticket/GetTicketExpert",{
        InternationalExpertId:cookies.get("ID")
       });
       console.log(dataUser)
     setData(dataUser.data)
     
       const dataAdmin = await axiosReq("InternationalExpert/GetInternationalAdmin");
       console.log(dataAdmin)
     setAdmins(dataAdmin)
  
       
       }
    const insertTicket=async()=>{
        console.log(1234)
        const cookies = new Cookies();
     
     
     
       const dataUser = await axiosReq("Ticket/InsertTicketExpertToAdmin",{
        InternationalExpertId:cookies.get("ID"),
        Subject:message,
        AdminId:admin
       });
       if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
setRecheck(!reCheck)
        navigate("/expert/ticketShow/"+dataUser?.data?.ticketId)

    }
    else {
        alert("اطلاعات ورودی نادرست می باشند")
    }
  
       
       }
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-20 lg:px-8  md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <ExpertRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] md:min-w-[95%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between 2xs:flex-col 2xs:items-start">
                    <div className="flex">
                    <Ticket/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                       تیکت ها و پشتیبانی
                </span>
                    </div>
                    <button onClick={() =>{setShowNewTicket(true)}} style={{fontFamily:'Shabnam'}}  className="bg-mainColor px-4 py-1.5 shadow-blueShadow text-white   text-base rounded-md 2xs:mt-4 2xs:w-[100%]">
                        + تیکت جدید
                    </button>
                </div>
                <ExpertTicketListTable data={data}/>
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
                        <input onChange={(e)=>setMessage(e.target.value)} type="text" style={{fontFamily:'Shabnam'}} className="pr-2   text-right right-6 bg-gray-50 border border-midGray text-gray-900 text-sm rounded-md my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5" placeholder="عنوان پیام خود را اینجا بنویسید..."/>
                       </div>
                       <div className="flex flex-col w-[150px] mr-3 mb-5 ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">انتخاب ادمین</span>
                    <div class=" mt-2">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            onChange={(e)=>setAdmin(e.target.value)}
                            className="   text-right  bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                                                                 <option style={{fontFamily:'Shabnam'}} value="" className=" ">انتخاب ادمین</option>

                              {
                                admins?.map((item2)=>{
                                  return(

                                    <option style={{fontFamily:'Shabnam'}} value={item2.adminId} className=" ">{item2?.adminName}</option>
                                  )
                                })
                              }

                           

                        </select>
                 
                    </div>
                </div>
                      
                       <div className="flex items-center mb-2 justify-endborder-t justify-center border-solid border-slate-200 rounded-b">
                      
                        <button
                        style={{fontFamily:'Shabnam'}}
                           className="text-mainColor   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           onClick={()=>setShowNewTicket(false)}
                         >
                          بستن
                         </button>
                    
                        <button
                        style={{fontFamily:'Shabnam'}}
                           className="text-white bg-mainColor shadow-blueShadow rounded-lg   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           onClick={()=>insertTicket()}

                         >
                          شروع ارسال پیام
                         </button>
                      
                      
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
export default ExpertTicketList;


/*responsive--done*/