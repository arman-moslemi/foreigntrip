import React from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import CheckImg from "../../assets/img/check.png";
import {ReactComponent as Add} from "../../assets/icon/blue/add.svg"
import { Link } from "react-router-dom";


const RequestRegistered = () => {
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <div className="flex items-center">
                    <Add/>
                <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mr-3 font-bold">
                        ثبت درخواست جدید
                </span>
                </div>
                    <img src={CheckImg} alt="check" className="w-[120px] mx-auto block mt-10"/>
                    <p style={{fontFamily:'Shabnam'}} className="text-black font-IRsans font-bold text-sm text-center w-[400px] mx-auto mt-10 mb-4 xs:w-[90%] xs:mx-auto">
                    درخواست شما با موفقیت ثبت شد.
                    پس از بررسی اطلاعات توسط اداره امور بین الملل ،
                    نتیجه ی آن در قسمت مشاهده ی تاریخچه درخواست ها قابل رویت است.
                    </p>
                    <p style={{fontFamily:'Shabnam'}} className="text-mainColor font-IRsans font-bold text-sm text-center w-[400px] mx-auto  mb-4 xs:w-[90%] xs:mx-auto">
                    کد رهگیری  : 1256457896
                    </p>
                    <Link style={{fontFamily:'Shabnam'}}  to={`/requestHistory`}>
                        <button className="mx-auto block w-[240px] h-10 xs:w-[80%] xs:mx-auto xs:text-xs bg-mainColor shadow-blueShadow mt-7 font-IRsans text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                         مشاهده تاریخچه درخواست ها
                        </button>
                    </Link>
                  
                </div>
            </div>
        </div>
    )
}
export default RequestRegistered;

/*responsive--done */