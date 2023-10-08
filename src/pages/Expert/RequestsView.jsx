import React, { useState, useEffect } from "react";
import ExpertRightMenu from "../../components/ExpertComponent/ExpertRightMenu";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import RequestViewStep1 from "../../components/RequestViewStep1";
import RequestViewStep2 from "../../components/RequestViewStep2";
import RequestViewStep3 from "../../components/RequestViewStep3";
import RequestViewStep4 from "../../components/RequestViewStep4";
import ExpertRequestViewStep4 from "../../components/ExpertComponent/ExpertRequestViewStep4";
import Cookies from 'universal-cookie';
import { axiosReq } from "../../commons/axiosReq";
import { useNavigate,useParams } from "react-router-dom";

const ExpertRequestsView = () =>{
    const [data, setData] = useState();
    const [emp, setEmployee] = useState();
    const [reCheck, setRecheck] = useState(false);
  
    let navigate = useNavigate();
    const id = useParams().id;

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
      
      
      
          const dataUser = await axiosReq("Request/GetRequest", {
            RequestId: id
          });
          console.log(dataUser)
          setData(dataUser.data)
        
          const dataEmployee = await axiosReq("Request/GetRequestEmployee", {
            RequestId: id
        });
        console.log(dataEmployee)
        setEmployee(dataEmployee?.data)
      
      
        }
    return(
        <div className="w-full h-full  bg-lightGray py-10 px-10 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <ExpertRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] md:min-w-[95%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
            <div className="flex items-center justify-between sm:flex-wrap">
                    <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                  مشاهده درخواست
                </span>
                    </div>
                  
                </div>
            <div className="mt-12">
                <span className="text-mainColor font-bold" style={{fontFamily:'Shabnam'}}>
                    گام 1 -اطلاعات اولیه
                </span>
                </div>    
          <RequestViewStep1 data={data}/>
          <div className="mt-12">
                <span className="text-mainColor font-bold" style={{fontFamily:'Shabnam'}}>
                  گام 2 -فهرست اسامی و مشخصات ماموران اعزامی
                </span>
                </div>  
                <RequestViewStep2 data={emp}/>
                <div className="mt-12">
                <span className="text-mainColor font-bold" style={{fontFamily:'Shabnam'}}>
                    گام 3 - اطلاعات تکمیلی
                </span>
                </div> 
                <RequestViewStep3 data={data}/>
                <div className="mt-12">
                <span className="text-mainColor font-bold" style={{fontFamily:'Shabnam'}}>
                  گام 4 -توضیحات سفر
                </span>
                </div> 
                <RequestViewStep4 data={data} id={id}/>
            </div>

        </div>
    </div>
    )
}
export default ExpertRequestsView;

/*responsive--done*/