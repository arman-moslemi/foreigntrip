import React,{useState,useEffect} from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import Cookies from 'universal-cookie';
import {axiosReq} from "../../commons/axiosReq";
import { useNavigate } from "react-router-dom";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import UserHistoryRequest from "../../components/UserHistoryRequest";
const RequestHistory = () => {
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
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
     
     
     
       const dataUser = await axiosReq("Agents/GetRequestsAgent");
       console.log(dataUser)
     setData(dataUser)
  
       
       }
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-screen" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                        تاریخچه درخواست ها
                </span>
                </div>
                <UserHistoryRequest data={data}/>
                </div>
            </div>
        </div>
    )
}
export default RequestHistory;


/*responsive--done --done*/