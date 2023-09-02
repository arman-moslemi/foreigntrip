import React,{useState} from "react";
import { Link } from "react-router-dom";
import RequestDetail from "../RequestDetail";
import{ReactComponent as Download} from "../../assets/icon/white/download.svg"
const IncomeRequest = () =>{
const [show , setShow]=useState(false);
const [showSuccessModal, setShowSuccessModal] = React.useState(false);
const [showSendModal, setShowSendModal] = React.useState(false);
const [showButton,setShowButton] = React.useState(false);
    return (
        <div className="border border-borderGray rounded-md pt-10 px-5 py-5 mt-7">
  <RequestDetail/>

            {
                show?
                <div className="mt-20">
                   <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        علت رد درخواست مامور اعزامی را اینجا بنویسید
                        </p>
                        <textarea id="message" rows="8" class="block p-2.5 mt-5   w-full text-sm text-gray-900 bg-gray-50 rounded border  border-borderGray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="توضیحات خود را اینجا بنویسید..."></textarea>
                       <div className="flex justify-end w-full">
                       
              <button style={{fontFamily:'Shabnam'}}  onClick={() => setShowSendModal(true)} className="mt-5 min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow   text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor ">
               ارسال
              </button>
              {showSendModal ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-green">
                    رد درخواست
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                علت رد خواست مامور اعزامی با موفقیت برای ایشان ارسال گردید.
                  </p>
                </div>
               
                <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                  <button style={{fontFamily:'Shabnam'}} 
                    className="text-mainColor   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSendModal(false)}
                  >
                    بستن
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
                </div>
                :
                <div className="flex w-full justify-end mt-10">
                <button style={{fontFamily:'Shabnam'}}  className=" bg-[#ff0000] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white    font-medium text-base shadow-redShadow hover:bg-white hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]" 
                onClick={()=>setShow(true)
                }>
                        رد کردن درخواست
                    </button>
                    <button style={{fontFamily:'Shabnam'}}  onClick={() => setShowSuccessModal(true)} className="mr-5 bg-[#3AB50E] hover:bg-white hover:text-[#3AB50E] hover:border-2 hover:border-[#3AB50E] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white    font-medium text-base shadow-greenShadow">
                       تایید درخواست
                    </button>
                    {showSuccessModal ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[30%] my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-green">
                    تایید درخواست
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm  ">
                درخواست مامور اعزامی توسط شما در گام اول تایید شد.فرم این مامور را دانلود کرده و پس از گرفتن تایید مسئولان،قسمت امضا را تکمیل کنید تا فرم تایید نهایی شود.برای این کار به صفحه ی تاریخچه درخواست ها مراجعه کنید.
                  </p>
                </div>
               
                <div className="flex items-center justify-center  border-solid border-slate-200 rounded-b mb-4">
                  <button style={{fontFamily:'Shabnam'}} 
                    className=" float-left flex bg-mainColor items-center rounded-md shadow-blueShadow uppercase px-3 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSuccessModal(false)}
                  >
                  
                    <span style={{fontFamily:'Shabnam'}} className="text-white   text-sm font-bold">
                    دانلود فرم با فرمت doc
                    </span>
                   
                    
                  </button>
                  <button style={{fontFamily:'Shabnam'}} 
                    className=" float-left flex items-center bg-mainColor rounded-md shadow-blueShadow uppercase px-3 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSuccessModal(false)}
                  >
                     
                    <span style={{fontFamily:'Shabnam'}} className="text-white   text-sm font-bold">
                    دانلود فرم با فرمت Pdf
                    </span>
                   
                    
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
            }
           
        </div>
    )
}
export default IncomeRequest;