import React from "react";
import ExpertRightMenu from "../../components/ExpertComponent/ExpertRightMenu";
import { Link } from "react-router-dom";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import ExpertMessageList from "../../components/ExpertComponent/ExpertMessageList";
const ExpertSendMessageList = () => {

    return(
        <div className="w-full h-screen bg-lightGray py-10 px-20 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <ExpertRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] md:min-w-[95%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center justify-between 2xs:flex-col 2xs:items-start">
                    <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                      ارسال پیام
                </span>
                    </div>
                   <Link className=" 2xs:w-[100%]" to={'/expert/message'}>
                   <button  style={{fontFamily:'Shabnam'}}  className="bg-mainColor px-4 py-1.5 shadow-blueShadow text-white   text-base rounded-md 2xs:mt-5 2xs:w-[100%] ">
                        + پیام جدید
                    </button>
                   </Link>
                </div>
                <ExpertMessageList/>
                </div>
            </div>
         
        </div>
    )
}
export default ExpertSendMessageList;


/*responsive--done*/