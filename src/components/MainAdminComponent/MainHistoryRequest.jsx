import React from "react";
import './components.css';
import { Link } from "react-router-dom";
import {ReactComponent as Eye} from "../../assets/icon/black/eye.svg";
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

const tableRow =[
  {
    id:'1',
   num:'1',
   name:'علی اطهری',
   subject:truncate("انجام لغو قرارداد 142 وزارت خانه",30),
   location:'اداره بازرگانی شماره ۲',
   date:'02/02/12',
   type:'عادی',
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-red font-bold  ">درخواست جدید</span >,
   function: 
                <Link style={{fontFamily:'Shabnam'}}  to={'/newIncomeRequest'}>
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
   type:<span style={{fontFamily:'Shabnam'}} className="  text-red font-bold">فوری</span>,
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-[#ffb921] font-bold  ">منتظر آپلود امضا</span >,
   function: <Link style={{fontFamily:'Shabnam'}}  to={'/newIncomeRequest'}  className="">
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
   type:<span style={{fontFamily:'Shabnam'}} className="  text-red font-bold">فوری</span>,
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-green font-medium  ">تایید شده</span >,
   function: 
   <Link style={{fontFamily:'Shabnam'}}  to={'/newIncomeAccepted'}>
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
   type:<span style={{fontFamily:'Shabnam'}} className="  text-red font-bold">فوری</span>,
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-green font-medium  ">تایید شده</span >,
   function: 
   <Link style={{fontFamily:'Shabnam'}}  to={'/newIncomeAccepted'}>
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
   type:'عادی',
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-green font-medium  ">تایید شده</span >,
   function: 
   <Link style={{fontFamily:'Shabnam'}}  to={'/newIncomeAccepted'} className="">
   <Eye/> 
</Link>
  }
]
  const tableBody = tableRow.map((tableRow) =>
  <tr key={tableRow.id} className="border-b border-b-borderGray">
    <td className="py-4 text-sm text-right px-4  ">{tableRow.num}</td>
    <td className="py-4 text-sm text-right px-4  ">{tableRow.name}</td>
    <td className="py-4 text-sm text-right px-4  ">
      {tableRow.subject}
      </td>
    <td className="py-4 text-sm text-center  " >{tableRow.location}</td>
    <td className="py-4 text-sm text-center  " >{tableRow.date}</td>
    <td className="py-4 text-sm text-center  " >{tableRow.type}</td>
    <td className="py-4 text-sm text-center  "  >{tableRow.status}</td>
    <td className="py-4 text-sm text-center   flex justify-center">{tableRow.function}</td>
    </tr> 
  )
    return(
        <div className=" mt-5 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
      
        
          <table class="table-auto w-full  ">
  <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}>
      <th className="text-right pr-4   md:px-4">ردیف</th>
      <th className="text-right   md:px-4">نام مامور</th>
      <th className="text-right   md:px-4">موضوع سفر</th>
      <th className="text-center font-IRsan md:px-4s">محل خدمت</th>
      <th className="text-center font-IRsan md:px-4s">تاریخ</th>
      <th className="text-center font-IRsan md:px-4s">نوع سفر</th>

      <th className="text-center   md:px-4">وضعیت</th>
      <th className="text-center   md:px-4" >مشاهده</th>
    </tr>
  </thead>
  <tbody>
   {tableBody}
 
  </tbody>
</table>

        </div>
    )
}
export default MainHistoryRequest;