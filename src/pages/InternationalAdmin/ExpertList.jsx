import React,{useState} from "react";
import InternationalRightMenu from "../../components/InternationalComponent/InternationalRightMenu";
import {ReactComponent as Doc} from "../../assets/icon/blue/doc.svg"
import {ReactComponent as Search} from "../../assets/icon/white/search.svg"
import {ReactComponent as Download} from "../../assets/icon/white/download.svg"
import {ReactComponent as Add} from "../../assets/icon/white/add.svg"
import ExpertTable from "../../components/ExpertComponent/ExpertTable";
import { Link } from "react-router-dom";
const ExpertList = () =>{
    const[showAdd,
            setShowAdd]=useState(false);
    return(
        <div className="w-full h-full bg-lightGray py-10 px-10 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <InternationalRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
           
         <div className="flex justify-between">
         <div className="flex items-center">
                    <Doc/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                    لیست کارشناسان
                </span>
                
                </div>
       
                <button onClick={()=>setShowAdd(true)} className="bg-mainColor shadow-blueShadow py-2 px-4 text-white mr-2 rounded-md" style={{fontFamily:'Shabnam'}} >
                    + ثبت نام
                </button>
         </div>
         {
  showAdd ?
  <>
  <div
  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
  <div className="relative w-2xl my-5 mx-auto max-w-2xl">
   
    <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
 
      <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
        <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-black align-middle text-center">
        افزودن کارشناس
        </span>
     
      </div>
      
      <div className="flex flex-wrap p-6">
                <div className="flex flex-col w-[39%] ml-[2%]">
                  <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-sm">
                    نام
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="نام"/>
                </div>
                <div className="flex flex-col w-[59%]">
                  <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-sm">
                    نام خانوادگی
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="نام خانوادگی"/>
                </div>
               </div>
               <div className="flex flex-col w-[100%] px-6 mb-6">
                  <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-sm">
                    نام کاربری
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="نام کاربری"/>
                </div>
                <div className="flex flex-col w-[100%] px-6 mb-6">
                  <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-sm">
                 رمز عبور
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="رمز عبور"/>
                </div>
     
      <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
        <button
        style={{fontFamily:'Shabnam'}}
          className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowAdd(false)}
        >
          بستن
        </button>
        <button
        style={{fontFamily:'Shabnam'}}
          className="text-white   float-left bg-mainColor shadow-blueShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowAdd(false)}
        >
         افزودن
        </button>
      
      </div>
    </div>
  </div>
</div>
<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

 </>
 : 
 null
}
                <ExpertTable/>
            </div>
        </div>
      
        
    </div>
    )
}
export default ExpertList;

/*responsive--done*/