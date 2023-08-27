import React from "react";
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
const SignUpHistory = () =>{

const tableRow =[
  {
    id:'1',
   num:'1',
   name:'علی اطهری',
   code:'0027654367',
   phone:'09123345673',
   date:'02/02/12',
  function: 
                <Link style={{fontFamily:'Shabnam'}}  to={'/signUpDetail'}>
                    <Eye/> 
                </Link>
                  
              
             
               
  },
  {
    id:'2',
    num:'1',
    name:'علی اطهری',
    code:'0027654367',
    phone:'09123345673',
    date:'02/02/12',
   function: 
                 <Link style={{fontFamily:'Shabnam'}}  to={'/signUpDetail'}>
                     <Eye/> 
                 </Link>
                   
  },
  {
    id:'3',
    num:'1',
    name:'علی اطهری',
    code:'0027654367',
    phone:'09123345673',
    date:'02/02/12',
   function: 
                 <Link style={{fontFamily:'Shabnam'}}  to={'/signUpDetail'}>
                     <Eye/> 
                 </Link>
                   
  },
  {
    id:'4',
    num:'1',
    name:'علی اطهری',
    code:'0027654367',
    phone:'09123345673',
    date:'02/02/12',
   function: 
                 <Link style={{fontFamily:'Shabnam'}}  to={'/signUpDetail'}>
                     <Eye/> 
                 </Link>
                   
  },
  {
    id:'5',
   num:'1',
   name:'علی اطهری',
   code:'0027654367',
   phone:'09123345673',
   date:'02/02/12',
  function: 
                <Link style={{fontFamily:'Shabnam'}}  to={'/signUpDetail'}>
                    <Eye/> 
                </Link>
                  
  }
]
  const tableBody = tableRow.map((tableRow) =>
  <tr key={tableRow.id} className="border-b border-b-borderGray">
    <td className="py-4 text-sm text-right px-4 font-IRsans">{tableRow.num}</td>
    <td className="py-4 text-sm text-right pl-4 font-IRsans">{tableRow.name}</td>
  
    <td className="py-4 text-sm text-center font-IRsans" >{tableRow.code}</td>
    <td className="py-4 text-sm text-center font-IRsans" >{tableRow.phone}</td>
    <td className="py-4 text-sm text-center font-IRsans"  >{tableRow.date}</td>
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
      <th className="text-center font-IRsans md:px-4">کد ملی</th>
      <th className="text-center font-IRsan md:px-4s">شماره تلفن همراه</th>
      <th className="text-center font-IRsan md:px-4s">تاریخ ثبت نام</th>
     <th className="text-center font-IRsans md:px-4" >مشاهده</th>
    </tr>
  </thead>
  <tbody>
   {tableBody}
 
  </tbody>
</table>

        </div>
    )
}
export default SignUpHistory;