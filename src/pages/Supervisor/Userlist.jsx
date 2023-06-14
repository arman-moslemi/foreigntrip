import React from "react";
import UserlistTable from "../../components/UserlistTable";
import SuperVisorRightMenu from "../../components/SuperVisorRightMenu";
import {ReactComponent as User} from "../../assets/icon/blue/profile.svg";
const Userlist = () =>{

    return(
        <>
         <div className="w-full h-full bg-lightGray py-10 px-32 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>

<div className="flex md:block">
<SuperVisorRightMenu/>
<div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
<div className="flex items-center justify-between">
                    <div className="flex">
                    <User/>
                <span className="font-IRsans text-mainColor mr-3 font-bold">
                       لیست کاربران سامانه
                </span>
                    </div>
                   
                </div>
<UserlistTable/>
</div>
</div>
</div>
        
        </>
    )
}

export default Userlist;