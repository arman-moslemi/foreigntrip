import React from "react";
import AgentRightMenu from "../../components/AgentRightMenu";

import {ReactComponent as Download} from "../../assets/icon/white/download.svg"


const UserReportsView = () =>{

    return(
        <div className="w-full h-screen  bg-lightGray py-10 px-20 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
        <AgentRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] xl:p-5 md:w-[95%] md:min-w-[95%] md:rounded-xl md:mx-auto">
            <div className="flex 2xs:flex-col 2xs:items-start  items-center justify-between">
                    
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor  font-bold">
                       مشاهده گزارش ارسال شده
                </span>
                <div className="bg-green text-white 2xs:flex 2xs:justify-center font-bold px-5 py-2 2xs:mt-4 2xs:mb-2 2xs:w-[100%] rounded-full">
                    <span style={{fontFamily:'Shabnam'}}>
                        تایید شده
                    </span>
                </div>
                </div>
                <div className="flex justify-between flex-wrap">
                <div className="w-full  my-3">
                    <p style={{fontFamily:'Shabnam'}} className="  text-base font-bold text-[#0D296E]">
                        نام و نام خانوادگی مامور یا مامورین :
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                             علی مرادزاده - تقی احمدزاده - مرتضی احمدی
                        </span>
                    </p>
                </div>
                <div className="w-[50%] xl-lg:w-[100%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className=" 2xs:grid text-base font-bold text-[#0D296E]">
                       شماره و تاریخ درخواست : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                             02/04/28 - 123
                        </span>
                    </p>
                </div>
                <div className="w-[50%] xl-lg:w-[100%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className=" 2xs:grid  text-base font-bold text-[#0D296E]">
                        شماره و تاریخ مجوز :
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                        02/04/28 - 123
                        </span>
                    </p>
                </div>
                <div className="w-[50%] xl-lg:w-[100%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className="  2xs:grid  text-base font-bold text-[#0D296E]">
                        تاریخ انجام سفر :
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                              02/12/12
                        </span>
                    </p>
                </div>
                <div className="w-[50%] xl-lg:w-[100%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className=" 2xs:grid text-base font-bold text-[#0D296E]">
                       آدرس الکترونیکی دستگاه مقصد : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                              info@mta.com
                        </span>
                    </p>
                </div>
                <div className="w-[50%] lg-md:w-[100%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className=" 2xs:grid  text-base font-bold text-[#0D296E]">
                        نام دستگاه داخلی : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                              وزارت نیرو
                        </span>
                    </p>
                </div>
                <div className="w-[50%] lg-md:w-[100%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className=" 2xs:grid text-base font-bold text-[#0D296E]">
                        نام دستگاه مقصد : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                             وزارت نیرو خارج
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className=" 2xs:grid text-base font-bold text-[#0D296E]">
                        کشور مقصد : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                             قراردادی
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className=" 2xs:grid text-base font-bold text-[#0D296E]">
                       کشور مقصد :  
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                              ایتالیا
                        </span>
                    </p>
                </div>
                <div className="w-[50%] my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className=" 2xs:grid text-base font-bold text-[#0D296E]">
                       شهر مقصد : 
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                            رم
                        </span>
                    </p>
                </div>
                <div className="w-full my-3 md:w-full">
                    <p style={{fontFamily:'Shabnam'}} className=" text-justify  text-base font-bold text-[#0D296E]">
                       خلاصه دستاورد سفر(اعم از مکان های مورد بازدید طرفها و مقامات ملاقات شونده موضوعات مطروحه توافقات بعمل آمده موارد کاربردی برای سایر دستگاه های ذیربط و ...) :
                        <span>   </span> 
                        <span style={{fontFamily:'Shabnam'}} className="text-darkGray text-sm font-medium">
                        این سفر شامل دستاوردهای مادی و معنوی زیادی بود از جمله مورد یک و مورد دو و مورد سه می باشد.
می توان به مورد یک و دو و سه اشاره کرد که حائز اهمیت است !
                        </span>
                    </p>
                </div>
                <div className="w-full flex justify-end 2xs:w-[100%]">
                  <button className="bg-mainColor rounded-xl shadow-blueShadow px-5 py-3  flex justify-center items-center text-white font-bold 2xs:w-[100%]" style={{fontFamily:'Shabnam'}}>
                    <Download className="w-[30px]"/>
                    <span className="mr-2">
                      دانلود گزارش pdf
                    </span>
                  </button>
                </div>
            </div>
            </div>
        </div>
    </div> 
    )
}
export default UserReportsView;

/*responsive--done*/