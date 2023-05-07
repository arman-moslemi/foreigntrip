import React from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import CheckImg from "../../assets/img/check.png";
import {ReactComponent as Add} from "../../assets/icon/blue/add.svg"
import { Link } from "react-router-dom";


const RequestRegistered = () => {
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-32 " style={{direction:'rtl'}}>
            <div className="flex">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%]">
                <div className="flex items-center">
                    <Add/>
                <span className="font-IRsans text-mainColor mr-3 font-bold">
                        ثبت درخواست جدید
                </span>
                </div>
                    <img src={CheckImg} alt="check" className="w-[120px] mx-auto block mt-10"/>
                    <p className="text-black font-IRsans font-bold text-sm text-center w-[400px] mx-auto mt-10 mb-4">
                    درخواست شما با موفقیت ثبت شد.
                    پس از بررسی اطلاعات توسط اداره امور بین الملل ،
                    نتیجه ی آن در قسمت مشاهده ی تاریخچه درخواست ها قابل رویت است.
                    </p>
                    <p className="text-mainColor font-IRsans font-bold text-sm text-center w-[400px] mx-auto  mb-4">
                    کد رهگیری  : 1256457896
                    </p>
                    <Link to={`/requestHistory`}>
                        <button className="mx-auto block w-[240px] h-10 bg-mainColor shadow-blueShadow mt-7 font-IRsans text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                         مشاهده تاریخچه درخواست ها
                        </button>
                    </Link>
                  
                </div>
            </div>
        </div>
    )
}
export default RequestRegistered;