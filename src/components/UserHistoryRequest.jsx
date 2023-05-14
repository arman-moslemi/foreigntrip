import React,{useState} from "react";
import React,{useState} from "react";
import './components.css';
import { Link } from "react-router-dom";
const tableRow =[
  {
    id:'1',
   num:'1',
   date:'1402/05/12',
   subject:'لغو قرارداد 142 وزارت خانه',
   location:'برلین',
   status:<span className="text-sm text-red">رد شده</span >,
   function:  <Link to={`/`}>
                <button className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
                  درخواست مجدد
                </button>
              </Link>
  },
  {
    id:'2',
   num:'2',
   date:'1402/06/12',
   subject:'خرید تجهیزات',
   location:'مالزی',
   status:<span className="text-sm text-green">تایید شده</span >,
   function:<Link to={`/`}>
              <button disabled="true" className="min-w-[120px] h-8 px-2 bg-midGray font-IRsans text-white text-sm rounded-lg">
                در انتظار
              </button>
            </Link>
  },
  {
    id:'3',
   num:'3',
   date:'1402/03/28',
   subject:'آماده سازی تیم مذاکره',
   location:'لندن',
   status:<span className="text-sm text-mainColor">اعزام</span >,
   function:<Link to={`/`}>
              <button className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
                رهگیری مرحله ای
              </button>
            </Link>
  },
  {
    id:'4',
   num:'4',
   date:'1402/11/22',
   subject:'خرید سیستم',
   location:'پاریس',
   status:<span className="text-sm text-mainColor">اتمام سفر</span >,
   function:<Link to={`/`}>
              <button className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
               ثبت گزارش دستاورد
              </button>
            </Link>
  },
  {
    id:'5',
   num:'5',
   date:'1402/02/23',
   subject:'خرید سیستم',
   location:'پاریس',
   status:<span className="text-sm text-green">تایید گزارش</span >,
   function:''
  }
]

const UserHistoryRequest = () =>{


  const tableBody = tableRow.map((tableRow) =>
  <tr key={tableRow.id} className="border-b border-b-borderGray">
    <td className="py-4 text-sm text-right pr-4">{tableRow.num}</td>
    <td className="py-4 text-sm text-right ">{tableRow.date}</td>
    <td className="py-4 text-sm text-right ">{tableRow.subject}</td>
    <td className="py-4 text-sm text-right " >{tableRow.location}</td>
    <td className="py-4 text-sm text-right" >{tableRow.status}</td>
    <td className="py-4 text-sm text-right">{tableRow.function}</td>
    </tr> 
  )
    return(
        <div className=" mt-10 border-borderGray border border-solid">
          <table class="table-auto w-full font-IRsans">
  <thead className="bg-darkGray h-11 rounded-t-2xl" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6" style={{borderRadius:'20px'}}>
      <th className="text-right pr-4">ردیف</th>
      <th className="text-right">تاریخ سفر</th>
      <th className="text-right">موضوع سفر</th>
      <th className="text-right">کشور مقصد</th>
      <th className="text-right">وضعیت</th>
      <th className="text-right">عملیات</th>
    </tr>
  </thead>
  <tbody>
   {tableBody}
 
  </tbody>
</table>
        </div>
    )
}
export default UserHistoryRequest;