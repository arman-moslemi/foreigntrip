import React,{useState} from "react";
import './components.css';
import { Link } from "react-router-dom";
import {ReactComponent as Trash} from "../assets/icon/blue/trash.svg";
import { ReactComponent as Pencil } from "../assets/icon/blue/pencil.svg";
export const truncate = (str, len) => {
  // console.log("truncate", str, str.length, len);
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};

const SupervisorList = () =>{
  const [showError,setShowError]= React.useState(false);
  const [showEditModal,setShowEditModal] = React.useState(false);
const tableRow =[
  {
    id:'1',
   num:'1',
   name:'علی اطهری',
   userName:'Athari42',
   password:'Aa@123456',
   edit:
   <button onClick={()=>setShowEditModal(true)}>
    <Pencil/>
   </button>,
   delete: 
                <button onClick={()=>setShowError(true)}>
                <Trash/>
                </button>
             
               
  },
  {
    id:'2',
    num:'1',
    name:'علی اطهری',
    userName:'Athari42',
    password:'Aa@123456',
    edit:
    <button onClick={()=>setShowEditModal(true)}>
     <Pencil/>
    </button>,
    delete: 
    <button onClick={()=>setShowError(true)}>
    <Trash/>
    </button>
              
       
  },
  {
    id:'3',
    num:'1',
    name:'علی اطهری',
    userName:'Athari42',
    password:'Aa@123456',
    edit:
    <button onClick={()=>setShowEditModal(true)}>
     <Pencil/>
    </button>,
    delete: 
    <button onClick={()=>setShowError(true)}>
    <Trash/>
    </button>
              
       
  },
  {
    id:'4',
   num:'1',
   name:'علی اطهری',
   userName:'Athari42',
   password:'Aa@123456',
   edit:
   <button onClick={()=>setShowEditModal(true)}>
    <Pencil/>
   </button>,
   delete: 
   <button onClick={()=>setShowError(true)}>
   <Trash/>
   </button>
             
      
  },
  {
    id:'5',
    num:'1',
    name:'علی اطهری',
    userName:'Athari42',
    password:'Aa@123456',
    edit:
    <button onClick={()=>setShowEditModal(true)}>
     <Pencil/>
    </button>,
    delete: 
    <button onClick={()=>setShowError(true)}>
    <Trash/>
    </button>
              
       
  }
]
  const tableBody = tableRow.map((tableRow) =>
  <tr key={tableRow.id} className="border-b border-b-borderGray">
    <td className="py-4 text-sm text-right pr-4   px-4">{tableRow.num}</td>
    <td className="py-4 text-sm text-right   px-4" style={{fontFamily:'Shabnam'}}>
      <div className="flex items-center">
        <div>
        {tableRow.name}
        </div>
   
      </div>
    </td>
    <td className="py-4 text-sm text-right px-4  " style={{fontFamily:'Shabnam'}}>{tableRow.userName}</td>
    <td className="py-4 text-sm text-center px-4  " style={{fontFamily:'Shabnam'}}>{tableRow.password}</td>
    <td className="py-4 text-sm text-center px-4  "  style={{fontFamily:'Shabnam'}}>{tableRow.edit}</td>
    <td className="py-4 text-sm text-center px-4  " style={{fontFamily:'Shabnam'}}>{tableRow.delete}</td>
    </tr> 
  )
    return(
        <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
          <table class="table-auto w-full  ">
  <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}>
      <th className="text-right pr-4   md:px-4" style={{fontFamily:'Shabnam'}}>ردیف</th>
      <th className="text-right   md:px-4" style={{fontFamily:'Shabnam'}}>نام و نام خانوادگی</th>
      <th className="text-right   md:px-4" style={{fontFamily:'Shabnam'}}>نام کاربری</th>
      <th className="text-center font-IRsan md:px-4s" style={{fontFamily:'Shabnam'}}>رمز عبور</th>
      <th className="text-center   md:px-4" style={{fontFamily:'Shabnam'}}>ویرایش</th>
      <th className="text-center   md:px-4" style={{fontFamily:'Shabnam'}} >حذف</th>
    </tr>
  </thead>
  <tbody>
   {tableBody}
 
  </tbody>
</table>
{
  showError ?
  <>
  <div
  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
  <div className="relative w-auto my-5 mx-auto max-w-3xl">
   
    <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
 
      <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
        <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-black align-middle text-center">
         هشدار!
        </span>
     
      </div>
      
      <div className="relative p-6 flex-auto">
        <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
     آیا از حذف کاربر ناظر انتخاب شده مطمئن هستید؟
        </p>
      </div>
     
      <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
        <button
        style={{fontFamily:'Shabnam'}}
          className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowError(false)}
        >
          خیر
        </button>
        <button
        style={{fontFamily:'Shabnam'}}
          className="text-white   float-left bg-red shadow-redShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowError(false)}
        >
         بله
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
{
  showEditModal ?
  <>
  <div
  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
  <div className="relative w-2xl my-5 mx-auto max-w-2xl">
   
    <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
 
      <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
        <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-black align-middle text-center">
        ویرایش کاربر
        </span>
     
      </div>
      
      <div className="flex flex-wrap p-6">
                <div className="flex flex-col w-[39%] ml-[2%]">
                  <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-sm">
                    نام
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="علی"/>
                </div>
                <div className="flex flex-col w-[59%]">
                  <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-sm">
                    نام خانوادگی
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="اطهری"/>
                </div>
               </div>
               <div className="flex flex-col w-[100%] px-6 mb-6">
                  <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-sm">
                    نام کاربری
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="۰۰۲۰۷۶۸۹۷۶"/>
                </div>
                <div className="flex flex-col w-[100%] px-6 mb-6">
                  <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-sm">
                 رمز عبور
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="۰۹۱۲۸۷۶۸۷۶۵"/>
                </div>
     
      <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
        <button
        style={{fontFamily:'Shabnam'}}
          className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowEditModal(false)}
        >
          بستن
        </button>
        <button
        style={{fontFamily:'Shabnam'}}
          className="text-white   float-left bg-mainColor shadow-blueShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowEditModal(false)}
        >
         ویرایش
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
        </div>
    )
}
export default SupervisorList;