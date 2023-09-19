


import React from "react";

import { ReactComponent as Eye } from "../../assets/icon/black/eye.svg";

import './components.css';
import { Link } from "react-router-dom";

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

const ExpertRequestList  = ({data}) =>{

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
          <Link to={'/expert/requestView'} className="mx-2" >
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
          <Link to={'/expert/requestView'} className="mx-2" >
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
          <Link to={'/expert/requestView'} className="mx-2" >
            <Eye/>
          </Link>
       
         </div>        
                   
                     
        }, 
      
      ]
    const tableBody = data?.map((tableRow) =>
    <tr key={tableRow.id} className="border-b border-b-borderGray">
    
    
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-right  px-4">
      <div className="flex items-center">
          <div className="relative ml-2">
            <img src={Img1} alt="userImg" className="rounded-full w-[40px] h-[40px]"/>
            <div className="absolute top-0 -left-2 bg-[#4CFF0D] w-[15px] h-[15px] rounded-full">
              
            </div>
          </div>
          <span className="text-sm text-[#000] mr-2 font-semibold" style={{fontFamily:'Shabnam'}}>
          {tableRow.agent?.agentName} {tableRow.agent?.agentFamily} 
          </span>
         </div>
      
        
        
       
      </td>
    
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">{truncate(tableRow.travelTopic,30)}</td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">{tableRow.internationalExpert?.internationalExpertName}</td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">{tableRow.travelDateStart}</td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 "><span className="text-black" style={{fontFamily:'Shabnam'}}>
         {tableRow?.travelType?.travelType}
         </span></td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 ">
        <span className={tableRow.requestStatusId==2||tableRow.requestStatusId==4||
          tableRow.requestStatusId==7?"text-green":tableRow.requestStatusId==1||tableRow.requestStatusId==6?"text-tripDone":"text-red"} style={{fontFamily:'Shabnam'}}>
          {tableRow.requestStatus?.requestStatusTitle}</span>
          </td>
      <td style={{fontFamily:'shabnam'}}  className="py-4 text-xs text-center px-4 "> <div className="flex justify-center">
          <Link to={'/expert/requestView/'+tableRow?.requestId} className="mx-2" >
            <Eye/>
          </Link>
       
         </div>  </td>
      </tr> 
    )
    return(
        <>
     
        <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
          <table class="table-auto w-full  ">
  <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}>

      <th style={{fontFamily:'Shabnam'}} className="text-right   md:px-4 pr-4 text-sm">نام مامور</th>
     <th style={{fontFamily:'Shabnam'}} className="text-center font-IRsan md:px-4 text-sm">موضوع سفر</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center font-IRsan md:px-4 text-sm">تایید شده توسط</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center   md:px-4 text-sm">تاریخ سفر</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center   md:px-4 text-sm" >نوع سفر</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center   md:px-4 text-sm" >وضعیت</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center   md:px-4 text-sm" >مشاهده</th>
    </tr>
  </thead>
  <tbody>
   {tableBody}
 
  </tbody>
</table>

        </div>

        </>
    )


}

export default ExpertRequestList ;