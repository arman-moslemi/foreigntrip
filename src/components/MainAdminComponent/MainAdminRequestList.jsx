


import React,{useState} from "react";
import {ReactComponent as Search} from "../../assets/icon/white/search.svg"
import { ReactComponent as Eye } from "../../assets/icon/black/eye.svg";
import { ReactComponent as Ban } from "../../assets/icon/black/ban.svg";
import './components.css';
import { Link } from "react-router-dom";
import {ReactComponent as Trash} from "../../assets/icon/blue/trash.svg";
import { ReactComponent as Pencil } from "../../assets/icon/blue/pencil.svg";
import Img1 from "../../assets/img/user.png";
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

const MainAdminRequestList = () =>{
  const[showError,setShowError]= React.useState(false);
  const[showLog,setShowLog] = React.useState(false);
  const [showBan,setShowBan] =React.useState(false);
    const tableRow =[
        {
          id:'1',
       
   
         name:<div className="flex items-center">
          <div className="relative ml-2">
            <img src={Img1} alt="userImg" className="rounded-full w-[40px] h-[40px]"/>
            <div className="absolute top-0 -left-2 bg-[#4CFF0D] w-[15px] h-[15px] rounded-full">
              
            </div>
          </div>
          <span className="text-sm text-[#000] mr-2 font-semibold" style={{fontFamily:'Shabnam'}}>
            علی عطایی
          </span>
         </div>,
         
         subject:truncate("اغو قرار داد 12345 وزارت صنعت معدن تجارت در راستای مقاومت اقتصادی",30),
         acceptedBy:'علی اسد زاده',
         date:'02/05/28',
         tripType:<span className="text-red" style={{fontFamily:'Shabnam'}}>
        فوری
         </span>,
         status:<span className="text-red" style={{fontFamily:'Shabnam'}}>
          درخواست جدید
         </span>,
         action:
         <div className="flex justify-center">
          <Link to={'/mainAdmin/requestView'} className="mx-2" >
            <Eye/>
          </Link>
       
         </div>        
                   
                     
        }, 
        {
          id:'1',
       

         name:<div className="flex items-center">
          <div className="relative ml-2">
            <img src={Img1} alt="userImg" className="rounded-full w-[40px] h-[40px]"/>
            <div className="absolute top-0 -left-2 bg-tripDone w-[15px] h-[15px] rounded-full">
              
            </div>
          </div>
          <span className="text-sm text-[#000] mr-2 font-semibold" style={{fontFamily:'Shabnam'}}>
            علی عطایی
          </span>
         </div>,
         
         subject:truncate("اغو قرار داد 12345 وزارت صنعت معدن تجارت در راستای مقاومت اقتصادی",30),
         acceptedBy:'علی اسد زاده',
         date:'02/05/28',
         tripType:<span className="text-red" style={{fontFamily:'Shabnam'}}>
         فوری
         </span>,
         status:<span className="text-tripDone" style={{fontFamily:'Shabnam'}}>
         منتظر آپلود امضا
         </span>,
         action:
         <div className="flex justify-center">
          <Link to={'/mainAdmin/requestView'} className="mx-2" >
            <Eye/>
          </Link>
       
         </div>        
                   
                     
        }, 
        {
          id:'1',
       
     
         name:<div className="flex items-center">
          <div className="relative ml-2">
            <img src={Img1} alt="userImg" className="rounded-full w-[40px] h-[40px]"/>
            <div className="absolute top-0 -left-2 bg-[#4CFF0D] w-[15px] h-[15px] rounded-full">
              
            </div>
          </div>
          <span className="text-sm text-[#000] mr-2 font-semibold" style={{fontFamily:'Shabnam'}}>
            علی عطایی
          </span>
         </div>,
         
         subject:truncate("اغو قرار داد 12345 وزارت صنعت معدن تجارت در راستای مقاومت اقتصادی",30),
         acceptedBy:'علی اسد زاده',
         date:'02/05/28',
         tripType:<span className="text-black" style={{fontFamily:'Shabnam'}}>
         عادی
         </span>,
         status:<span className="text-green" style={{fontFamily:'Shabnam'}}>
         تایید شده
         </span>,
         action:
         <div className="flex justify-center">
          <Link to={'/mainAdmin/requestView'} className="mx-2" >
            <Eye/>
          </Link>
       
         </div>        
                   
                     
        }, 
      
      ]
    const tableBody = tableRow.map((tableRow) =>
    <tr key={tableRow.id} className="border-b border-b-borderGray">
    
    
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-right  px-4">
        
      
          {tableRow.name} 
        
        
       
      </td>
    
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">{tableRow.subject}</td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">{tableRow.acceptedBy}</td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">{tableRow.date}</td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">{tableRow.tripType}</td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">{tableRow.status}</td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">{tableRow.action}</td>
      </tr> 
    )
    return(
        <>
     
        <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
          <table class="table-auto w-full font-IRsans">
  <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}>

      <th style={{fontFamily:'Shabnam'}} className="text-right font-IRsans md:px-4 pr-4 text-sm">نام مامور</th>
     <th style={{fontFamily:'Shabnam'}} className="text-center font-IRsan md:px-4 text-sm">موضوع سفر</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center font-IRsan md:px-4 text-sm">تایید شده توسط</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center font-IRsans md:px-4 text-sm">تاریخ سفر</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center font-IRsans md:px-4 text-sm" >نوع سفر</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center font-IRsans md:px-4 text-sm" >وضعیت</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center font-IRsans md:px-4 text-sm" >مشاهده</th>
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
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold font-IRsans text-black align-middle text-center">
                   هشدار!
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm font-IRsans leading-relaxed">
               آیا از حذف مورد انتخاب شده مطمئن هستید؟
                  </p>
                </div>
               
                <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowError(false)}
                  >
                    خیر
                  </button>
                  <button
                    className="text-white font-IRsans float-left bg-red shadow-redShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
          {showBan ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold font-IRsans text-black align-middle text-center">
                   هشدار!
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm font-IRsans leading-relaxed">
               آیا از مسدود سازی کاربر انتخاب شده مطمئن هستید؟
                  </p>
                </div>
               
                <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowBan(false)}
                  >
                    خیر
                  </button>
                  <button
                    className="text-white font-IRsans float-left bg-red shadow-redShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowBan(false)}
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
          {showLog ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[30%] md:w-[90%] my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold font-IRsans text-black align-middle text-center">
                مشاهده لاگ
                  </span>
               
                </div>
                
               
                <div className="flex flex-wrap p-6">
                  <p className="text-darkBlue" style={{fontFamily:'Shabnam'}}>
                    اخرین ورود به سامانه :دوشنبه ۱۲ تیر
                  </p>
                  <p className="text-darkBlue" style={{fontFamily:'Shabnam'}}>
                    نمایش اطلاعات لاگ سرور اینجا نمایش داده می شود.
                  </p>
                </div>
               
                <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
                
                  <button
                    className="text-white font-IRsans float-left bg-mainColor shadow-blueShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowLog(false)}
                  >
                   بستن
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

export default MainAdminRequestList;