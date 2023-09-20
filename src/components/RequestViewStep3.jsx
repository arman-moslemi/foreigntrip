import React from "react";

const RequestViewStep3 = ({data}) =>{

    return(
        <>
      
                    <div className="flex justify-between flex-wrap border-b border-dashed border-[#CCCCCD] pb-4">
                    <div className="w-full my-3">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           نوع اقامت : 
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           هزینه اقامت بر عهده :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            {data?.payerCitizenShip}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        میزان هزینه :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                          {data?.amountOfCost} دلار
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           هزینه غذا بر عهده : 
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            {data?.payerFood}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                          میزان هزینه : 
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            {data?.costOfFood}
 دلار
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                          نوع بلیط رفت و برگشت :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                               {data?.tickerTypeId}
                            </span>
                        </p>
                    </div>
                    <div className="w-[100%] my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           شرکت هواپیمایی :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              {data?.airlineCompany}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                          هزینه بلیط بر عهده :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              {data?.ticketCost}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                          میزان هزینه : 
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            {data?.theCostOfTicket} دلار
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                          حق ماموریت :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              {data?.rightOfMission?.rightOfMissionType}
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                         میزان حق ماموریت : 
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                           {data?.levelRightOfMission} : {data?.expertRightOfMission} دلار
                            </span>
                        </p>
                    </div>
                    <div className=" mx-1 my-3 w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                          حق آموزش : 
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                             هزینه آموزش توسط {data?.rightToEducation?.rightToEducationType} پرداخت می شود.میزان هزینه : {data?.rightToEducationCost} دلار
                            </span>
                        </p>
                    </div>
                    <div className=" mx-1 my-3 w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           حق ایاب و ذهاب : 
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                              بر عهده {data?.rightOfCommuting?.rightOfCommutingType} : {data?.rightOfCommutingCost} دلار
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           ویزا :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                         {data?.visaCost} دلار
                            </span>
                        </p>
                    </div>
                    <div className="w-[48%] mx-1 my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                           عوارض خروج :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                            {data?.tollAmount?.tollAmountType}:{data?.tollAmountCost}
                            </span>
                        </p>
                    </div>
                    <div className="w-full my-3 lg:w-full">
                        <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                         پرداخت از طریق سیستم بانکی :
                            <span>   </span> 
                            <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                           {data?.paymentFromBank}
                            </span>
                        </p>
                    </div>
                </div>
        </>
    )
}

export default RequestViewStep3;