import React,{useState} from "react";
import './components.css';
import { Link } from "react-router-dom";
import {ReactComponent as Eye} from "../assets/icon/black/eye.svg";
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
const MainHistoryRequest = () =>{
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
const tableRow =[
  {
    id:'1',
   num:'1',
   name:'علی اطهری',
   subject:truncate("انجام لغو قرارداد 142 وزارت خانه",30),
   location:'اداره بازرگانی شماره ۲',
   date:'02/02/12',
   status:<span className="text-sm text-red font-bold font-IRsans">درخواست جدید</span >,
   function: 
                <Link to={'/newIncomeRequest'}>
                    <Eye/> 
                </Link>
                  
              
             
               
  },
  {
    id:'2',
   num:'2',
   name:'علی اطهری',
   subject:truncate("لغو قرارداد 142 وزارت خانه",30),
   location:'اداره بازرگانی شماره ۲',
   date:'02/02/12',
   status:<span className="text-sm text-red font-bold font-IRsans">درخواست جدید</span >,
   function: 
   <Link to={'/newIncomeRequest'}>
   <Eye/> 
</Link>
  },
  {
    id:'3',
   num:'3',
   name:'علی اطهری',
   subject:truncate("لغو قرارداد 142 وزارت خانه",30),
   location:'اداره بازرگانی شماره ۲',
   date:'02/02/12',
   status:<span className="text-sm text-green font-medium font-IRsans">تایید شده</span >,
   function: 
   <Link to={'/newIncomeAccepted'}>
   <Eye/> 
</Link>
  },
  {
    id:'4',
   num:'4',
   name:'علی اطهری',
   subject:truncate("لغو قرارداد 142 وزارت خانه",30),
   location:'اداره بازرگانی شماره ۲',
   date:'02/02/12',
   status:<span className="text-sm text-green font-medium font-IRsans">تایید شده</span >,
   function: 
   <Link to={'/newIncomeAccepted'}>
   <Eye/> 
</Link>
  },
  {
    id:'5',
   num:'5',
   name:'علی اطهری',
   subject:truncate("لغو قرارداد 142 وزارت خانه",30),
   location:'اداره بازرگانی شماره ۲',
   date:'02/02/12',
   status:<span className="text-sm text-green font-medium font-IRsans">تایید شده</span >,
   function: 
   <Link to={'/newIncomeAccepted'} className="">
   <Eye/> 
</Link>
  }
]
  const tableBody = tableRow.map((tableRow) =>
  <tr key={tableRow.id} className="border-b border-b-borderGray">
    <td className="py-4 text-sm text-right pr-4 font-IRsans">{tableRow.num}</td>
    <td className="py-4 text-sm text-right font-IRsans">{tableRow.name}</td>
    <td className="py-4 text-sm text-right font-IRsans">
      {tableRow.subject}
      </td>
    <td className="py-4 text-sm text-center font-IRsans" >{tableRow.location}</td>
    <td className="py-4 text-sm text-center font-IRsans" >{tableRow.date}</td>
    <td className="py-4 text-sm text-center font-IRsans"  >{tableRow.status}</td>
    <td className="py-4 text-sm text-center font-IRsans flex justify-center">{tableRow.function}</td>
    </tr> 
  )
    return(
        <div className=" mt-5 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
      
        
          <table class="table-auto w-full font-IRsans">
  <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}>
      <th className="text-right pr-4 font-IRsans md:px-4">ردیف</th>
      <th className="text-right font-IRsans md:px-4">نام مامور</th>
      <th className="text-right font-IRsans md:px-4">موضوع سفر</th>
      <th className="text-center font-IRsan md:px-4s">محل خدمت</th>
      <th className="text-center font-IRsan md:px-4s">تاریخ</th>
      <th className="text-center font-IRsans md:px-4">وضعیت</th>
      <th className="text-center font-IRsans md:px-4" >مشاهده</th>
    </tr>
  </thead>
  <tbody>
   {tableBody}
 
  </tbody>
</table>
{showSuccessModal ?
                  <>
                   <div
                   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                 >
                   <div className="relative w-[30%] my-5 mx-auto max-w-5xl">
                    
                     <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  
                       <div className="flex justify-center p-4 border-b border-solid border-b-[#EDF3FA] rounded-t">
                         <span className="text-base font-bold font-IRsans text-black text-center">
                          علت رد درخواست سفر
                         </span>
                      
                       </div>
                       
                       <div className="relative p-6 flex-auto">
                         <p className="my-4 text-black text-sm leading-relaxed">
                         درخواست شما به علت عدم توضیح کافی راجع به موضوع سفر و مشخص نبودن تاریخ دقیق آن پذیرفته نشد.
لطفا موارد ذکر شده را اصلاح کنید و سپس مجددا درخواست خود را ثبت کنید.
                         </p>
                       </div>
                      
                       <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                         <button
                           className="text-mainColor float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           onClick={() => setShowSuccessModal(false)}
                         >
                           بستن
                         </button>
                         <button
                           className="text-mainColor float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           onClick={() => setShowSuccessModal(false)}
                         >
                           درخواست مجدد
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
export default MainHistoryRequest;