import React from "react";
import {ReactComponent as Search} from "../assets/icon/white/search.svg"
import './components.css';

import {ReactComponent as Download} from "../assets/icon/white/download.svg"
import Img1 from "../assets/img/user.png"
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

const UserlistTable = () =>{
    const tableRow =[
        {
          id:'1',
         num:'1',
         name:<div className="flex items-center">
     
           <img src={Img1} alt="userImg" className="rounded-full w-[50px] h-[50px]"/>
          
        
         <span className="text-sm text-[#000] mr-2 font-semibold" style={{fontFamily:'Shabnam'}}>
           علی عطایی
         </span>
        </div>,
        
         position:'مدیر مالی',
         holding:'شستا',
         company:'شرکت یک',
         lastEdit:'02/05/12-12:35',
         status:<span style={{fontFamily:'Shabnam'}} className="  text-green text-sm">آنلاین</span>             
                   
                     
        },   {
            id:'1',
           num:'1',
           name:<div className="flex items-center">
     
           <img src={Img1} alt="userImg" className="rounded-full w-[50px] h-[50px]"/>
          
        
         <span className="text-sm text-[#000] mr-2 font-semibold" style={{fontFamily:'Shabnam'}}>
           علی عطایی
         </span>
        </div>,
        
           position:'حسابرس',
           holding:'شستا',
           company:'شرکت یک',
           lastEdit:'02/05/12-12:35',
           status:<span style={{fontFamily:'Shabnam'}} className="  text-[#FF6900] text-sm">آفلاین</span>             
                     
                       
          },
      
      ]
    const tableBody = tableRow.map((tableRow) =>
    <tr key={tableRow.id} className="border-b border-b-borderGray">
      <td className="py-4 text-sm text-right pr-4   px-4" style={{fontFamily:'Shabnam'}}>{tableRow.num}</td>
      <td className="py-4 text-sm text-right   px-4" style={{fontFamily:'Shabnam'}}>
        
      
          {tableRow.name}
        
        
       
      </td>
   
      <td className="py-4 text-sm text-center px-4  " style={{fontFamily:'Shabnam'}}>{tableRow.position}</td>
      <td className="py-4 text-sm text-center px-4  " style={{fontFamily:'Shabnam'}} >{tableRow.holding}</td>
      <td className="py-4 text-sm text-center px-4  " style={{fontFamily:'Shabnam'}}>{tableRow.company}</td>
      <td className="py-4 text-sm text-center px-4  " style={{fontFamily:'Shabnam'}}>{tableRow.lastEdit}</td>
      <td className="py-4 text-sm text-center px-4  " style={{fontFamily:'Shabnam'}}>{tableRow.status}</td>
      </tr> 
    )
    return(
        <>
        <div className="flex justify-between items-center mt-8 flex-wrap xl-lg:flex-col xl-lg:items-end">
            <div className="flex items-center flex-wrap sm-xs:flex-col sm-xs:items-start xl-lg:w-[100%]">
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor font-bold text-base ml-4 xl-lg:ml-0 xl-lg:w-[27%] lg:w-[31%] lg-md:w-[38%] md:w-[27%] md-sm:w-[31%] sm-xs:w-[100%] xs-510:w-[100%] xs:w-[100%] sm-xs:mb-3">
                    جستجو در بین کاربران
                </span>
                <input type="text" className="border rounded-full w-80 border-midGray px-4 py-1.5 xl-lg:w-[73%] lg:w-[69%] lg-md:w-[62%] md:w-[73%] md-sm:w-[69%] sm-xs:w-[100%] xs-510:w-[100%] xs:w-[100%]  " placeholder="جستجو کنید ..."/>
            </div>
          <div className="flex xl-lg:justify-end xl-lg:mt-4 xl-lg:w-[100%]">
          <button style={{fontFamily:'Shabnam'}} className="bg-mainColor shadow-blueShadow rounded-md text-base   text-white flex px-5 py-2  items-center justify-center md:float-left md:mt-3 sm-xs:w-[48%] 2xs:w-[49%] 2xs:px-1">
                <Search/>
                جستجو

            </button>
          <button style={{fontFamily:'Shabnam'}} className="bg-mainColor shadow-blueShadow rounded-md text-base mr-2   text-white flex px-5 py-2  items-center justify-center md:float-left md:mt-3 sm-xs:mr-[4%] 2xs:mr-[2%] sm-xs:w-[48%] 2xs:w-[49%] 2xs:px-1">
                <Download className="w-[25px]"/>
                گزارش گیری

            </button>
          </div>
        </div>
        <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
          <table class="table-auto w-full  ">
  <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}>
      <th className="text-right pr-4   md:px-4" style={{fontFamily:'Shabnam'}}>ردیف</th>
      <th className="text-right   md:px-4 pr-4" style={{fontFamily:'Shabnam'}}>نام و نام خانوادگی</th>

      <th className="text-center font-IRsan md:px-4" style={{fontFamily:'Shabnam'}}>سمت</th>
      <th className="text-center   md:px-4" style={{fontFamily:'Shabnam'}}>هولدینگ</th>
      <th className="text-center   md:px-4" style={{fontFamily:'Shabnam'}} >شرکت</th>
      <th className="text-center   md:px-4" style={{fontFamily:'Shabnam'}} >آخرین به روزرسانی</th>
      <th className="text-center   md:px-4" style={{fontFamily:'Shabnam'}}>وضعیت</th>
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

export default UserlistTable;