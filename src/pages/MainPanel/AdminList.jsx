import React from "react";
import MainRightMenu from "../../components/MainAdminComponent/MainRightMenu";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import AdminListTable from "../../components/AdminListTable";
const AdminList = () =>{
    return(
        <div className="w-full h-screen  bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <MainRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
         <div className="flex justify-between items-center">
         <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mr-3 font-bold">
                      مدیران سامانه
                </span>
                </div>
            
         </div>
                <AdminListTable/>
            </div>
        </div>
    </div>
    )
}
export default AdminList;

/*responsive--done*/