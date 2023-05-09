import React,{useState} from "react";
import './components.css';
import { Link } from "react-router-dom";

const UserHistoryRequest = () =>{
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const tableRow =[
    {
      id:'1',
     num:'1',
     date:'1402/05/12',
     subject:'لغو قرارداد 142 وزارت خانه',
     location:'برلین',
     status:<span className="text-sm text-red">رد شده</span >,
     function:  
                  <button  onClick={() => setShowSuccessModal(true)} className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
                    مشاهده علت
                  </button>
               
    },
    {
      id:'2',
     num:'2',
     date:'1402/06/12',
     subject:'خرید تجهیزات',
     location:'مالزی',
     status:<span className="text-sm text-green">تایید شده</span >,
     function:<Link to={`/`}>
               <button className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
                    درخواست صدور گذرنامه
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
  

  const tableBody = tableRow.map((tableRow) =>
  <tr key={tableRow.id} className="border-b border-b-borderGray">
    <td className="py-4 text-sm text-right pr-4">{tableRow.num}</td>
    <td className="py-4 text-sm text-right ">{tableRow.date}</td>
    <td className="py-4 text-sm text-right ">{tableRow.subject}</td>
    <td className="py-4 text-sm text-center font-bold" >{tableRow.location}</td>
    <td className="py-4 text-sm text-center font-bold" >{tableRow.status}</td>
    <td className="py-4 text-sm text-center font-bold">{tableRow.function}</td>
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
      <th className="text-center">کشور مقصد</th>
      <th className="text-center">وضعیت</th>
      <th className="text-center">عملیات</th>
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
            <div className="relative w-[35%] my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-center p-4 border-b border-solid border-[#EDF3FA] rounded-t">
                  <span className="text-base font-bold font-IRsans text-black">
                   علت رد درخواست سفر
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p className="my-4 font-IRsans text-black text-sm leading-relaxed font-medium">
                
                  درخواست شما به علت عدم توضیح کافی راجع به موضوع سفر و مشخص نبودن تاریخ دقیق آن پذیرفته نشد.
لطفا موارد ذکر شده را اصلاح کنید و سپس مجددا درخواست خود را ثبت کنید.
                  </p>
                </div>
               
                <div className="flex items-center justify-endborder-t justify-center border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSuccessModal(false)}
                  >
                    بستن
                  </button>
                  <button
                    className="text-white rounded hover:bg-lightBlue hover:text-mainColor bg-mainColor shadow-blueShadow font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
export default UserHistoryRequest;