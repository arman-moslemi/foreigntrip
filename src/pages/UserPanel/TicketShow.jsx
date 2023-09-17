import React,{useState,useEffect} from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import {ReactComponent as Ticket} from "../../assets/icon/blue/ticket.svg"
import TicketDetail from "../../components/TicketDetail";
import Cookies from 'universal-cookie';
import { axiosReq } from "../../commons/axiosReq";
import { useNavigate } from "react-router-dom";
const TicketShow = () => {
    const [data, setData] = useState();
    const [reCheck, setRecheck] = useState(false);
  
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
   if( cookies.get('Role')=="Agent")
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
     
     
     
       const dataUser = await axiosReq("Ticket/GetSubTickets",{
        TicketId:cookies.get("ID")
       });
       console.log(dataUser)
     setData(dataUser.data)
  
       }
    return(
        <div className="w-full h-full bg-lightGray py-10 px-20 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[250px] xl:p-5 xs:px-2 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <Ticket/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                      مشاهده پیام
                </span>
                    </div>
                   
                </div>
                <TicketDetail data={data}/>
                </div>
            </div>
         
        </div>
    )
}
export default TicketShow;


/*responsive--done*/