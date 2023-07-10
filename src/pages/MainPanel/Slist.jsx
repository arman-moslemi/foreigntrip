import React from "react";
import MainRightMenu from "../../components/MainRightMenu";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import SupervisorList from "../../components/SupervisorList";
const Slist = () =>{
    return(
        <div className="w-full h-screen  bg-lightGray py-10 px-32 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <MainRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
         <div className="flex justify-between items-center">
         <div className="flex items-center">
                    <Doc/>
                <span className="font-IRsans text-mainColor mr-3 font-bold">
                        کاربر ناظر
                </span>
                </div>
                <button className="mr-5 bg-mainColor hover:bg-white hover:text-mainColor hover:border-2 hover:border-mainColor w-[100px] md:w-auto md:px-2 rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-blueShadow">
                     + ثبت نام
                    </button>
         </div>
                <SupervisorList/>
            </div>
        </div>
    </div>
    )
}
export default Slist;

/*responsive--done*/