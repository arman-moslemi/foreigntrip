import React from "react";
import {ReactComponent as Profile} from "../../assets/icon/blue/profile.svg"
import InternationalRightMenu from "../../components/InternationalComponent/InternationalRightMenu";
import AddAgentForm from "../../components/AddAgentForm";
const InternationalAddAgent = () =>{

    return(
        <div className="w-full h-full bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <InternationalRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
           
            <div className="flex items-center">
                    <Profile/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                  تعریف مامور اعزامی
                </span>
                
                </div>
       
            

                <AddAgentForm/>
            </div>
        </div>
      
        
    </div>
    )
}

export default InternationalAddAgent;