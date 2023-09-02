import React, {useState} from "react";
import { DatePicker } from "zaman";
import './components.css';
import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Lock} from "../assets/icon/black/lock.svg"
import {ReactComponent as Reload} from "../assets/icon/black/reload.svg"
import {ReactComponent as Secure} from "../assets/icon/black/secure.svg"
import {ReactComponent as Doc} from "../assets/icon/black/doc.svg"
import {ReactComponent as Location} from "../assets/icon/black/location.svg"
import {ReactComponent as Calender} from "../assets/icon/black/calender.svg"
import {ReactComponent as Mail} from "../assets/icon/black/envelope.svg"
import {ReactComponent as Phone} from "../assets/icon/black/phone.svg"
import {ReactComponent as Show} from "../assets/icon/black/show.svg"
import {ReactComponent as Pencil} from "../assets/icon/white/pencil.svg"
import Captcha from "../assets/img/captcha.png"
import UserImg from "../assets/img/user.png"
import {Link} from "react-router-dom";
const AddAgentForm = () => {
    const [passwordShown,
        setPasswordShown] = useState(false);

    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };

    const [passwordAgainShown,
        setPasswordAgainShown] = useState(false);

    const togglePasswordAgain = () => {

        setPasswordAgainShown(!passwordAgainShown);
    };
    return (
        <div className="w-[80%] mx-auto">
            <div className="flex justify-center">
                <div className="relative rounded-full h-[86px] w-[86px] mt-4 mb-4 ml-8">
                    <img src={UserImg}/>
                    <button style={{fontFamily:'Shabnam'}}
                        className="absolute rounded-full shadow-blueShadow bg-mainColor p-2 top-12 -right-2">
                        <Pencil/>
                    </button>
                </div>
            </div>
            <div className="w-full mb-6">
                <p style={{fontFamily:'Shabnam'}} className="text-red">
                    * پر کردن تمامی فیلدها اجباری است.
                </p>
            </div>
            <div className="flex w-full flex-wrap">
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}   className="text-base font-normal  ">کد ملی</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="number"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="کد ملی"/>
                    </div>
                </div>
                <div className="flex w-[48%] mr-[2%] mb-4 items-end">
                    <div className="flex flex-col w-[64%] ">
                        <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">تاریخ تولد</span>
                        <div class="flex items-center h-10 pr-2 mt-3   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor  w-full pl-10 " id="test">
                         
                            <DatePicker style={{fontFamily:'Shabnam'}} placeholder="خهاخعل"  onChange={(e) => console.log(e.value)} />
                            {/* <input
                                type="text"
                                id="input-group-1"
                                class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                                placeholder="تاریخ تولد"/> */}
                        </div>
                    </div>
                    <div className="w-[35%] mr-2">
                        <button style={{fontFamily:'Shabnam'}}
                            className="w-[100%] p-2.5 bg-mainColor rounded-md text-white shadow-blueShadow text-base font-bold  ">استعلام</button>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">نام شما</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <User/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="نام"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">نام خانوادگی شما</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <User/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="نام خانوادگی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}   className="text-base font-normal  ">شماره تلفن همراه</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Phone/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="number"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="شماره تلفن همراه"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}   className="text-base font-normal  ">شماره تلفن ثابت</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Phone/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="number"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="شماره تلفن ثابت"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">آدرس ایمیل</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Mail/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="email"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="ایمیل"/>
                    </div>
                </div>
                <div className="flex w-[48%] mr-[2%] mb-4 items-end">
                    <div className="flex flex-col w-[64%] ">
                        <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">کد پستی</span>
                        <div class="relative mt-3">
                            <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                                <Doc/>
                            </div>
                            <input style={{fontFamily:'Shabnam'}}
                                type="number"
                                id="input-group-1"
                                class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                                placeholder="کد پستی"/>
                        </div>
                    </div>
                    <div className="w-[35%] mr-2">
                        <button style={{fontFamily:'Shabnam'}}
                            className="w-[100%] p-2.5 bg-mainColor rounded-md text-white shadow-blueShadow text-base font-bold  ">استعلام</button>
                    </div>
                </div>
                <div className="flex flex-col w-[100%]  mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">آدرس شما</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Location/>
                        </div>
                        <textarea style={{fontFamily:'Shabnam'}}
                            rows={4}
                            type="text"
                            disabled="true"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آدرس شما"></textarea>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">دسته بندی مجموعه</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب دسته بندی</option>
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
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">زیر مجموعه</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="نام زیر مجموعه"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">نوع رابط استخدامی</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                            <option value="newRequest" className=" ">انتخاب نوع</option>
                            <option value="waiting" className=" ">رسمی</option>
                            <option value="check" className=" ">پیمانی</option>
                            <option value="not" className=" ">قراردادی</option>
                            <option value="not" className=" ">شرکتی</option>

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">سمت</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب سمت</option>
                            <option style={{fontFamily:'Shabnam'}} value="waiting" className=" ">مدیر عامل</option>
                            <option style={{fontFamily:'Shabnam'}} value="check" className=" ">مدیر کل</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">معاون</option>
                            <option style={{fontFamily:'Shabnam'}} value="waiting" className=" ">رئیس مرکزی</option>
                            <option style={{fontFamily:'Shabnam'}} value="check" className=" ">رئیس اداره</option>
                            <option style={{fontFamily:'Shabnam'}} value="not" className=" ">کارشناس</option>

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9   text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">رمز عبور</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Lock/>
                        </div>
                        <input style={{fontFamily:'Shabnam'}}
                            type="text"
                            id="input-group-1"
                            class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="رمز عبور"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span style={{fontFamily:'Shabnam'}}   className="text-base font-normal  ">کد امنیتی</span>
                    <div className="flex justify-between items-center ">
                        <div class="relative mt-3 w-[90%]">
                            <div
                                class="absolute top-[10px] right-2 flex items-center pl-3 pointer-events-none">
                                <Secure/>
                            </div>
                            <input style={{fontFamily:'Shabnam'}}
                                type="text"
                                id="input-group-1"
                                class="pr-9   text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md mb-0 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                                placeholder="کد امنیتی"/>
                            <img src={Captcha} alt="captcha" className="w-[90px] top-1 left-2 absolute"/>
                        </div>
                        <button style={{fontFamily:'Shabnam'}} className="mt-4">
                            <Reload/>
                        </button>
                    </div>
                </div>
            </div>
       
            

            <Link to={'/mainAdmin/userList'} style={{fontFamily:'Shabnam'}}
                className="w-[60%] mx-auto  h-12 bg-mainColor shadow-blueShadow mt-10 flex justify-center items-center text-white text-xl font-medium rounded-lg hover:bg-lightBlue hover:text-mainColor">
               ثبت نام مامور اعزامی
            </Link>

        </div>

    )
}
export default AddAgentForm;