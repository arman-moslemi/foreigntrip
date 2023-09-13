import React from "react";
import './components.css';
import { Link } from "react-router-dom";

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

const UserHistoryRequest = ({data}) =>{
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showRuleModal, setShowRuleModal] = React.useState(false);
  const [reject, setReject] = React.useState();
const tableRow =[
  {
    id:'1',
   num:'1',
   date:'1402/05/12',
   subject:truncate("لغو قرارداد 142 وزارت خانه",30),
   location:'برلین',
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-red font-bold  ">رد شده</span >,
   function: 
                <button style={{fontFamily:'Shabnam'}} onClick={() => setShowSuccessModal(true)} className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow   text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
                  مشاهده علت
                </button>
             
               
  },
  {
    id:'2',
   num:'2',
   date:'1402/06/12',
   subject:truncate("لغو قرارداد 142 وزارت خانه",30),
   location:'مالزی',
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-green font-bold  ">تایید شده</span >,
   function:
              <button style={{fontFamily:'Shabnam'}} onClick={() => setShowRuleModal(true)}  className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow   text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
               مشاهده آیین نامه سفر
              </button>
            
  },
  {
    id:'3',
   num:'3',
   date:'1402/03/28',
   subject:truncate("لغو قرارداد 142 وزارت خانه",30),
   location:'لندن',
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-mainColor font-bold  ">اعزام</span >,
   function:<Link style={{fontFamily:'Shabnam'}}  to={`/submitReport`}>
              <button style={{fontFamily:'Shabnam'}} className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow   text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
                رهگیری مرحله ای
              </button>
            </Link>
  },
  {
    id:'4',
   num:'4',
   date:'1402/11/22',
   subject:truncate("لغو قرارداد 142 وزارت خانه",30),
   location:'پاریس',
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-mainColor font-bold  ">اتمام سفر</span >,
   function:<Link style={{fontFamily:'Shabnam'}}  to={`/submitReport`}>
              <button style={{fontFamily:'Shabnam'}} className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow   text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
               ثبت گزارش دستاورد
              </button>
            </Link>
  },
  {
    id:'5',
   num:'5',
   date:'1402/02/23',
   subject:truncate("لغو قرارداد 142 وزارت خانه",30),
   location:'پاریس',
   status:<span style={{fontFamily:'Shabnam'}} className="text-sm text-green font-bold  ">تایید گزارش</span >,
   function:<Link style={{fontFamily:'Shabnam'}}  to={`/reportView`}>
   <button style={{fontFamily:'Shabnam'}} className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow   text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
     مشاهده گزارش
   </button>
 </Link>
  }
]
  const tableBody = data?.map((tableRow) =>
  <tr key={tableRow.id} className="border-b border-b-borderGray">
    <td className="py-4 text-sm text-right pr-4 font-IRsans">{tableRow.requestId}</td>
    <td className="py-4 text-sm text-right font-IRsans">{tableRow.travelDateStart}</td>
    <td className="py-4 text-sm text-right font-IRsans truncate">{tableRow.travelTopic}</td>
    <td className="py-4 text-sm text-center font-IRsans" >{tableRow.destinationCity}</td>
      {
        tableRow.requestStatusId==2?
        <>
        <td className="py-4  text-center font-IRsans text-sm text-red font-bold "  >{tableRow.requestStatus?.requestStatusTitle}</td>
        <td className="py-4 text-sm text-center font-IRsans">

        <button onClick={() => {setReject(tableRow?.rejectRequest);setShowSuccessModal(true)}} className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
        مشاهده علت
      </button>
      </td>

      </>
        :
        tableRow.requestStatusId==1?
        <>
        <td className="py-4 text-sm text-center font-IRsans text-mainColor font-bold  "  >{tableRow.requestStatus?.requestStatusTitle}</td>
        <td className="py-4 text-sm text-center font-IRsans">

        <Link style={{fontFamily:'Shabnam'}}  to={`/submitReport/`+tableRow.requestId}>
              <button className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
               ثبت گزارش دستاورد
              </button>
            </Link>
            </td>

            </>

                 :
                 tableRow.requestStatusId==3?
                 <>
        <td className="py-4 text-sm text-center font-IRsans text-mainColor font-bold  "  >{tableRow.requestStatus?.requestStatusTitle}</td>
        <td className="py-4 text-sm text-center font-IRsans">

                 <Link style={{fontFamily:'Shabnam'}}  to={`/submitReport/`+tableRow.requestId}>
                 <button className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
                  ثبت گزارش دستاورد
                 </button>
               </Link>
               </td>

               </>

            :
            tableRow.requestStatusId==4 ||  tableRow.requestStatusId==5 ?
            <>
        <td className="py-4 text-sm text-center font-IRsans  text-green font-bold"  >{tableRow.requestStatus?.requestStatusTitle}</td>
        <td className="py-4 text-sm text-center font-IRsans">

<Link style={{fontFamily:'Shabnam'}}  to={`/`}>
   <button className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
     مشاهده گزارش
   </button>
 </Link>
 </td>
 </>

 :  
 <>
        <td className="py-4 text-sm text-center font-IRsans"  >{tableRow.requestStatus?.requestStatusTitle}</td>
        <td className="py-4 text-sm text-center font-IRsans">

   <button onClick={() => setShowRuleModal(true)}  className="min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor">
                )در انتظار تایید)مشاهده آیین نامه سفر
              </button>
              </td>
 </>

      }
    
 
 
    </tr> 
  )
    return(
        <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
          <table class="table-auto w-full  ">
  <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{borderRadius:'20px'}}>
      <th className="text-right pr-4   md:px-4"style={{fontFamily:'Shabnam'}}>ردیف</th>
      <th className="text-right   md:px-4"style={{fontFamily:'Shabnam'}}>تاریخ سفر</th>
      <th className="text-right   md:px-4"style={{fontFamily:'Shabnam'}}>موضوع سفر</th>
      <th className="text-center font-IRsan md:px-4s"style={{fontFamily:'Shabnam'}}>کشور مقصد</th>
      <th className="text-center   md:px-4"style={{fontFamily:'Shabnam'}}>وضعیت</th>
      <th className="text-center   md:px-4"style={{fontFamily:'Shabnam'}} >عملیات</th>
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
                         <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-black text-center">
                          علت رد درخواست سفر
                         </span>
                      
                       </div>
                       
                       <div className="relative p-6 flex-auto">
                         <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal  ">
                        {
                        reject}
                         </p>
                       </div>
                      
                       <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                         <button style={{fontFamily:'Shabnam'}}
                           className="text-mainColor   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           onClick={() => setShowSuccessModal(false)}
                         >
                           بستن
                         </button>
                        <Link style={{fontFamily:'Shabnam'}}  to={'/newRequestStep1'}>
                        <button style={{fontFamily:'Shabnam'}}
                           className="text-mainColor   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                           type="button"
                           
                         >
                           درخواست مجدد
                         </button>
                        </Link>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                 
                  </>
                  :null
               }
               {
                showRuleModal ?
                <>
                <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-[50%] my-5 mx-auto max-w-5xl">
                 
                  <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               
                    <div className="flex justify-center p-4 border-b border-solid border-b-[#EDF3FA] rounded-t">
                      <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-black text-center">
                       آیین نامه سفر و ثبت گزارش دستاورد سفر
                      </span>
                   
                    </div>
                    
                    <div className="relative p-6 flex-auto">
                      <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm font-bold leading-relaxed break-words whitespace-normal  ">
                     قوانین سفر :
                     </p>
                     <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm leading-relaxed break-words whitespace-normal  ">
                    
                    
                     هر مامور اعزامی موظف است هر روز گزارش دستاورد از آن روز سفر را ونل خود ثبت کند تا کارشناس امور بین الملل بررسی کند و تایید یا رد کند.
                     <br/>
                     هر مامور اعزامی موظف است پس از پایان سفر خود گزارش ستاورد کلی سفر خود به همراه مستندات مناسب را بارگزاری کند تا کارشناس امور بین الملل بررسی کند
                      صورت نا معتبر بودن گزارش و رد آن توسط کارشناس امور بین الملل اجازه ی سفر بعدی به مامور اعزامی داده نمی شود و دسترسی به پنل برای کاربر بسته می شود.
                      </p>
                    </div>
                   
                    <div className="flex items-center justify-endborder-t justify-center mb-3 border-solid border-slate-200 rounded-b">
                      <button style={{fontFamily:'Shabnam'}}
                        className="text-mainColor   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowRuleModal(false)}
                      >
                        بستن
                      </button>
                  
                     <button style={{fontFamily:'Shabnam'}}
                        className="text-white bg-mainColor shadow-blueShadow rounded-md   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowRuleModal(false)}
                      >
                       تاریخچه درخواست ها
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