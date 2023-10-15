import React, { useState, useEffect } from "react";
import { DatePicker } from "zaman";
import './components.css';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import { axiosReq } from "../commons/axiosReq";
import { useNavigate, useParams } from "react-router-dom";
const NewRequestFormStep3 = () => {
    const [showSuccessModal,
        setShowSuccessModal] = React.useState(false);
        const id = useParams().id;
        const [allValues, setAllValues] = useState({
    
            PayerCitizenShip: "",   
            AmountOfCost :  "",
            PayerFood:  "",
            CostOfFood :  "",
            TickerTypeId :  "",
            AirlineCompany :  "",
            TicketCost:  "",
            TheCostOfTicket :  "",
            RightOfMissionId :  "",
            ManagerRightOfMission :  "",
            GeneralManagerRightOfMission :  "",
            ExpertRightOfMission:  "",
            RightToEducationCost :  "",
            RightToEducationId :  "",
            RightOfCommutingCost :  "",
            RightOfCommutingId :  "",
            VisaCost :  "",
            TollAmountCost :  "",
            TollAmountId:  "",
            PaymentFromBank :  "",
        });
        let navigate = useNavigate();
    
        useEffect(() => {
    
            auth();
        }, []);
        const auth = async () => {
            const cookies = new Cookies();
            var token = cookies.get('token');
            console.log(token)
            if (!token) {
             navigate("/");
            } else {
                if (cookies.get('Role') == "Agent") {
    
                }
                else {
             navigate("/");
    
                }
            }
        }
        const changeHandler = e => {
          if (e.target) {
  
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
          }
  
      }
      const updateReq= async () => {
          console.log("req")
          console.log(allValues)
          const cookies = new Cookies();
          const dataUser = await axiosReq("Request/UpdateRequest3", {
            RequestId:id,
            TypeAccommodationId:allValues?.TypeAccommodationId,
            PayerCitizenShip: allValues?.PayerCitizenShip,   
            AmountOfCost :  allValues?.AmountOfCost,
            PayerFood:  allValues?.PayerFood,
            CostOfFood : allValues?.CostOfFood,
            TickerTypeId :  allValues?.TickerTypeId,
            AirlineCompany :  allValues?.AirlineCompany,
            TicketCost:  allValues?.TicketCost,
            TheCostOfTicket :  allValues?.TheCostOfTicket,
            RightOfMissionId :  allValues?.RightOfMissionId,
            ExpertRightOfMission:  allValues?.ExpertRightOfMission,
            ManagerRightOfMission:  allValues?.ManagerRightOfMission,
            GeneralManagerRightOfMission:allValues?.GeneralManagerRightOfMission,
            RightToEducationCost :  allValues?.RightToEducationCost,
            RightToEducationId : allValues?.RightToEducationId,
            RightOfCommutingCost :  allValues?.RightOfCommutingCost,
            RightOfCommutingId :  allValues?.RightOfCommutingId,
            VisaCost :  allValues?.VisaCost,
            TollAmountCost :  allValues?.TollAmountCost,
            TollAmountId:  allValues?.TollAmountId,
            PaymentFromBank :  allValues?.PaymentFromBank,
          });
          console.log(dataUser)
          if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
  
              navigate("/newRequestStep4/"+id)
  
          }
          else {
              alert("اطلاعات ورودی نادرست می باشند")
          }
  
      }
    return (
        <div>
          <p style={{fontFamily: 'Shabnam'}} className="text-xl text-mainColor font-bold mt-3.5 mb-8 ">گام 3 - اطلاعات تکمیلی</p>
            <div className="flex w-full flex-wrap">
            <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold   mb-4">نوع اقامت</span>
                <div className="flex flex-wrap w-[100%] mb-4">
                  <div className="ml-10 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        value={"1"}          
                        onChange={changeHandler}
                        name="TypeAccommodationId"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      هتل 3 ستاره
                    </label>
                  </div>
                  <div className="ml-10 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        value={"2"}          
                        onChange={changeHandler}
                        name="TypeAccommodationId"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      هتل 4 ستاره
                    </label>
                  </div>
                  <div className="ml-10 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        value={"3"}          
                        onChange={changeHandler}
                        name="TypeAccommodationId"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      هتل 5 ستاره 
                    </label>
                  </div>
                  <div className="ml-10 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        value={"4"}          
                        onChange={changeHandler}
                        name="TypeAccommodationId"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      مکان متعلق به دستگاه خارجی
                    </label>
                  </div>
                  <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        value={"5"}          
                        onChange={changeHandler}
                        name="TypeAccommodationId"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      مکان متعلق به دستگاه داخلی
                    </label>
                  </div>
                  

                </div>
                <div className="flex flex-col w-[30%] 2xl:w-[49%] sm-xs:w-[100%] sm-xs:mx-0  2xl:mr-0 2xl:ml-[1%] ml-[2.5%] mb-10 ">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">هزینه اقامت بر عهده</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="PayerCitizenShip"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="هزینه اقامت بر عهده"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] 2xl:w-[49%] sm-xs:w-[100%] sm-xs:mx-0 2xl:ml-0 2xl:mr-[1%] mr-[2.5%] ml-[35%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">میزان هزینه</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="AmountOfCost"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="میزان هزینه"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] 2xl:w-[49%] sm-xs:w-[100%] sm-xs:mx-0 2xl:mr-0 2xl:ml-[1%] ml-[2.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">هزینه غذا به عهده</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="PayerFood"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="هزینه غذا به عهده"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] 2xl:w-[49%] sm-xs:w-[100%] sm-xs:mx-0 2xl:ml-0 2xl:mr-[1%] mr-[2.5%] ml-[35%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">میزان هزینه غذا</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="CostOfFood"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="میزان هزینه غذا"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] 2xl:w-[49%] lg-md:w-[100%] lg-md:mx-0 2xl:mr-0 2xl:ml-[1%] ml-[2.5%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">نوع بلیط رفت و برگشت</span>
                    <div class="mt-6 flex md:block">
                    <div className="ml-5 mb-4">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        onChange={changeHandler}
                        name="TickerTypeId"
                        value={"1"}
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      Business
                    </label>
                  </div>
                  <div className="mr-10 mb-4 md:mr-0">
                    <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center">
                    <input style={{fontFamily:'Shabnam'}}
                        type="checkbox"
                        onChange={changeHandler}
                        name="TickerTypeId"
                        value={"2"}
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1.5"/>
                      Economic 
                    </label>
                  </div>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] 2xl:w-[49%] lg-md:w-[100%] lg-md:mx-0 2xl:ml-0 2xl:mr-[1%]  mr-[2.5%] ml-[35%] mb-12">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">شرکت هواپیمایی</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="AirlineCompany"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="نام شرکت هواپیمایی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] 2xl:w-[49%] sm-xs:w-[100%] sm-xs:mx-0 2xl:mr-0 2xl:ml-[1%] ml-[2.5%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">هزینه بلیط بر عهده</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="TicketCost"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="هزینه بلیط بر عهده"/>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] 2xl:w-[49%] sm-xs:w-[100%] sm-xs:mx-0 2xl:ml-0 2xl:mr-[1%] mr-[2.5%] ml-[35%] mb-10">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">میزان هزینه بلیط</span>
                    <div class="mt-2">
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="TheCostOfTicket"
                            class="font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                            placeholder="میزان هزینه بلیط"/>
                    </div>
                </div>
                <div className="flex flex-col w-[35%] 2xl:w-[49%] 2xl:mr-0 2xl:ml-[1%] xl:w-[100%] xl:mx-0 ml-[2.5%] mb-16">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">حق ماموریت</span>
                    <div class="mt-5 flex-col">
                        <div className="flex items-center">
                          <input                          
                             onChange={changeHandler}
                            name="RightOfMissionId" value={"1"}className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-3" type="checkbox"  id="InWith" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">با دریافت حق ماموریت از دستگاه داخلی</label>
                        </div>
                        <div className="flex items-center mt-4">
                          <input                   value={"2"}          onChange={changeHandler}
                            name="RightOfMissionId"
                            className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-3" type="checkbox"  id="InWithout" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بدون دریافت حق ماموریت از دستگاه داخلی</label>
                        </div>
                        <div className="flex items-center mt-4">
                          <input           value={"3"}                  onChange={changeHandler}
                            name="RightOfMissionId"className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-3" type="checkbox"  id="OutWith" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">با دریافت حق ماموریت از دستگاه خارجی</label>
                        </div>
                        <div className="flex items-center mt-4">
                          <input                   value={"4"}          onChange={changeHandler}
                            name="RightOfMissionId"className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-3" type="checkbox" id="OutWithout" />
                          <label style={{fontFamily: 'Shabnam'}} className="" For="a1">بدون دریافت حق ماموریت از دستگاه خارجی</label>
                        </div>
                          
                    </div>
                </div>
                <div className="flex flex-col w-[45%] 2xl:w-[49%] 2xl:ml-0 2xl:mr-[1%] xl:w-[100%] xl:mx-0 mr-[2.5%] ml-[15%] mb-16">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">میزان حق ماموریت</span>
                    <div class="mt-5 flex-col w-[100%] md:block">
                      <div className="flex items-center lg:flex-col lg:items-start lg:mb-6   w-[100%]">
                        <div className="flex justify-start  ">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[7px] lg:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightToEducationId"
                          value={"1"}
                          class="accent-mainColor w-4   h-4 border-2 border-mainColor outline-mainColor ml-4 "/>
                           کارشناس :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="RightToEducationCost"
                            
                            class="text-right h-[32px] w-[46%] xl:w-[28%] lg:w-[44%] lg:mr-7 sm-xs:w-[90%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center lg:flex-col lg:items-start mt-3 w-[100%] lg:mb-6">
                        <div className="flex justify-start md:block">
                          <label style={{fontFamily:'Shabnam'}} className="w-[100%] text-base font-normal flex items-center ml-[37px] lg:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightToEducationId"
                          value={"2"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                           مدیر :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="RightToEducationCost"
                            class=" text-right h-[32px] w-[46%] xl:w-[28%] lg:w-[44%] lg:mr-7 sm-xs:w-[90%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center lg:flex-col lg:items-start mt-3 w-[100%]">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[14px] lg:mb-3 sm-xs:ml-0">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightToEducationId"
                          value={"3"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            مدیر کل :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="RightToEducationCost"
                            class="text-right h-[32px] w-[46%] xl:w-[28%] lg:w-[44%] lg:mr-7 sm-xs:w-[90%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[100%]  mb-11 md:block">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">حق آموزش</span>
                    <div class="mt-5 flex-col w-[100%] md:block">
                      <div className="flex items-center lg:flex-col lg:items-start lg:mb-6   w-[100%]">
                        <div className="flex justify-start  ">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[46px] lg:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightToEducationId"
                          value={"1"}
                          class="accent-mainColor w-4   h-4 border-2 border-mainColor outline-mainColor ml-4 "/>
                            هزینه آموزش توسط متقاضی پرداخت می شود. میزان هزینه :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="RightToEducationCost"
                            
                            class="text-right h-[32px] w-[16%] xl:w-[28%] lg:w-[44%] lg:mr-7 sm-xs:w-[90%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center lg:flex-col lg:items-start mt-3 w-[100%] lg:mb-6">
                        <div className="flex justify-start md:block">
                          <label style={{fontFamily:'Shabnam'}} className="w-[100%] text-base font-normal flex items-center ml-[7px] lg:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightToEducationId"
                          value={"2"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            هزینه آموزش توسط دستگاه داخلی پرداخت می شود. میزان هزینه :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="RightToEducationCost"
                            class=" text-right h-[32px] w-[16%] xl:w-[28%] lg:w-[44%] lg:mr-7 sm-xs:w-[90%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center lg:flex-col lg:items-start mt-3 w-[100%]">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[58px] lg:mb-3 sm-xs:ml-0">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightToEducationId"
                          value={"3"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                             با توجه به پرداخت حق عضویت بین المللی هزینه ای ندارد.
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="RightToEducationCost"
                            class="text-right h-[32px] w-[16%] xl:w-[28%] lg:w-[44%] lg:mr-7 sm-xs:w-[90%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[100%] md:block 3xl:w-[100%]  mb-11">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">حق ایاب و ذهاب </span>
                    <div class="mt-5 flex-col w-[100%]">
                      <div className="flex items-center sm-xs:flex-col sm-xs:items-start w-[100%] sm-xs:mb-6">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[17px] sm-xs:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightOfCommutingId"
                          value={"1"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            بر عهده دستگاه اجرایی . میزان هزینه :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="text-right h-[32px] w-[36%] sm-xs:w-[90%] sm-xs:mr-7 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center sm-xs:flex-col sm-xs:items-start mt-3 w-[100%] sm-xs:mb-6">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[7px] sm-xs:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightOfCommutingId"
                          value={"1"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            بر عهده شخص می باشد . میزان هزینه :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="RightOfCommutingCost"
                            class="text-right h-[32px] w-[36%] sm-xs:w-[90%] sm-xs:mr-7 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center sm-xs:flex-col sm-xs:items-start mt-3 w-[100%]">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[69px] sm-xs:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightOfCommutingId"
                          value={"1"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                             بر عهده طرف خارجی می باشد.
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="RightOfCommutingCost"
                            class="text-right h-[32px] w-[36%] sm-xs:w-[90%] sm-xs:mr-7 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[100%] mx-0 mb-11">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">ویزا</span>
                    <div class="mt-5 flex-col w-[100%]">
                      <div className="flex items-center lg-md:flex-col lg-md:items-start w-[100%] sm-xs:mb-6">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[7px] lg-md:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                                هزینه ویزا توسط دستگاه پرداخت می شود . هزینه اخذ ویزا:
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="VisaCost"
                            class="text-right h-[32px] w-[22%] lg-md:w-[44%] lg-md:mr-7 sm-xs:w-[90%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center mt-3 w-[100%]">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="RightOfCommutingCost"
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            هزینه ویزا ندارد.
                          </label>
                        </div>


                      </div>
                      
                        
                    </div>
                </div>
                <div className="flex flex-col w-[100%]  mb-14">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">عوارض خروج </span>
                    <div class="mt-5 flex-col w-[100%]">
                      <div className="flex items-center  w-[100%] sm-xs:mb-6 ">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="TollAmountId"
                          value={"1"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                            با توجه به اینکه گذرنامه دولتی است عوارض خروج ندارد.
                          </label>
                        </div>
                        


                      </div>
                      <div className="flex items-center sm-xs:flex-col sm-xs:items-start mt-3 w-[100%] sm-xs:mb-6">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[56px] sm-xs:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="TollAmountId"
                          value={"2"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                           بر عهده شخص . مبلغ عوارض :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="TollAmountCost"
                            class="text-right h-[32px] w-[16%] xl:w-[32%] sm-xs:w-[90%] sm-xs:mr-7 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                      <div className="flex items-center sm-xs:flex-col sm-xs:items-start mt-3 w-[100%]">
                        <div className="flex justify-start">
                          <label style={{fontFamily:'Shabnam'}} className="text-base font-normal flex items-center ml-[7px] sm-xs:mb-3 sm-xs:ml-0 ">
                          <input style={{fontFamily:'Shabnam'}}
                          type="checkbox"
                          onChange={changeHandler}
                          name="TollAmountId"
                          value={"3"}
                          class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-4"/>
                             بر عهده دستگاه متبوعه. مبلغ عوارض :
                          </label>
                        </div>
                        <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="TollAmountCost"
                            class="text-right h-[32px] w-[16%] xl:w-[32%] sm-xs:w-[90%] sm-xs:mr-7 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />


                      </div>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[100%]  mb-14">
                    <span style={{fontFamily: 'Shabnam'}} className="text-base font-bold  ">پرداخت از طریق سیستم بانکی</span>
                    <div class="mt-5  w-[100%]">
                    <input style={{fontFamily: 'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            name="PaymentFromBank"
                            class="text-right h-[32px] w-[40%] lg-md:w-[55%] sm-xs:w-[100%] bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor px-2.5"
                            />
                      
                        
                    </div>
                </div>
                
            </div>
            <div className="flex justify-end">
            <Link to={'/newRequestStep2'}
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 mt-20  flex justify-center items-center bg-midGray shadow-blackShadow   text-white text-xl font-normal rounded-lg hover:bg-lightGray hover:text-darkGray">
                گام قبلی
            </Link>
            <button
            onClick={()=>updateReq()}
                style={{fontFamily: 'Shabnam'}}
                className="w-40 h-12 mt-20 mr-4 flex justify-center items-center bg-mainColor shadow-blueShadow   text-white text-xl font-normal rounded-lg hover:bg-lightBlue hover:text-mainColor">
                گام بعدی
            </button>
            </div>

        </div>

    )
}
export default NewRequestFormStep3;