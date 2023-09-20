import React from "react";

const RequestViewStep1 = ({data}) =>{

    return(
        <>
      
                    <div className="flex justify-between flex-wrap border-b border-dashed border-[#CCCCCD] pb-4">
                    <div className="w-full my-3">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           نام دستگاه اجرایی :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                                 {data?.executiveDeviceName}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           آدرس اینترنتی دستگاه اجرایی :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                                {data?.internetAddressOfTheExecutiveDevice}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                          کشور و شهر مقصد :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                           {data?.destinationCountry} / {data?.destinationCity}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                            مسیر پروازی :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                               {data?.flightPath}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           تاریخ و مدت سفر :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                                  از {data?.travelDateStart} لغایت {data?.travalEndDate}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                            مدت زمان سفر : 
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                                 {data?.travelTime} روز
                            </span>
                        </p>
                    </div>
                    <div className="w-[100%] my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                            موضوع سفر :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                                {data?.travelTopic}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                            اهداف سفر :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                               {data?.travelGoal?.travelGoalsType}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                          اهداف شغلی :  
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                                 {data?.jobGoal?.jobGoalsType}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           متولیان / شرکت کنندگان :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                             {data?.participant?.deviceNameType}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                          نوع گذرنامه :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              {data?.passportType?.passportType}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           آیا نیاز به یادداشت وزارت امورخارجه برای اخذ ویزا دارد؟
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              {data?.getVisa?"بله":"خیر"}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           آیا سفر مشترک بین چند دستگاه اجرایی است ؟
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              {data?.joinTrip?"بله":"خیر"}
                            </span>
                        </p>
                    </div>
                    <div className="w-full my-3 md:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           شماره،تاریخ نامه و مقام پیشنهاد دهنده داخلی دستگاه برای انجام سفر :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
{data?.dateLetter}
                            </span>
                        </p>
                    </div>
                </div>
        </>
    )
}

export default RequestViewStep1;