import React, { useState, useEffect } from "react";
import { DatePicker } from "zaman";
import './components.css';
import { ReactComponent as User } from "../assets/icon/black/profile.svg"
import { ReactComponent as Lock } from "../assets/icon/black/lock.svg"
import { ReactComponent as Reload } from "../assets/icon/black/reload.svg"
import { ReactComponent as Secure } from "../assets/icon/black/secure.svg"
import { ReactComponent as Doc } from "../assets/icon/black/doc.svg"
import { ReactComponent as Location } from "../assets/icon/black/location.svg"

import { ReactComponent as Mail } from "../assets/icon/black/envelope.svg"
import { ReactComponent as Phone } from "../assets/icon/black/phone.svg"

import { ReactComponent as Pencil } from "../assets/icon/white/pencil.svg"
import Captcha from "../assets/img/captcha.png"
import UserImg from "../assets/img/user.png"
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { axiosReq } from "../commons/axiosReq";
import { useNavigate } from "react-router-dom";

const AddAgentForm = () => {
    const [data, setData] = useState();
    const [sub, setSub] = useState();
    const [pos, setPos] = useState();
    const [type, setType] = useState();

    const [reCheck, setRecheck] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {

        auth();
    }, [reCheck]);
    const auth = async () => {
        const cookies = new Cookies();
        var token = cookies.get('token');
        console.log(token)
        if (!token) {
            // navigate("/");
        } else {
            if (cookies.get('Role') == "InternationalAdmin") {
                GetData()

            }
            else {
                navigate("/");

            }
        }
    }
    const [allValues, setAllValues] = useState({
        NationalCode: '',
        DateOfBirth: '',
        AgentName: '',
        AgentFamily: '',
        Mobile: '',
        Phone: '',
        Email: '',
        PostalCode: '',
        Address: '',
        SubCategoryId: '',
        Subset: '',
        TypeOfEmploymentId: '',
        PositionId: '',
        Password: ''

    });

    const changeHandler = e => {
        if (e.target) {

            setAllValues({ ...allValues, [e.target.name]: e.target.value })
        }

    }
    const GetData = async () => {
        console.log(1234)
        const cookies = new Cookies();




        const dataSub = await axiosReq("Agents/GetSubCategories");
        console.log(dataSub)
        setSub(dataSub)
        const dataPos = await axiosReq("Agents/GetPositions");
        console.log(dataPos)
        setPos(dataPos)
        const dataType = await axiosReq("Agents/GetTypeEmployments");
        console.log(dataType)
        setType(dataType)


    }

    const addAgent = async () => {
        console.log("req")
        console.log(allValues)
        const cookies = new Cookies();
        const dataUser = await axiosReq("InternationalAdmin/InsertAgent", {
            NationalCode: allValues?.NationalCode,
            DateOfBirth: allValues?.DateOfBirth,
            AgentName: allValues?.AgentName,
            AgentFamily: allValues?.AgentFamily,
            Mobile: allValues?.Mobile,
            Phone: allValues?.Phone,
            Email: allValues?.Email,
            PostalCode: allValues?.PostalCode,
            Address: allValues?.Address,
            SubCategoryId: allValues?.SubCategoryId,
            Subset: allValues?.Subset,
            TypeOfEmploymentId: allValues?.TypeOfEmploymentId,
            PositionId: allValues?.PositionId,
            Password:allValues?.Password
        });
        console.log(dataUser)
        if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
            alert("با موفقیت ویرایش شد")

            setRecheck(!reCheck)
        }
        else {
            alert("اطلاعات ورودی نادرست می باشند")
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
    return (
        <div className="w-[80%] xl-lg:w-[95%] lg-md:w-[100%] mx-auto">
            <div className="flex justify-center">
                <div className="relative rounded-full h-[86px] w-[86px] mt-4 mb-4 ml-8">
                    <img src={UserImg} alt="" />
                    <button style={{ fontFamily: 'Shabnam' }}
                        className="absolute rounded-full shadow-blueShadow bg-mainColor p-2 top-12 -right-2">
                        <Pencil />
                    </button>
                </div>
            </div>
            <div className="w-full mb-6">
                <p style={{ fontFamily: 'Shabnam' }} className="text-red">
                    * پر کردن تمامی فیلدها اجباری است.
                </p>
            </div>
            <div className="flex w-full flex-wrap">
                <div className="flex flex-col w-[48%] xs:w-[98%] ml-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">کد ملی</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc />
                        </div>
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="number"
                            onChange={changeHandler}
name="NationalCode"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="کد ملی" />
                    </div>
                </div>
                <div className="flex w-[48%] xs:w-[98%] xs:mr-0 xs:ml-[2%] mr-[2%] mb-4 items-end">
                    <div className="flex flex-col w-[64%] ">
                        <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">تاریخ تولد</span>
                        <div class="flex items-center h-10 pr-2 mt-3   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor  w-full pl-10 " id="test">

                            <DatePicker style={{ fontFamily: 'Shabnam' }} placeholder="خهاخعل"   
                                 onChange={(e)=>setAllValues({ ...allValues,DateOfBirth:formatDateTime(e.value)})}
 />
                            {/* <input
                                type="text"
                                id="input-group-1"
                                class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                                placeholder="تاریخ تولد"/> */}
                        </div>
                    </div>
                    <div className="w-[35%] mr-2">
                        <button style={{ fontFamily: 'Shabnam' }}
                            className="w-[100%] p-2.5 bg-mainColor rounded-md text-white shadow-blueShadow text-base font-bold  ">استعلام</button>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] xs:w-[98%] ml-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">نام شما</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <User />
                        </div>
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            id="input-group-1"
                            name="AgentName"
                            onChange={changeHandler}

                            // disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="نام" />
                    </div>
                </div>
                <div className="flex flex-col w-[48%] xs:w-[98%] xs:mr-0 xs:ml-[2%] mr-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">نام خانوادگی شما</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <User />
                        </div>
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            id="input-group-1"
                            name="AgentFamily"
                            onChange={changeHandler}

                            // disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="نام خانوادگی" />
                    </div>
                </div>
                <div className="flex flex-col w-[48%] xs:w-[98%] ml-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">شماره تلفن همراه</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Phone />
                        </div>
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="number"
                            id="input-group-1"
                            onChange={changeHandler}
name="Mobile"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="شماره تلفن همراه" />
                    </div>
                </div>
                <div className="flex flex-col w-[48%] xs:w-[98%] xs:mr-0 xs:ml-[2%] mr-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">شماره تلفن ثابت</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Phone />
                        </div>
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="number"
                            id="input-group-1"
                            onChange={changeHandler}
name="Phone"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="شماره تلفن ثابت" />
                    </div>
                </div>
                <div className="flex flex-col w-[48%] lg-md:w-[98%] ml-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">آدرس ایمیل</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Mail />
                        </div>
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="email"
                            id="input-group-1"
                            onChange={changeHandler}
name="Email"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="ایمیل" />
                    </div>
                </div>
                <div className="flex w-[48%] lg-md:w-[98%] mr-[2%] lg-md:mr-0 lg-md:ml-[2%] mb-4 items-end">
                    <div className="flex flex-col w-[64%] ">
                        <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">کد پستی</span>
                        <div class="relative mt-3">
                            <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                                <Doc />
                            </div>
                            <input style={{ fontFamily: 'Shabnam' }}
                                type="number"
                                id="input-group-1"
                                onChange={changeHandler}
                                name="PostalCode"
                                class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                                placeholder="کد پستی" />
                        </div>
                    </div>
                    <div className="w-[35%] mr-2">
                        <button style={{ fontFamily: 'Shabnam' }}
                            className="w-[100%] p-2.5 bg-mainColor rounded-md text-white shadow-blueShadow text-base font-bold  ">استعلام</button>
                    </div>
                </div>
                <div className="flex flex-col w-[98%] ml-[2%]  mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">آدرس شما</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Location />
                        </div>
                        <textarea style={{ fontFamily: 'Shabnam' }}
                            rows={4}
                            type="text"
                            // disabled="true"
                            onChange={changeHandler}
                            name="Address"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آدرس شما"></textarea>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] lg-md:w-[98%] ml-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">دسته بندی مجموعه</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc />
                        </div>
                        <select style={{ fontFamily: 'Shabnam' }}
                            onChange={changeHandler}
                            name="SubCategoryId"
                            id="cars"
                            className="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                            {
                                sub?.map((item) => {
                                    return (
                                        <option value={item?.subCategoryId}
                                            selected={item?.subCategoryId == allValues?.SubCategoryId} style={{ fontFamily: 'Shabnam' }} className=" ">{item?.subCategoryType}</option>

                                    )
                                })
                            }
                        </select>

                    </div>
                </div>
                <div className="flex flex-col w-[48%] lg-md:w-[98%] lg-md:mr-0 lg-md:ml-[2%] mr-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">زیر مجموعه</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc />
                        </div>
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            id="input-group-1"
                            value={allValues?.Subset}
                            onChange={changeHandler}
                            name="Subset"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="نام زیر مجموعه" />
                    </div>
                </div>
                <div className="flex flex-col w-[48%] xs:w-[98%] ml-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">نوع رابط استخدامی</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc />
                        </div>
                        <select style={{ fontFamily: 'Shabnam' }}
                            onChange={changeHandler}
                            name="TypeOfEmploymentId"
                            id="cars"
                            className="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                            {
                                type?.map((item) => {
                                    return (
                                        <option value={item?.typeOfEmploymentId} selected={item?.typeOfEmploymentId == allValues?.TypeOfEmploymentId} style={{ fontFamily: 'Shabnam' }} className=" ">{item?.typeOfEmploymentTitle}</option>

                                    )
                                })
                            }

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[48%] xs:w-[98%] xs:mr-0 xs:ml-[2%] mr-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">سمت</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc />
                        </div>
                        <select style={{ fontFamily: 'Shabnam' }}
                            onChange={changeHandler}
                            name="PositionId"
                             id="cars"
                            className="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                            {
                                pos?.map((item) => {
                                    return (
                                        <option selected={item?.positionId == allValues?.PositionId} style={{ fontFamily: 'Shabnam' }} value={item?.positionId} className=" ">{item?.positionType}</option>

                                    )
                                })
                            }
                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[48%] lg-md:w-[98%] ml-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">رمز عبور</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Lock />
                        </div>
                        <input style={{ fontFamily: 'Shabnam' }}
                            type="text"
                            name="Password"
                            onChange={changeHandler}
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="رمز عبور" />
                    </div>
                </div>
                <div className="flex flex-col w-[48%] lg-md:w-[98%] lg-md:mr-0 lg-md:ml-[2%] mr-[2%] mb-4">
                    <span style={{ fontFamily: 'Shabnam' }} className="text-base font-normal  ">کد امنیتی</span>
                    <div className="flex justify-between items-center ">
                        <div class="relative mt-3 w-[90%]">
                            <div
                                class="absolute top-[10px] right-2 flex items-center pl-3 pointer-events-none">
                                <Secure />
                            </div>
                            <input style={{ fontFamily: 'Shabnam' }}
                                type="text"
                                id="input-group-1"
                                class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md mb-0 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                                placeholder="کد امنیتی" />
                            <img src={Captcha} alt="captcha" className="w-[90px] top-1 left-2 absolute" />
                        </div>
                        <button style={{ fontFamily: 'Shabnam' }} className="mt-4">
                            <Reload />
                        </button>
                    </div>
                </div>
            </div>



            <button onClick={addAgent} style={{ fontFamily: 'Shabnam' }}
                className="w-[60%] xs:w-[90%] mx-auto  h-12 bg-mainColor shadow-blueShadow mt-10 flex justify-center items-center text-white text-xl font-medium rounded-lg hover:bg-lightBlue hover:text-mainColor">
                ثبت نام مامور اعزامی
            </button>

        </div>

    )
}
export default AddAgentForm;