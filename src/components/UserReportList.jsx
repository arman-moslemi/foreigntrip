import React from "react";
import {ReactComponent as Search} from "../assets/icon/white/search.svg"
import './components.css';
import { Link } from "react-router-dom";
import {ReactComponent as Eye} from "../assets/icon/black/eye.svg";
import {ReactComponent as Download} from "../assets/icon/white/download.svg"
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

const UserReportList = () =>{
  const tableRow =[
    {
      id:'1',
     num:'1',
     name:'علی اطهری',
     subject:truncate("لغو قرارداد 142 وزارت خانه",30),
     location:'اداره بازرگانی شماره ۲',
     status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-tripDone font-bold  ">اتمام ماموریت</span >,
     function: 
                  <Link style={{fontFamily:'Shabnam'}}  to={'/supervisor/reportView'}>
                  <Eye/>
                  </Link>
               
                 
    },
    {
      id:'2',
     num:'2',
     name:'علیرضا بیاتی',
     subject:truncate("لغو قرارداد 142 وزارت خانه",30),
     location:'اداره بازرگانی شماره ۲',
     status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-mainColor font-bold  ">درحال انجام ماموریت</span >,
     function: 
     <Link style={{fontFamily:'Shabnam'}}  to={'/supervisor/reportView'}>
     <Eye/>
    </Link>
      
    },
    {
      id:'3',
     num:'3',
     name:'دارا دورانی',
     subject: truncate("ارسال کالا به کشور ترکیه برای انجام فعالیت سیاسی",30),
     location:'اداره بازرگانی شماره ۲',
     status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-green font-medium  ">تایید گزارش نهایی</span >,
     function:  <Link style={{fontFamily:'Shabnam'}}  to={'/supervisor/reportView'}>
     <Eye/>
    </Link>
    },
    {
      id:'4',
     num:'4',
     name:'احمدرضا قلی زاده',
     subject:truncate("لغو قرارداد 142 وزارت خانه",30),
     location:'اداره بازرگانی شماره ۲',
     status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-red font-medium  ">رد گزارش نهایی</span >,
     function: 
     <Link style={{fontFamily:'Shabnam'}}  to={'/supervisor/reportView'}>
     <Eye/>
    </Link>
    },
    {
      id:'5',
     num:'5',
     name:'علی اطهری',
     subject:truncate("لغو قرارداد 142 وزارت خانه",30),
     location:'اداره بازرگانی شماره ۲',
     status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-green font-medium  ">تایید شده</span >,
     function: 
     <Link style={{fontFamily:'Shabnam'}}  to={'/supervisor/reportView'}>
     <Eye/>
    </Link>
    }
  ]
    const tableBody = tableRow.map((tableRow) =>
    <tr key={tableRow.id} className="border-b border-b-borderGray">
      <td className="py-4 text-sm text-right pr-4   px-4" style={{fontFamily:'Shabnam'}}>{tableRow.num}</td>
      <td className="py-4 text-sm text-right   px-4" style={{fontFamily:'Shabnam'}}>
        <div className="flex items-center">
          <div>
          {tableRow.name}
          </div>
          <div style={{fontFamily:'Shabnam'}} className="w-[20px] h-[20px] rounded-full bg-[#FFBD14] flex items-center justify-center mr-2">
            <span style={{fontFamily:'Shabnam'}} className="text-white   text-sm font-bold">2</span>
          </div>
        </div>
      </td>
      <td style={{fontFamily:'Shabnam'}} className="py-4 text-sm text-right px-4  ">{tableRow.subject}</td>
      <td style={{fontFamily:'Shabnam'}} className="py-4 text-sm text-center px-4  " >{tableRow.location}</td>
      <td style={{fontFamily:'Shabnam'}} className="py-4 text-sm text-center px-4  "  >{tableRow.status}</td>
      <td style={{fontFamily:'Shabnam'}} className="py-4 text-sm text-center px-4  ">{tableRow.function}</td>
      </tr> 
    )
    return(
        <>
        <div className="flex xl-lg:flex-col xl-lg:items-end justify-between items-center mt-8 flex-wrap ">
            <div className="flex sm-xs:flex-col sm-xs:items-start items-center flex-wrap xl-lg:w-[100%]">
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor font-bold text-base ml-4 xl-lg:ml-0 xl-lg:w-[27%] lg:w-[31%] lg-md:w-[38%] md:w-[27%] md-sm:w-[31%] sm-xs:w-[100%] xs-510:w-[100%] xs:w-[100%] sm-xs:mb-3">
                   جستجو در بین گزارشات
                </span>
                <input type="text" className="border rounded-full w-80 xl-lg:w-[73%] lg:w-[69%] lg-md:w-[62%] md:w-[73%] md-sm:w-[69%] sm-xs:w-[100%] xs-510:w-[100%] xs:w-[100%] border-midGray px-4 py-1.5 " placeholder="جستجو کنید ..."/>
            </div>
            <div className="flex xl-lg:justify-end xl-lg:mt-4 xl-lg:w-[100%]">
          <button style={{fontFamily:'Shabnam'}} className="bg-mainColor shadow-blueShadow rounded-md text-base sm-xs:w-[48%] 2xs:w-[49%]  text-white flex px-5 2xs:px-1 py-2  items-center justify-center md:float-left md:mt-3">
                <Search/>
                جستجو

            </button>
          <button style={{fontFamily:'Shabnam'}} className="bg-mainColor shadow-blueShadow rounded-md text-base mr-2 sm-xs:mr-[4%] 2xs:mr-[2%] sm-xs:w-[48%] 2xs:w-[49%]   text-white flex px-5 2xs:px-1 py-2  items-center justify-center md:float-left md:mt-3">
                <Download className="w-[25px]"/>
                گزارش گیری

            </button>
          </div>
        </div>
        <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
          <table class="table-auto w-full  ">
  <thead className="bg-darkGray h-11 rounded-t-2xl  w-full whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}>
      <th className="text-right pr-4   md:px-4" style={{fontFamily:'Shabnam'}}>ردیف</th>
      <th className="text-right   md:px-4" style={{fontFamily:'Shabnam'}}>نام مامور</th>
      <th className="text-right   md:px-4" style={{fontFamily:'Shabnam'}}>موضوع سفر</th>
      <th className="text-center font-IRsan md:px-4s" style={{fontFamily:'Shabnam'}}>محل خدمت</th>
      <th className="text-center   md:px-4" style={{fontFamily:'Shabnam'}}>وضعیت</th>
      <th className="text-center   md:px-4 pl-4" style={{fontFamily:'Shabnam'}} >مشاهده</th>
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

export default UserReportList;