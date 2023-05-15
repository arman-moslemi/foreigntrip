import React,{useState} from "react";
import { Link } from "react-router-dom";
const IncomeRequest = () =>{
const [show , setShow]=useState(false);

    return (
        <div className="border border-borderGray rounded-md pt-10 px-5 py-5 mt-7">
            <div className="flex justify-between flex-wrap">
                <div className="w-full my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                        نام و نام خانوادگی مامور :  
                        <span>   </span> 
                        <span className="text-darkGray">
                              علی اطهری  
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                       شناسه ملی : 
                        <span>   </span> 
                        <span className="text-darkGray">
                              ۲۱۳۴۸۶۹۷۵۹۵۹۰ 
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                        تاریخ سفر :  
                        <span>   </span> 
                        <span className="text-darkGray">
                              ۰۲ / ۰۳ / ۱۲ 
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                        سمت :  
                        <span>   </span> 
                        <span className="text-darkGray">
                              مدیر بخش بازرگانی اداره الف
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                        مدت سفر :   
                        <span>   </span> 
                        <span className="text-darkGray">
                              ۲ ماه
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                        محل خدمت : 
                        <span>   </span> 
                        <span className="text-darkGray">
                              اداره الف 
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                        موضوع سفر :  
                        <span>   </span> 
                        <span className="text-darkGray">
                              لغو قرارداد بارگیری کالا 
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                        نوع استخدام :   
                        <span>   </span> 
                        <span className="text-darkGray">
                             قراردادی
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                       کشور مقصد :  
                        <span>   </span> 
                        <span className="text-darkGray">
                              اندونزی
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                        نام شخص حقوقی بالا دست :  
                        <span>   </span> 
                        <span className="text-darkGray">
                             علی طاهایی 
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3">
                    <p className="font-IRsans text-base font-bold text-[#0D296E]">
                       پرداخت کننده هزینه سفر : 
                        <span>   </span> 
                        <span className="text-darkGray">
                              اداره بازرگانی ۱۲۵۳ 
                        </span>
                    </p>
                </div>
            </div>

            {
                show?
                <div className="mt-20">
                   <p className="font-IRsans text-base font-bold text-[#0D296E]">
                        علت رد درخواست مامور اعزامی را اینجا بنویسید
                        </p>
                        <textarea id="message" rows="8" class="block p-2.5 mt-5 font-IRsans w-full text-sm text-gray-900 bg-gray-50 rounded border  border-borderGray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="توضیحات خود را اینجا بنویسید..."></textarea>
                       <div className="flex justify-end w-full">
                       <Link to={`/`}>
              <button className="mt-5 min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor ">
               ارسال
              </button>
            </Link>   
                        </div>
                </div>
                :
                <div className="flex w-full justify-end mt-10">
                <button className=" bg-[#ff0000] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-redShadow hover:bg-white hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]" 
                onClick={()=>setShow(true)
                }>
                        رد کردن درخواست
                    </button>
                    <button className="mr-5 bg-[#3AB50E] hover:bg-white hover:text-[#3AB50E] hover:border-2 hover:border-[#3AB50E] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-greenShadow">
                       تایید درخواست
                    </button>
                   
                </div>
            }
           
        </div>
    )
}
export default IncomeRequest;