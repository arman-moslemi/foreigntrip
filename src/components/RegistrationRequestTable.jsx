


import React,{useState} from "react";
import {ReactComponent as Search} from "../assets/icon/white/search.svg"
import './components.css';
import { Link } from "react-router-dom";
import {ReactComponent as Eye} from "../assets/icon/black/eye.svg"

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

const RegistrationRequestTable = () =>{
  const[showError,setShowError]= React.useState(false);
  const[showEdit,setShowEdit] = React.useState(false);
 
    const tableRow =[
        {
          id:'1',
         num:'1',
         name:'علی',
         lastName:'اطهری',
         code:'۰۰۳۰۶۷۸۷۶۵',
         phoneNumber:'۰۹۱۲۹۸۷۶۷۶۵',
         
         date:'۰۲/۰۳/۲۸',
         view:<Link style={{fontFamily:'Shabnam'}}  to={''}
         >
          <Eye/>
         </Link>   
                   
                     
        },  {
          id:'1',
         num:'1',
         name:'علی',
         lastName:'اطهری',
         code:'۰۰۳۰۶۷۸۷۶۵',
         phoneNumber:'۰۹۱۲۹۸۷۶۷۶۵',
         date:'۰۲/۰۳/۲۸',
         view:<Link style={{fontFamily:'Shabnam'}}  to={''}
         >
          <Eye/>
         </Link>   
              
                   
                     
        },
        {
          id:'1',
         num:'1',
         name:'علی',
         lastName:'اطهری',
         code:'۰۰۳۰۶۷۸۷۶۵',
         phoneNumber:'۰۹۱۲۹۸۷۶۷۶۵',
         date:'۰۲/۰۳/۲۸',
         view:<Link style={{fontFamily:'Shabnam'}}  to={''}
         >
          <Eye/>
         </Link>   
                   
                     
        }
      
      ]
    const tableBody = tableRow.map((tableRow) =>
    <tr style={{fontFamily:'Shabnam'}}  key={tableRow.id} className="border-b border-b-borderGray">
      <td style={{fontFamily:'Shabnam'}}  className="py-4 text-sm text-right pr-4   px-4">{tableRow.num}</td>
      <td style={{fontFamily:'Shabnam'}}  className="py-4 text-sm text-right   px-4">
        
      
          {tableRow.name}
        
        
       
      </td>
      <td style={{fontFamily:'Shabnam'}}  className="py-4 text-sm text-right px-4  ">{tableRow.lastName}</td>
      <td style={{fontFamily:'Shabnam'}}  className="py-4 text-sm text-center px-4  " >{tableRow.code}</td>
      <td style={{fontFamily:'Shabnam'}}  className="py-4 text-sm text-center px-4  "  >{tableRow.phoneNumber}</td>
      <td style={{fontFamily:'Shabnam'}}  className="py-4 text-sm text-center px-4  ">{tableRow.date}</td>
      <td style={{fontFamily:'Shabnam'}}  className="py-4 text-sm text-center px-4  ">{tableRow.view}</td>
      </tr> 
    )
    return(
        <>
     
        <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
          <table class="table-auto w-full  ">
  <thead style={{fontFamily:'Shabnam'}} ead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}> 
    <tr style={{fontFamily:'Shabnam'}}  className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}>
      <th style={{fontFamily:'Shabnam'}}  className="text-right pr-4   md:px-4">ردیف</th>
      <th style={{fontFamily:'Shabnam'}}  className="text-right   md:px-4">نام کاربر</th>
      <th style={{fontFamily:'Shabnam'}}  className="text-right   md:px-4">نام خانوادگی کاربر</th>
      <th style={{fontFamily:'Shabnam'}}  className="text-center font-IRsan md:px-4">کد ملی</th>
      <th style={{fontFamily:'Shabnam'}}  className="text-center font-IRsan md:px-4">شماره تلفن همراه</th>
      <th style={{fontFamily:'Shabnam'}}  className="text-center   md:px-4">تاریخ ثبت نام</th>
      <th style={{fontFamily:'Shabnam'}}  className="text-center   md:px-4" >مشاهده</th>
      
    </tr>
  </thead>
  <tbody>
   {tableBody}
 
  </tbody>
</table>

        </div>
        {showError ?
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
               آیا از حذف مورد انتخاب شده مطمئن هستید؟
                  </p>
                </div>
               
                <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
                  <button style={{fontFamily:'Shabnam'}} 
                    className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowError(false)}
                  >
                    خیر
                  </button>
                  <button style={{fontFamily:'Shabnam'}} 
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
           :null
        }   
          {showEdit ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[30%] my-5 mx-auto max-w-3xl">
             
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
                    کد ملی
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="۰۰۲۰۷۶۸۹۷۶"/>
                </div>
                <div className="flex flex-col w-[100%] px-6 mb-6">
                  <span style={{fontFamily:'Shabnam'}} className="  text-[#0D296E] font-bold text-sm">
                    شماره تلفن همراه
                  </span>
                  <input className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="۰۹۱۲۸۷۶۸۷۶۵"/>
                </div>
                <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
                  <button style={{fontFamily:'Shabnam'}} 
                    className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEdit(false)}
                  >
                    بستن
                  </button>
                  <button style={{fontFamily:'Shabnam'}} 
                    className="text-white   float-left bg-mainColor shadow-blueShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEdit(false)}
                  >
                   ویرایش
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
           </>
           :null
        }   
        </>
    )


}

export default RegistrationRequestTable;