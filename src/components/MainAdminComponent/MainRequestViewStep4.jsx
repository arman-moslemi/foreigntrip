import React,{useState} from "react";
import {ReactComponent as Download} from "../../assets/icon/blue/download.svg"
import { Link } from "react-router-dom";
const MainRequestViewStep4 = () =>{
const [showReason,
        setShowReason]= useState(false);
        const [show , setShow]=useState(false);
const [showSuccessModal, setShowSuccessModal] = React.useState(false);
const [showSendModal, setShowSendModal] = React.useState(false);
const [showButton,setShowButton] = React.useState(false);
    return(
        <>
      
                    <div className="flex justify-between flex-wrap border-b border-dashed border-[#CCCCCD] pb-4">
                    <div className="w-full my-3">
                        <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-base font-bold text-[#0D296E]">
                         شرح اهمیت موضوع :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            شرح اهمیت موضوع : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </span>
                        </p>
                    </div>
              
                    <div className="w-full my-3">
                        <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-base font-bold text-[#0D296E]">
                         سوابق و دستاوردهای قبلی مرتبط با موضوع این ماموریت :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            سوابق و دستاوردهای قبلی مرتبط با موضوع این ماموریت : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد .                            </span>
                        </p>
                    </div>
                    <div className="w-full my-3">
                        <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-base font-bold text-[#0D296E]">
                        خلاصه ترجمه شده دعوتنامه و یا قید هزینه ها و برنامه زمانبندی شده روزهای ماموریت بر اساس دعوتنامه :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            خلاصه ترجمه شده دعوتنامه و یا قید هزینه ها و برنامه زمانبندی شده روزهای ماموریت بر اساس دعوتنامه : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.   </span></p>
                    </div>
                    <div className="w-full my-3">
                        <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-base font-bold text-[#0D296E]">
                       خلاصه ترجمه شده دیگر نامه های طرف خارجی :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            خلاصه ترجمه شده دیگر نامه های طرف خارجی : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.                 </span></p>   </div>
                            <div className="w-full my-3 flex">
                        <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-base font-bold text-[#0D296E]">
                       آیا سفر مذکور نیاز به موافقت دستگاه های مرجع دیگری در داخل دارد ؟
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                               بله
                               </span></p>
                               <button style={{fontFamily:'Shabnam'}} className="mr-4 rounded-full text-mainColor font-bold h-[28px] bg-lightBlue flex justify-center items-center px-4">
                                <Download/>
                                <span className="mr-2">
                                فایل ضمیمه.pdf
                                </span>
                               </button>
                    </div>
                    <div className="w-full my-3">
                        <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-base font-bold text-[#0D296E]">
                            آیا سفر در راستای مقاومت اقتصادی می باشد ؟
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
خیر
                              </span></p>
                    </div>
                    {
                show?
                <div className="mt-20 w-full">
                   <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-base font-bold text-[#0D296E]">
                        علت رد درخواست مامور اعزامی را اینجا بنویسید
                        </p>
                        <textarea id="message" style={{fontFamily:'Shabnam'}} rows="8" class="text-black block p-2.5 mt-5 font-IRsans w-full text-sm  rounded border  border-borderGray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="توضیحات خود را اینجا بنویسید..."></textarea>
                       <div className="flex justify-end w-full">
                       
              <button style={{fontFamily:'Shabnam'}}  onClick={() => setShowSendModal(true)} className="mt-5 min-w-[120px] h-8 px-2 bg-mainColor shadow-blueShadow font-IRsans text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor ">
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
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold font-IRsans text-red">
                    رد درخواست
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm font-IRsans leading-relaxed">
                علت رد خواست مامور اعزامی با موفقیت برای ایشان ارسال گردید.
                  </p>
                </div>
               
                <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                  <Link to={'/internationalAdmin/requestList'} style={{fontFamily:'Shabnam'}} 
                    className="text-mainColor font-IRsans float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSendModal(false)}
                  >
                    بستن
                  </Link>
                
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
                <button style={{fontFamily:'Shabnam'}}  className=" bg-[#ff0000] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-redShadow hover:bg-white hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]" 
                onClick={()=>setShow(true)
                }>
                        رد کردن درخواست
                    </button>
                    <button style={{fontFamily:'Shabnam'}}  onClick={() => setShowSuccessModal(true)} className="mr-5 bg-[#3AB50E] hover:bg-white hover:text-[#3AB50E] hover:border-2 hover:border-[#3AB50E] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-greenShadow">
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
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold font-IRsans text-green">
                    تایید درخواست
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm font-IRsans">
                درخواست مامور اعزامی توسط شما در گام اول تایید شد.فرم این مامور را دانلود کرده و پس از گرفتن تایید مسئولان،قسمت امضا را تکمیل کنید تا فرم تایید نهایی شود.برای این کار به صفحه ی تاریخچه درخواست ها مراجعه کنید.
                  </p>
                </div>
               
                <div className="flex items-center justify-center  border-solid border-slate-200 rounded-b mb-4">
                  <Link to={'/mainAdmin/uploadSignature'} style={{fontFamily:'Shabnam'}} 
                    className=" float-left flex bg-mainColor items-center rounded-md shadow-blueShadow uppercase px-3 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSuccessModal(false)}
                  >
                  
                    <span style={{fontFamily:'Shabnam'}} className="text-white font-IRsans text-sm font-bold">
                    دانلود فرم با فرمت doc
                    </span>
                   
                    
                  </Link>
                  <Link to={'/mainAdmin/uploadSignature'} style={{fontFamily:'Shabnam'}} 
                    className=" float-left flex items-center bg-mainColor rounded-md shadow-blueShadow uppercase px-3 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSuccessModal(false)}
                  >
                     
                    <span style={{fontFamily:'Shabnam'}} className="text-white font-IRsans text-sm font-bold">
                    دانلود فرم با فرمت Pdf
                    </span>
                   
                    
                  </Link>
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
        </>
    )
}

export default MainRequestViewStep4;