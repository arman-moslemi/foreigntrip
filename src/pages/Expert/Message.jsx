import React from "react";
import ExpertRightMenu from "../../components/ExpertComponent/ExpertRightMenu";

import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import ExpertMessageForm from "../../components/ExpertComponent/ExpertMessageForm";
const ExpertMessage = () => {

    return(
        <div className="w-full h-full bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <ExpertRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between sm:flex-wrap">
                    <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                   ارسال پیام جدید
                </span>
                    </div>
             
                </div>
                <ExpertMessageForm/>
                </div>
            </div>
 
        </div>
    )
}
export default ExpertMessage;


/*responsive--done*/