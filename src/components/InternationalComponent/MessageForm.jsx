import React, {useState} from "react";
import { DatePicker } from "zaman";
import './components.css';

import {ReactComponent as Doc} from "../../assets/icon/black/doc.svg"

import {ReactComponent as Calender} from "../../assets/icon/black/calender.svg"
import {ReactComponent as Message} from "../../assets/icon/white/message.svg"

import {ReactComponent as Clock} from "../../assets/icon/black/clock.svg"
import {ReactComponent as Cross} from "../../assets/icon/white/close.svg"

const MessageForm = () => {
    const [showAgent,
        setShowAgent] = useState(false);
        const [showExpert,
            setShowExpert] = useState(false);
            const [showSupervisor,
                setShowSupervisor] = useState(false);
                const [showAlert,
                    setShowAlert] = useState(false);

    return (
        <div>
            
            <div className="flex w-[60%] mx-auto flex-wrap">
            <div className="flex w-[48%] ml-[4%] mb-4 items-end">
                    <div className="flex flex-col w-[100%] ">
                        <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">تاریخ ارسال پیام</span>
                        <div class="flex items-center h-11 pr-2 mt-3   text-right right-6 bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor  w-full pl-10 " id="test">
                            <Calender/>
                            <DatePicker style={{fontFamily:'Shabnam'}} placeholder="تاریخ ارسال پیام"  onChange={(e) => console.log(e.value)} />
                       
                        </div>
                    </div>
               
                </div>
                <div className="flex flex-col w-[48%]  mb-4">
                    <span style={{fontFamily:'Shabnam'}}   className="text-base font-normal  ">زمان ارسال پیام</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Clock/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="12:33"/>
                    </div>
                </div>
               
                <div className="flex flex-col w-[100%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">عنوان پیام</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="عنوان پیام خود را اینجا بنویسید"/>
                    </div>
                </div>
                <div className="flex flex-col w-[100%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">متن پیام</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <textarea style={{fontFamily:'Shabnam'}}
                        rows={5}
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="متن پیام خود را اینجا بنویسید"></textarea>
                    </div>
                </div>
             
                <div className="w-full">
         <div className="mt-3">
                <label style={{fontFamily:'Shabnam'}} className="  text-base font-normal">
                <span style={{fontFamily:'Shabnam'}}   className="text-black">مامورین اعزامی</span>                
                    <input style={{fontFamily:'Shabnam'}}
                     onChange={()=>setShowAgent(!showAgent)}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor  outline-mainColor mr-2"/>
               </label>
            </div>
         </div>
         {
            showAgent?
                <div className="w-full flex justify-between mt-4 mb-4">
                        <div className="flex flex-col w-[150px] ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">انتخاب مجموعه</span>
                    <div class=" mt-2">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب مجموعه</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">هولدینگ</option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className=" ">صندوق</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">سازمان</option>
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">بانک</option>
                            <option style={{fontFamily:'Shabnam'}} value="waiting" className=" ">معاونت</option>
                            <option style={{fontFamily:'Shabnam'}}  value="check" className=" ">شرکت ها</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">فدراسیون</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">موسسات</option>

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[150px] ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">انتخاب زیر مجموعه</span>
                    <div class=" mt-2">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب مجموعه</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">هولدینگ</option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className=" ">صندوق</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">سازمان</option>
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">بانک</option>
                            <option style={{fontFamily:'Shabnam'}} value="waiting" className=" ">معاونت</option>
                            <option style={{fontFamily:'Shabnam'}}  value="check" className=" ">شرکت ها</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">فدراسیون</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">موسسات</option>

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[150px] ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">انتخاب مامور اعزامی</span>
                    <div class=" mt-2">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب مامور</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className="flex">
                                <input type="checkbox"/>
                                <span style={{fontFamily:'Shabnam'}}>
                                    انتخاب همه
                                </span>
                            </option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className=" ">صندوق</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">سازمان</option>
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">بانک</option>
                            <option style={{fontFamily:'Shabnam'}} value="waiting" className=" ">معاونت</option>
                            <option style={{fontFamily:'Shabnam'}}  value="check" className=" ">شرکت ها</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">فدراسیون</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">موسسات</option>

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                </div>
            :null
         }

         <div className="w-full">
         <div className="mt-3">
                <label style={{fontFamily:'Shabnam'}} className="  text-base font-normal">
                <span style={{fontFamily:'Shabnam'}}   className="text-black">کارشناس امور بین الملل</span>                
                    <input style={{fontFamily:'Shabnam'}}
                    onChange={()=>setShowExpert(!showExpert)}
                        type="checkbox"
                        class="accent-mainColor w-4 mr-2 text-mainColor h-4 border-2 border-blue-500 rounded-sm bg-white outline-mainColor ml-2 "/>
               </label>
            </div>
         </div>
         {
            showExpert?
                <div className="w-full flex justify-between mt-4 mb-4">
                        <div className="flex flex-col w-[150px] ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">انتخاب کارشناس</span>
                    <div class=" mt-2">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب کارشناس</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">علی اسدی</option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className=" ">غلامرضا عطاردی</option>
                           

                        </select>
                 
                    </div>
                </div>
             
                </div>
            :null
         }

         <div className="w-full">
         <div className="mt-3">
                <label style={{fontFamily:'Shabnam'}} className="  text-base font-normal">
                <span style={{fontFamily:'Shabnam'}}   className="text-black">ناظر</span>                
                    <input style={{fontFamily:'Shabnam'}}
                    onChange={()=>setShowSupervisor(!showSupervisor)}
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-2"/>
               </label>
            </div>
         </div>
         {
            showSupervisor?
                <div className="w-full flex justify-between mt-4 mb-4">
                        <div className="flex flex-col w-[150px] ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">انتخاب ناظر</span>
                    <div class=" mt-2">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-[#CCCCCD] text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب ناظر</option>
                            <option  style={{fontFamily:'Shabnam'}}value="waiting" className=" ">علی اسدی</option>
                            <option  style={{fontFamily:'Shabnam'}}value="check" className=" ">غلامرضا عطاردی</option>
                           

                        </select>
                 
                    </div>
                </div>
             
                </div>
            :null
         }
            </div>
         
            <button style={{fontFamily:'Shabnam'}}
            onClick={()=>setShowAlert(true)}
                className=" mr-auto flex items-center justify-center px-4 h-12 bg-mainColor shadow-blueShadow  text-white text-xl font-base rounded-lg hover:bg-lightBlue hover:text-mainColor">
               <Message/>
               <span style={{fontFamily:'Shabnam'}} className="mr-2">
                ارسال پیام
               </span>
            </button>
            {
                showAlert ? 

                <>
                <div
                 className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
               >
                 <div className="relative w-[30%] my-5 mx-auto max-w-5xl md:w-[90%]">
                  
                 <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
           <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
           <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-green">
              پیام شما با موفقیت ارسال گردید !
             </span>
                <button onClick={()=>setShowAlert(false)}>
                <Cross stroke="#000"/>
                </button>
        
          
           </div>
           
           <div className="relative p-6 flex-auto">
             <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
         ،این پیام برای کاربران مشخص شده ارسال می شود.بعد از رسیدن زمان ارسال
             </p>
           </div>
          
       
         </div>
                 </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
               
              </>
              : null
            }
        </div>

    )
}
export default MessageForm;