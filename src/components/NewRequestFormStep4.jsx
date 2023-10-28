import React, { useState, useEffect } from "react";
import { DatePicker } from "zaman";
import './components.css';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { axiosReq } from "../commons/axiosReq";
import { useNavigate, useParams } from "react-router-dom";

const NewRequestFormStep4 = () => {
  const [showSuccessModal,
    setShowSuccessModal] = React.useState(false);
  const id = useParams().id;
  const [allValues, setAllValues] = useState({

    ActivityRecords: "",
    Results: "",
    Discription: "",
    ExternalDeviceNameAndEmail: "",
    DelayReason: "",

  });
  const [allValuesError, setAllValuesError] = useState({

    ActivityRecords: false,
    Results: false,
    Discription: false,
    ExternalDeviceNameAndEmail: false,
    DelayReason: false,

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
      if (e.target.value != "") {

        setAllValuesError({ ...allValuesError, [e.target.name]: false })
      }
      else {
        setAllValuesError({ ...allValuesError, [e.target.name]: true })

      }

      setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

  }
  const blurHandler = e => {
    if (e.target) {
      if (e.target.value == "") {

        setAllValuesError({ ...allValuesError, [e.target.name]: true })
      }


    }
  }
  const
    allFull = (obj) => {
      const updatedState = {};
      var result = true;
      for (var o in obj) {
        if (obj[o] == "") {
          updatedState[o] = true;


          setAllValuesError({ ...allValuesError, ...updatedState })
          result = false;
        }

      }
      console.log(allValuesError)
      return result
    }
  const updateReq4 = async () => {
    console.log("req")
    console.log(allValues)
    var res = allFull(allValues)
    const cookies = new Cookies();
    if (res) {
      const dataUser = await axiosReq("Request/UpdateRequest4", {
        RequestId: id,
        ActivityRecords: allValues?.ActivityRecords,
        Results: allValues?.Results,
        Discription: allValues?.Discription,
        ExternalDeviceNameAndEmail: allValues?.ExternalDeviceNameAndEmail,
        DelayReason: allValues?.DelayReason,


      });
      console.log(dataUser)
      if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {

        navigate("/newRequestStep5/" + id)

      }
      else {
        alert("اطلاعات ورودی نادرست می باشند")
      }
    }
    else {
      console.log(allValuesError)
      alert("اطلاعات ورودی را وارد نمایید")

    }


  }

  return (
    <div>
      <p style={{ fontFamily: 'Shabnam' }} className="text-xl text-mainColor font-bold mt-3.5 mb-10 ">گام 4 - توضیحات سفر</p>
      <div className="flex w-full flex-wrap">
        <div className="flex flex-col w-[100%]  mb-7">
          <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold  md:text-sm">سوابق فعالیت ها، مدرک علمی و توانمندی مامور، مرتبط با موضوع ماموریت :</span>
          <div class="mt-2">
            <textarea style={{ fontFamily: 'Shabnam' }}
              rows={5}
              type="text"
              onChange={changeHandler}
              onBlur={blurHandler}
              name="ActivityRecords"
              id="input-group-1"
              class={`pr-4   text-right right-6 bg-white border ${allValuesError.ActivityRecords ? "border-[#ff0000]" : "border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5 `}
              placeholder="شرح را اینجا بنویسید"></textarea>
          </div>
          {
            allValuesError.ActivityRecords ?
              <span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
                لطفا فیلد را وارد نمایید !
              </span>
              :
              null
          }
        </div>
        <div className="flex flex-col w-[100%]  mb-7">
          <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold  md:text-sm">نتایج قابل پیش بینی : (حداکثر در ۵ سطر)</span>
          <div class="mt-2">
            <textarea style={{ fontFamily: 'Shabnam' }}
              rows={5}
              type="text"
              onChange={changeHandler}
              onBlur={blurHandler}
              name="Results"
              id="input-group-1"
              class={`pr-4   text-right right-6 bg-white border ${allValuesError.Results ? "border-[#ff0000]" : "border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5 `}
              placeholder="شرح را اینجا بنویسید"></textarea>
          </div>
          {
            allValuesError.Results ?
              <span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
                لطفا فیلد را وارد نمایید !
              </span>
              :
              null
          }
        </div>
        <div className="flex flex-col w-[100%]  mb-7">
          <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold  md:text-sm">شرح سطح بین المللی، جایگاه درون کشوری، میزان اعتبار جهانی طرف خارجی که شامل ملاقات شوندگان، اماکن مورد بازدید و طرف قرارداد ها، شرکت ها و سازمان ها میباشد.</span>
          <div class="mt-2">
            <textarea style={{ fontFamily: 'Shabnam' }}
              rows={5}
              type="text"
              onChange={changeHandler}
              onBlur={blurHandler}
              name="Discription"
              id="input-group-1"
              class={`pr-4   text-right right-6 bg-white border ${allValuesError.Discription ? "border-[#ff0000]" : "border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  `}
              placeholder="شرح را اینجا بنویسید"></textarea>
          </div>
          {
            allValuesError.Discription ?
              <span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
                لطفا فیلد را وارد نمایید !
              </span>
              :
              null
          }
        </div>
        <div className="flex flex-col w-[49%] 2xl:w-[100%] 2xl:mx-0 ml-[2%]  mb-7">
          <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold  md:text-sm">نام وآدرس اینترنتی دستگاه های خارجی مرتبط با سفر در کشور مقصد:</span>
          <div class="mt-2">
            <textarea style={{ fontFamily: 'Shabnam' }}
              rows={5}
              type="text"
              onChange={changeHandler}
              onBlur={blurHandler}
              name="ExternalDeviceNameAndEmail"
              id="input-group-1"
              class={`pr-4   text-right right-6 bg-white border ${allValuesError.ExternalDeviceNameAndEmail ? "border-[#ff0000]" : "border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  `}
              placeholder="شرح را اینجا بنویسید"></textarea>
          </div>
          {
            allValuesError.ExternalDeviceNameAndEmail ?
              <span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
                لطفا فیلد را وارد نمایید !
              </span>
              :
              null
          }
        </div>
        <div className="flex flex-col w-[49%] 2xl:w-[100%] 2xl:mx-0   mb-7">
          <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold  md:text-sm">در صورت تاخیر در ارسال درخواست و یا آنی بودن موضوع علت را ذکر نمایید.</span>
          <div class="mt-2">
            <textarea style={{ fontFamily: 'Shabnam' }}
              rows={5}
              type="text"
              onChange={changeHandler}
              onBlur={blurHandler}
              name="DelayReason"
              id="input-group-1"
              class={`pr-4   text-right right-6 bg-white border ${allValuesError.DelayReason ? "border-[#ff0000]" : "border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full  p-2.5  `}
              placeholder="شرح را اینجا بنویسید"></textarea>
          </div>
          {
            allValuesError.DelayReason ?
              <span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
                لطفا فیلد را وارد نمایید !
              </span>
              :
              null
          }
        </div>






      </div>
      <div className="flex justify-end md:block">
        <Link
          to={'/newRequestStep3/' + id}
          style={{ fontFamily: 'Shabnam' }}
          className="w-40 h-12 flex justify-center items-center mt-20 md:mt-2 bg-midGray shadow-blackShadow   text-white text-xl font-normal rounded-lg hover:bg-lightGray hover:text-darkGray">
          گام قبلی
        </Link>
        <button
          onClick={() => updateReq4()}
          style={{ fontFamily: 'Shabnam' }}
          className="w-40 h-12 mt-20 justify-center items-center md:mr-0 md:mt-4 flex mr-4 bg-mainColor shadow-blueShadow   text-white text-xl font-normal rounded-lg hover:bg-lightBlue hover:text-mainColor">
          گام بعدی
        </button>
      </div>
      {/* {showSuccessModal ?
           <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[70%] my-5 mx-auto max-w-3xl md:w-[100%]">
             
              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-green">
                    ملاحظات
                  </span>
               
                </div>
                
                <div className="relative p-6 flex-auto">
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۱.قبل از انجام سفر پس از صدور مجوز موافقت با سفر می بایستی مواردی که قطعیت یافته و با علامت مشخص شده است توسط دستگاه تکمیل و مجددا جهت صدور مجوز خروج از کشور(صرفا از بعد نظارت بر سفر های خارجی کارکنان دولت می باشد و فاقد هرگونه ارزش دیگری جهت ارائه به سازمان های دیگر می باشد) ارائه شود.
                  </p>
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۲-بعد از انجام سفر تجربیات حاصل از سفر می بایستی بر روی پورتال اینترنتی دستگاه گذاشته شده (حداکثر در ۱۰ سطر )به اطلاع کارگروه برسد                  </p>
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۳-در صورت هرگونه تغییری در کلیه موارد فوق الذکر قبل یا بعد از انجام سفر بلافاصله به کارگروه داخلی اطلاع رسانی شود.</p>               
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۴-در صورت محرمانه بودن سفر با موضوع یا هر مورد دیگر الزام به تکمیل آن بخش نمایید.                  </p>   
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۵-در صورتی که تامین هزینه ها از طرف بخش خصوصی می باشد.نام بخش خصوصی و علت تامین هزینه ها توضیح داده می شود.             </p>              
                  <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
                  ۶-در صورتی که تامین هزینه ها توسط دستگاه است محل تامین ارزی و ریالی آن را ذکر نمایید.            </p>              
                
                </div>
               
                <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                  <Link
                  style={{fontFamily:'Shabnam'}}
                    className="text-white   rounded-sm shadow-blueShadow float-left bg-mainColor font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => updateReq()}
                  >
                    ثبت درخواست
                  </Link>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          
           </>
           :null
        }    */}
    </div>

  )
}
export default NewRequestFormStep4;