import React,{useState} from "react";
import MainRightMenu from "../../components/MainRightMenu";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import RegistrationRequestTable from "../../components/RegistrationRequestTable";
const RegistrationRequestList = () =>{
    const [addUser,setAddUser] = React.useState(false);
    const [addModal,setAddModal] = React.useState(false);
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-32 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <MainRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
         
            <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mr-3 font-bold">
                    درخواست های ثبت نام
                </span>
                
                </div>
              
     

                <RegistrationRequestTable/>
            </div>
        </div>
        {addUser ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[30%] my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold font-IRsans text-black align-middle text-center">
                  افزودن کاربر
                  </span>
               
                </div>
                
               
               <div className="flex flex-wrap p-6">
                <div className="flex flex-col w-[39%] ml-[2%]">
                  <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-[#0D296E] font-bold text-sm">
                    نام
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1 font-IRsans mt-2" placeholder="نام"/>
                </div>
                <div className="flex flex-col w-[59%]">
                  <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-[#0D296E] font-bold text-sm">
                    نام خانوادگی
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1 font-IRsans mt-2" placeholder="نام خانوادگی"/>
                </div>
               </div>
               <div className="flex flex-col w-[100%] px-6 mb-6">
                  <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-[#0D296E] font-bold text-sm">
                    کد ملی
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1 font-IRsans mt-2" placeholder="کد ملی"/>
                </div>
                <div className="flex flex-col w-[100%] px-6 mb-6">
                  <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-[#0D296E] font-bold text-sm">
                    شماره تلفن همراه
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1 font-IRsans mt-2" placeholder="شماره تلفن همراه"/>
                </div>
                <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setAddUser(false)}
                  >
                    بستن
                  </button>
                  <button
                    className="text-white font-IRsans float-left bg-mainColor shadow-blueShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setAddUser(false)}
                  >
                   افزودن
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
           </>
           :null
        }   
        
    </div>
    )
}
export default RegistrationRequestList;

/*responsive--done*/