import React from "react";
import './components.css';
const tableRow =[
  {
    id:'1',
   num:'1',
   date:'1402/05/12',
   subject:'لغو قرارداد 142 وزارت خانه',
   location:'برلین',
   status:'رد شده',
   function:<button>درخواست مجدد</button>
  },
  {
    id:'2',
   num:'2',
   date:'1402/06/12',
   subject:'لغو قرارداد 141 وزارت خانه',
   location:'cبرلین',
   status:'رcد شده',
   function:<button>درخواست مجدد</button>
  }
]
const tableBody = tableRow.map((tableRow) =>
<tr key={tableRow.id} className="border-b border-b-borderGray">
  <td className="py-4 text-sm text-right pr-4">{tableRow.num}</td>
  <td className="py-4 text-sm text-right">{tableRow.date}</td>
  <td className="py-4 text-sm text-right">{tableRow.subject}</td>
  <td className="py-4 text-sm text-right">{tableRow.location}</td>
  <td className="py-4 text-sm text-right">{tableRow.status}</td>
  <td className="py-4 text-sm text-right">{tableRow.function}</td>
  </tr> 
)
const UserHistoryRequest = () =>{

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