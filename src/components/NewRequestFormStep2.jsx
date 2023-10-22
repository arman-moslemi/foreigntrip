import React, { useState, useEffect } from "react";
import { DatePicker } from "zaman";
import './components.css';
import { Link } from "react-router-dom";
import NewRequestFormStep2Table from "./NewRequestFormStep2Table";
import Cookies from 'universal-cookie';
import { axiosReq } from "../commons/axiosReq";
import { useNavigate, useParams } from "react-router-dom";
const NewRequestFormStep2 = () => {
    const [showSuccessModal,
        setShowSuccessModal] = useState(false);
    const [data, setData] = useState();
    const [position, setPosition] = useState();
    const [reCheck, setRecheck] = useState(false);
    const id = useParams().id;
    const [allValues, setAllValues] = useState({

        EmployeeName: "",

        EmployeeFamily: "",

        EmployeeFatherName: "",

        BirthCertificationNumber: "",

        NationalCode: "",

        BirthCertificationDate: "",

        GenderId: "",

        MaritalStatusId: "",

        Degree: "",

        FieldOfStudy: "",

        LanguageId: "",

        Mobile: "",

        Phone: "",

        PassPortTypeId: "",

        WorkExperience: "",

        JobLocation: "",

        PositionId: "",

        EmployeeStatus: ""
    });
    const [allValuesError, setAllValuesError] = useState({

        EmployeeName: false,

        EmployeeFamily: false,

        EmployeeFatherName: false,

        BirthCertificationNumber: false,

        NationalCode: false,

        BirthCertificationDate: false,

        GenderId: false,

        MaritalStatusId: false,

        Degree: false,

        FieldOfStudy: false,

        LanguageId: false,

        Mobile: false,

        Phone: false,

        PassPortTypeId: false,

        WorkExperience: false,

        JobLocation: false,

        PositionId: false,

        EmployeeStatus: false
      });
    let navigate = useNavigate();

    useEffect(() => {

        auth();
    }, [reCheck]);
    const auth = async () => {
        const cookies = new Cookies();
        var token = cookies.get('token');
        console.log(token)
        if (!token) {
            navigate("/");
        } else {
            if (cookies.get('Role') == "Agent") {
                GetData()

            }
            else {
             navigate("/");

            }
        }
    }
    const fixNumbers = function (str) {
        var
            persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
            arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]
        if (typeof str === 'string') {
            for (var i = 0; i < 10; i++) {
                str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
            }
        }
        return str;
    };
    const formatDateTime = (sDate) => {
        console.log(sDate)
        var lDate = new Date(sDate).toLocaleDateString('fa-IR');
        console.log(555)
        console.log(lDate)
        var d = fixNumbers(lDate.split('/')[2]);
        var dd = d < 10 ? '0' + d : d;
        var yyyy = fixNumbers(lDate.split('/')[0]);
        var mon = fixNumbers(lDate.split('/')[1]);
        var mm = (mon < 10 ? '0' + mon : mon);


        return yyyy + '/' + mm + '/' + dd;


    }
    const GetData = async () => {
        console.log(1234)



        const dataUser = await axiosReq("Request/GetRequestEmployee", {
            RequestId: id
        });
        console.log(dataUser)
        setData(dataUser?.data)

            const dataPosition = await axiosReq("Agents/GetPositions");
            setPosition(dataPosition)
            console.log(dataPosition)
           
            
        
         


    }
    const changeHandler = e => {
        if (e.target) {
            if(e.target.value!=""){

                setAllValuesError({ ...allValuesError, [e.target.name]: false })
              }
              else{
                setAllValuesError({ ...allValuesError, [e.target.name]: true })
            
              }

            setAllValues({ ...allValues, [e.target.name]: e.target.value })
        }

    }
    const blurHandler = e => {
        if(e.target)    {
          if(e.target.value==""){
        
            setAllValuesError({ ...allValuesError, [e.target.name]: true })
          }
        
        
        }
      
        }

        const 
    allFull=(obj)=>
    {
      const updatedState = {};
      var result =true;
      for(var o in obj){
        if(obj[o]==""){
          updatedState[o] = true;


          setAllValuesError({ ...allValuesError, ...updatedState})
result=false;
        }
          
      }
      console.log(allValuesError)
return result        
    }

    const insertEmployee = async () => {
        console.log("req")
        console.log(allValues)
       var res= allFull(allValues)
        const cookies = new Cookies();
        if(res  )
        {
        const dataUser = await axiosReq("Request/InsertRequestEmployee", {
RequestId:id,
            EmployeeName: allValues?.EmployeeName,

            EmployeeFamily: allValues?.EmployeeFamily,

            EmployeeFatherName: allValues?.EmployeeFatherName,

            BirthCertificationNumber: allValues?.BirthCertificationNumber,

            NationalCode: allValues?.NationalCode,

            BirthCertificationDate: allValues?.BirthCertificationDate,

            GenderId: allValues?.GenderId,

            MaritalStatusId: allValues?.MaritalStatusId,

            Degree: allValues?.Degree,

            FieldOfStudy: allValues?.FieldOfStudy,

            LanguageId: allValues?.LanguageId,

            Mobile: allValues?.Mobile,

            Phone: allValues?.Phone,

            PassPortTypeId: allValues?.PassPortTypeId,

            WorkExperience: allValues?.WorkExperience,

            JobLocation: allValues?.JobLocation,

            PositionId: allValues?.PositionId,
            

            EmployeeStatus: allValues?.EmployeeStatus
        });
        console.log(dataUser)
        if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
setRecheck(!reCheck)
            // navigate("/newRequestStep3/"+id)

        }
        else {
            alert("اطلاعات ورودی نادرست می باشند")
        }
    }
    else{
        console.log(allValuesError)
        alert("اطلاعات ورودی را وارد نمایید")

       }

    }
    return (
        <div>
            <p style={{ fontFamily: 'Shabnam' }} className="text-xl xs:text-base xs:font-bold text-mainColor font-normal mt-3.5 mb-8 ">گام 2 - فهرست اسامی و مشخصات ماموران اعزامی</p>
            <div className="flex w-full flex-wrap">
            <div className="flex flex-col w-[32%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:mr-0 xl:ml-[1%] ml-[1.5%] mb-7">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">کد ملی</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="number"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="NationalCode"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.NationalCode?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="کد ملی" />
                    </div>
                    {
allValuesError.NationalCode?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[31.5%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:ml-0 xl:mr-[1%] mx-[1%] mb-7">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">تاریخ تولد</span>
                    <div >

                        <div class="mt-2 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full" id="StartDate">
                            <DatePicker style={{ fontFamily: 'Shabnam' }} placeholder=""
                                name="BirthCertificationDate"
                                onChange={(e)=>
                                    {                  setAllValues({ ...allValues,BirthCertificationDate:formatDateTime(e.value)});
                                    setAllValuesError({...allValuesError,BirthCertificationDate:false})
                                    }                } />
                            {/* <input style={{fontFamily: 'Shabnam'}}
                                type="text"
                                id="input-group-1"
                                class="   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5  "
                                placeholder="کد پستی"/> */}
                        </div>
                    </div>
                    <p style={{ fontFamily: 'Shabnam' }} className={`text-[#ff0000] tracking-wide mt-1 text-xs font-[10px] font-IRsans ${allValuesError.BirthCertificationDate?"flex":"hidden"}`}>لطفا تاریخ را انتخاب نمایید!</p>
                </div>
            <div className="flex flex-col w-[31%] xl:w-[49%] xs:w-[100%] xs:mr-[0%]  xl:mr-[0%] xl:ml-[1%] mr-[1.5%] mb-7">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">شماره شناسنامه</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="number"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="BirthCertificationNumber"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.BirthCertificationNumber?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="شماره شناسنامه" />
                    </div>
                    {
allValuesError.BirthCertificationNumber?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                
             
                <div className="flex flex-col w-[32%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:ml-0 xl:mr-[1%] ml-[1.5%]  mb-5">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">نام</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="EmployeeName"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.EmployeeName?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="نام" />
                    </div>
                    {
allValuesError.EmployeeName?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[31.5%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:mr-0 xl:ml-[1%] mx-[1%] mb-5">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">نام خانوادگی</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="EmployeeFamily"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.EmployeeFamily?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="نام خانوادگی" />
                    </div>
                    {
allValuesError.EmployeeFamily?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[31%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:ml-0 xl:mr-[1%] mr-[1.5%] mb-5">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">نام پدر</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="EmployeeFatherName"
                            id="input-group-1"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.EmployeeFatherName?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="نام پدر" />
                    </div>
                    {
allValuesError.EmployeeFatherName?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
             
                <div className="flex flex-col w-[25%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:mr-0 xl:ml-[1%] ml-[1.5%] mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">جنسیت</span>
                    <div class="mt-6 flex items-center">
                        <input onChange={changeHandler}
                            name="GenderId"
                            value={"1"}
                            className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1" type="radio" id="woman" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a1">خانم</label>
                        <input onChange={changeHandler}
                            name="GenderId"
                            value={"2"}
                            className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" id="man" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a2">آقا</label>
                    </div>
                    <p style={{ fontFamily: 'Shabnam' }} className={`text-[#ff0000] tracking-wide mt-1 text-xs font-[10px] font-IRsans ${allValuesError.GenderId?"flex":"hidden"}`}>لطفا یک مورد را انتخاب نمایید!</p>
                </div>
                <div className="flex flex-col w-[20%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:ml-0 xl:mr-[1%] ml-[1%] mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">وضعیت تاهل</span>
                    <div class="mt-6 flex items-center">
                        <input onChange={changeHandler}
                            name="MaritalStatusId"
                            value={"1"} className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1" type="radio" id="single" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a1">مجرد</label>
                        <input onChange={changeHandler}
                            name="MaritalStatusId"
                            value={"2"} className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" id="married" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a2">متاهل</label>
                    </div>
                    <p style={{ fontFamily: 'Shabnam' }} className={`text-[#ff0000] tracking-wide mt-1 text-xs font-[10px] font-IRsans ${allValuesError.MaritalStatusId?"flex":"hidden"}`}>لطفا یک مورد را انتخاب نمایید!</p>
                </div>
                <div className="flex flex-col w-[24%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:mr-0 xl:ml-[1%] mx-[1.5%] mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">مدرک</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="Degree"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.Degree?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="مدرک" />
                    </div>
                    {
allValuesError.Degree?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[24%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:ml-0 xl:mr-[1%] mr-[1.5%] mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">رشته تحصیلی</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="FieldOfStudy"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.FieldOfStudy?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="رشته تحصیلی" />
                    </div>
                    {
allValuesError.FieldOfStudy?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[17%] xl:w-[29%] xs:w-[100%] xs:mx-0 lg-md:w-[60%] lg-md:mx-0 xl:mr-0 xl:ml-[1%] ml-[5%] xl-1400:ml-[4%] mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">سابقه کار (سال)</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="number"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="WorkExperience"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.WorkExperience?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="سابقه کار به سال" />
                    </div>
                    {
allValuesError.WorkExperience?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[43%] xl-1400:w-[45%] xs:w-[100%] xs:mx-0 xl:w-[69%] lg-md:w-[100%] lg-md:mx-0 xl:ml-0 xl:mr-[1%] ml-[1.5%] mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">میزان آشنایی با زبان خارجی</span>
                    <div class="mt-6 flex items-center">
                        <input
                            onChange={changeHandler}
                            name="LanguageId" value={"1"} className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1" type="radio" id="nothing" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a1">هیچ</label>
                        <input onChange={changeHandler}
                            name="LanguageId" value={"2"} className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 xs:mr-2 ml-1" type="radio" id="low" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a2">کم</label>
                        <input onChange={changeHandler}
                            name="LanguageId" value={"3"} className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 xs:mr-2 ml-1" type="radio" id="medium" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a2">متوسط</label>
                        <input onChange={changeHandler}
                            name="LanguageId" value={"4"} className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 xs:mr-2 ml-1" type="radio" id="acceptable" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a2">قابل قبول</label>
                    </div>
                    <p style={{ fontFamily: 'Shabnam' }} className={`text-[#ff0000] tracking-wide mt-1 text-xs font-[10px] font-IRsans ${allValuesError.LanguageId?"flex":"hidden"}`}>لطفا یک مورد را انتخاب نمایید!</p>
                </div>
                <div className="flex flex-col w-[32%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:mr-0 xl:ml-[1%] mr-[1.5%] xl-1400:mr-0 mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">شماره تلفن همراه</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="number"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="Mobile"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.Mobile?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="شماره تلفن همراه" />
                    </div>
                    {
allValuesError.Mobile?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[31%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:ml-0 xl:mr-[1%] ml-[3%] mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">شماره تلفن ثابت</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="number"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="Phone"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.Phone?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="شماره تلفن ثابت" />
                    </div>
                    {
allValuesError.Phone?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[31%] xl:w-[49%] xs:w-[100%] xs:mx-0 lg-md:w-[100%] lg-md:mx-0 xl:mr-0 xl:ml-[1%] ml-[1.5%] mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">نوع گذرنامه</span>
                    <div class="mt-6 flex items-center">
                        <input onChange={changeHandler}
                            name="PassPortTypeId" value={"1"} className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-1" type="radio" id="normal" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a1">عادی</label>
                        <input onChange={changeHandler} value={"2"}
                            name="PassPortTypeId" className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" id="service" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a2">خدمت</label>
                        <input onChange={changeHandler} value={"3"}
                            name="PassPortTypeId" className="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor mr-8 ml-1" type="radio" id="political" />
                        <label style={{ fontFamily: 'Shabnam' }} className="" For="a2">سیاسی</label>

                    </div>
                    <p style={{ fontFamily: 'Shabnam' }} className={`text-[#ff0000] tracking-wide mt-1 text-xs font-[10px] font-IRsans ${allValuesError.PassPortTypeId?"flex":"hidden"}`}>لطفا یک مورد را انتخاب نمایید!</p>
                </div>
                <div className="flex flex-col w-[32%] xl:w-[49%] xs:w-[100%] xs:mx-0 lg-md:w-[60%] lg-md:mx-0 xl:ml-0 xl:mr-[1%] mr-[1.5%] mb-12">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">محل خدمت</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="JobLocation"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.JobLocation?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="محل خدمت" />
                    </div>
                    {
allValuesError.JobLocation?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[31%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:mr-0 xl:ml-[1%] ml-[1.5%] mb-10">
                <span style={{fontFamily:'Shabnam'}}  className="text-base font-bold ">سمت</span>
              
                      
              <select style={{fontFamily:'Shabnam'}}
                  name="PositionId"
                  id="position"
                  onChange={changeHandler}
                  className="mt-2  text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                  <option style={{fontFamily:'Shabnam'}} value="choose" className=" ">انتخاب کنید</option>
                  {
                    position?.map((item)=>{
                        return(
                            <option  style={{fontFamily:'Shabnam'}}value={item?.positionId} className=" ">{item?.positionType}</option>

                        )
                    })
                  }
 
                 

              </select>
              <p style={{ fontFamily: 'Shabnam' }} className={`text-[#ff0000] tracking-wide mt-1 text-xs font-[10px] font-IRsans ${allValuesError.PositionId?"flex":"hidden"}`}>لطفا یک مورد را انتخاب نمایید!</p>
     
                </div>
                <div className="flex flex-col w-[33%] xl:w-[49%] xs:w-[100%] xs:mx-0 xl:ml-0 xl:mr-[1%] mx-[1.5%] mb-10 xl:mb-5">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold font-IRsans">وضعیت استخدامی</span>
                    <div class="mt-2">
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            id="input-group-1"
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            name="EmployeeStatus"
                            class={`font-IRsans text-right right-6 bg-white border ${allValuesError.EmployeeStatus?"border-[#ff0000]":"border-gray-300"} text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2.5`}
                            placeholder="وضعیت استخدامی" />
                    </div>
                    {
allValuesError.EmployeeStatus?
<span style={{ fontFamily: 'Shabnam' }} class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
لطفا فیلد را وارد نمایید !
</span>
:
null
          }
                </div>
                <div className="flex flex-col w-[30%] xs:w-[100%] xs:mx-0 mr-[1.5%] mb-10 xs:mt-6">
                    <div class="flex justify-end xl:justify-start">
                        <button onClick={() => insertEmployee()} style={{ fontFamily: 'Shabnam' }} className=" xs:w-[100%] w-40 h-11 mt-7 xl:mt-0 bg-mainColor shadow-blueShadow font-IRsans text-white text-xl font-normal rounded-lg hover:bg-lightBlue hover:text-mainColor">
                            + افزودن
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-[100%]">
                    <NewRequestFormStep2Table data={data} />
                </div>


            </div>
            <div className="flex justify-end">
                     <button onClick={()=>   navigate("/newRequestStep3/"+id)}
                
                    style={{ fontFamily: 'Shabnam' }}
                    className="w-40 h-12 mt-20 xs:w-[50%] bg-mainColor flex justify-center items-center shadow-blueShadow font-IRsans text-white text-xl font-bold rounded-lg hover:bg-lightBlue hover:text-mainColor">
                    گام بعدی
                </button>
                <Link
                    to={'/newRequestStep1'}
                    style={{ fontFamily: 'Shabnam' }}
                    className="w-40 h-12 mt-20 mr-4 xs:w-[50%] bg-midGray flex justify-center items-center shadow-blackShadow font-IRsans text-white text-xl font-bold rounded-lg hover:bg-lightGray hover:text-darkGray">
                    گام قبلی
                </Link>

            </div>

        </div>

    )
}
export default NewRequestFormStep2;