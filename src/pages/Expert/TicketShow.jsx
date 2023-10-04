import React, { useState, useEffect } from "react";
import ExpertRightMenu from "../../components/ExpertComponent/ExpertRightMenu";
import Cookies from 'universal-cookie';
import { axiosReq } from "../../commons/axiosReq";
import { useNavigate } from "react-router-dom";
import {ReactComponent as Ticket} from "../../assets/icon/blue/ticket.svg"
import TicketDetailMain from "../../components/TicketDetailMain";
const ExpertTicketShow = () => {
    const [data, setData] = useState();
    const [reCheck, setRecheck] = useState(false);
    const [ticket, setTicket] = useState()
  
    let navigate = useNavigate();
  
    useEffect(() => {
  
      auth();
    }, [reCheck]);
    const auth = async () => {
      const cookies = new Cookies();
      var token = cookies.get('token');
      console.log(token)
      if (!token) {
        navigate("/");
      } else {
        if (cookies.get('Role') == "InternationalExpert") {
          GetData()
  
        }
        else {
          navigate("/");
  
        }
      }
    }
    const GetData = async () => {
      console.log(1234)
      const cookies = new Cookies();
  
  
  
      const dataUser = await axiosReq("Ticket/GetSubTickets", {
        TicketId: cookies.get("ID")
      });
      console.log(dataUser)
      setData(dataUser.data)
      const tickets = await axiosReq("Ticket/GetTicket", {
        TicketId: cookies.get("ID")
      });
      console.log(tickets)
      setTicket(tickets?.data)
  
  
    }
    return(
        <div className="w-full h-full bg-lightGray py-10 px-20 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <ExpertRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] md:min-w-[95%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <Ticket />
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                      مشاهده پیام
                </span>
                    </div>
                   
                </div>
                <TicketDetailMain  data={data} ticket={ticket}
           setRecheck={setRecheck}reCheck={reCheck}/>
                </div>
            </div>
         
        </div>
    )
}
export default ExpertTicketShow;


/*responsive--done*/