import React,{useState} from "react";



const Signature = () =>{
const [showModal,setShowModal] = React.useState(false);
const [showAlert,setShowAlert] = React.useState(false);
    return (
        <div className="rounded-md  mt-7">
        
        <p style={{fontFamily:'Shabnam'}} className="font-IRsans font-bold text-black">
            تایید درخواست و بارگزاری امضاها
        </p>

        <div className="flex items-center my-5 flex-wrap">
            <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-black text-sm">این فرم از نظر 
              <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mx-2 font-bold">    آقای احمدی مسئول شماره یک  </span>
                مورد تایید  :
            </span>
            <div className="flex items-center flex-wrap">
            <div className=" mx-3">
                
                <div class="flex items-center flex-wrap md:mt-2">
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">هست</label>
       
            <input id="hast" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">نیست</label>
       
            <input id="nist" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-40 md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5  text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400 mr-2"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </div>
            </div>
            </div>
          

        </div>
        <div className="flex items-center my-5 flex-wrap">
            <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-black text-sm">این فرم از نظر 
              <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mx-2 font-bold">    آقای احمدی مسئول شماره یک  </span>
                مورد تایید  :
            </span>
            <div className="flex items-center flex-wrap">
            <div className=" mx-3">
                
                <div class="flex items-center flex-wrap md:mt-2">
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">هست</label>
       
            <input id="hast" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">نیست</label>
       
            <input id="nist" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-40 md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5  text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400 mr-2"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </div>
            </div>
            </div>
          

        </div>
        <div className="flex items-center my-5 flex-wrap">
            <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-black text-sm">این فرم از نظر 
              <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mx-2 font-bold">    آقای احمدی مسئول شماره یک  </span>
                مورد تایید  :
            </span>
            <div className="flex items-center flex-wrap">
            <div className=" mx-3">
                
                <div class="flex items-center flex-wrap md:mt-2">
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">هست</label>
       
            <input id="hast" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">نیست</label>
       
            <input id="nist" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-40 md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5  text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400 mr-2"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </div>
            </div>
            </div>
          

        </div>
        <div className="flex items-center my-5 flex-wrap">
            <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-black text-sm">این فرم از نظر 
              <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mx-2 font-bold">    آقای احمدی مسئول شماره یک  </span>
                مورد تایید  :
            </span>
            <div className="flex items-center flex-wrap">
            <div className=" mx-3">
                
                <div class="flex items-center flex-wrap md:mt-2">
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">هست</label>
       
            <input id="hast" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">نیست</label>
       
            <input id="nist" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-40 md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5  text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400 mr-2"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </div>
            </div>
            </div>
          

        </div>
        <div className="flex items-center my-5 flex-wrap">
            <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-black text-sm">این فرم از نظر 
              <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mx-2 font-bold">    آقای احمدی مسئول شماره یک  </span>
                مورد تایید  :
            </span>
            <div className="flex items-center ">
            <div className=" mx-3">
                
                <div class="flex items-center flex-wrap md:mt-2">
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">هست</label>
       
            <input id="hast" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <div class="">
        <div class="flex items-center pl-3">
        <label for="horizontal-list-radio-license" className="font-IRsans text-black  ml-4 text-sm">نیست</label>
       
            <input id="nist" type="radio" value="" name="list-radio" class="w-6 h-6 text-blue-600 bg-gray-100 border-borderGray focus:ring-mainColor "/>
        </div>
    </div>
    <label for="dropzone-file" class="mt-2 flex flex-col items-center justify-center w-40 md:w-full h-12 border-2 border-borderGray border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex items-center justify-center pt-5 pb-6 font-IRsans">
                <svg aria-hidden="true" class="w-5 h-5  text-[#B7B8BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p style={{fontFamily:'Shabnam'}} class="mb-0 text-xs text-gray-500 dark:text-gray-400 mr-2"><span style={{fontFamily:'Shabnam'}} class="font-normal font-IRsans ">انتخاب فایل</span></p>
               
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </div>
            </div>
            </div>
          

        </div>
        <div className="flex justify-end mt-10">
 
                    <button  onClick={() =>{setShowModal(true)}} className=" bg-[#3AB50E] hover:bg-white md:text-xs hover:text-[#3AB50E] hover:border-2 hover:border-[#3AB50E] w-auto px-3 py-2 rounded-md h-[40px] flex justify-center items-center text-white  font-IRsans font-medium text-base shadow-greenShadow">
                       آپلود امضا و تایید نهایی درخواست
                    </button>
        </div>
        {
            showModal ? 
            <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[30%] md:w-[90%] my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold font-IRsans text-green">
                    تایید درخواست
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm font-IRsans">
                        ارسال تایید درخواست با موفقیت انجام شد
                  </p>
                </div>
               
                <div className="flex items-center justify-center  border-solid border-slate-200 rounded-b mb-4">
                  <button
                    className=" float-left font-IRsans text-white flex bg-mainColor items-center rounded-md shadow-blueShadow uppercase px-12 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                  بستن
                   
                    
                  </button>
                  <button
                    className=" float-left font-IRsans text-black flex bg-transparent items-center rounded-md  uppercase px-3 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                اصلاح
                   
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
           </>
            :null
        }
           {
            showAlert ? 
            <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[20%] md:w-[90%] my-5 mx-auto max-w-3xl">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold font-IRsans text-black">
                   هشدار!
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm font-IRsans">
                  وضعیت نظر آقای احمدی مسئول شماره دو نا مشخض است !لطفا وضعیت را مشخص کنید سپس تایید یا رد خواست را انجام دهید.
                  </p>
                </div>
               
                <div className="flex items-center justify-center  border-solid border-slate-200 rounded-b mb-4">
                  <button
                    className=" float-left font-IRsans text-black flex bg-transparent items-center rounded-md shadow-blueShadow uppercase px-3 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                  بستن
                   
                    
                  </button>
                  <button
                    className=" float-left font-IRsans text-white flex bg-mainColor items-center rounded-md shadow-blueShadow uppercase px-3 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                 اصلاح
                   
                    
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
export default Signature;