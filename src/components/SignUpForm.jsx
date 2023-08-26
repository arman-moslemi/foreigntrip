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
const SignUpForm = () => {
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
        <div>
            <div className="flex justify-center">
                <div className="relative rounded-full h-[86px] w-[86px] mt-4 mb-4 ml-8">
                    <img src={UserImg}/>
                    <button
                        className="absolute rounded-full shadow-blueShadow bg-mainColor p-2 top-12 -right-2">
                        <Pencil/>
                    </button>
                </div>
            </div>
            <div className="flex w-full flex-wrap">
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">کد ملی</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <input
                            type="text"
                            id="input-group-1"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="کد ملی"/>
                    </div>
                </div>
                <div className="flex w-[48%] mr-[2%] mb-4 items-end">
                    <div className="flex flex-col w-[64%] ">
                        <span className="text-base font-normal font-IRsans">تاریخ تولد</span>
                        <div class="flex items-center h-10 pr-2 mt-3 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor  w-full pl-10 " id="test">
                            <Calender/>
                            <DatePicker placeholder="خهاخعل"  onChange={(e) => console.log(e.value)} />
                            {/* <input
                                type="text"
                                id="input-group-1"
                                class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                                placeholder="تاریخ تولد"/> */}
                        </div>
                    </div>
                    <div className="w-[35%] mr-2">
                        <button
                            className="w-[100%] p-2.5 bg-mainColor rounded-md text-white shadow-blueShadow text-base font-bold font-IRsans">استعلام</button>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">نام شما</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <User/>
                        </div>
                        <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="نام"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">نام خانوادگی شما</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <User/>
                        </div>
                        <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="نام خانوادگی"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">شماره تلفن همراه</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Phone/>
                        </div>
                        <input
                            type="text"
                            id="input-group-1"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="شماره تلفن همراه"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">شماره تلفن ثابت</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Phone/>
                        </div>
                        <input
                            type="text"
                            id="input-group-1"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="شماره تلفن ثابت"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">آدرس ایمیل</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Mail/>
                        </div>
                        <input
                            type="text"
                            id="input-group-1"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="ایمیل"/>
                    </div>
                </div>
                <div className="flex w-[48%] mr-[2%] mb-4 items-end">
                    <div className="flex flex-col w-[64%] ">
                        <span className="text-base font-normal font-IRsans">کد پستی</span>
                        <div class="relative mt-3">
                            <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                                <Doc/>
                            </div>
                            <input
                                type="text"
                                id="input-group-1"
                                class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                                placeholder="کد پستی"/>
                        </div>
                    </div>
                    <div className="w-[35%] mr-2">
                        <button
                            className="w-[100%] p-2.5 bg-mainColor rounded-md text-white shadow-blueShadow text-base font-bold font-IRsans">استعلام</button>
                    </div>
                </div>
                <div className="flex flex-col w-[100%]  mb-4">
                    <span className="text-base font-normal font-IRsans">آدرس شما</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Location/>
                        </div>
                        <textarea
                            rows={4}
                            type="text"
                            disabled="true"
                            id="input-group-1"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آدرس شما"></textarea>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">دسته بندی مجموعه</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <select
                            name="cars"
                            id="cars"
                            className="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                            <option value="newRequest" className="font-IRsans">انتخاب دسته بندی</option>
                            <option value="waiting" className="font-IRsans">هولدینگ</option>
                            <option value="check" className="font-IRsans">صندوق</option>
                            <option value="not" className="font-IRsans">سازمان</option>
                            <option value="newRequest" className="font-IRsans">بانک</option>
                            <option value="waiting" className="font-IRsans">معاونت</option>
                            <option value="check" className="font-IRsans">شرکت ها</option>
                            <option value="not" className="font-IRsans">فدراسیون</option>
                            <option value="not" className="font-IRsans">موسسات</option>

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">زیر مجموعه</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <input
                            type="text"
                            id="input-group-1"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="نام زیر مجموعه"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">نوع رابط استخدامی</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <select
                            name="cars"
                            id="cars"
                            className="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                            <option value="newRequest" className="font-IRsans">انتخاب نوع</option>
                            <option value="waiting" className="font-IRsans">رسمی</option>
                            <option value="check" className="font-IRsans">پیمانی</option>
                            <option value="not" className="font-IRsans">قراردادی</option>
                            <option value="not" className="font-IRsans">شرکتی</option>

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">سمت</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Doc/>
                        </div>
                        <select
                            name="cars"
                            id="cars"
                            className="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5">
                            <option value="newRequest" className="font-IRsans">انتخاب سمت</option>
                            <option value="waiting" className="font-IRsans">مدیر عامل</option>
                            <option value="check" className="font-IRsans">مدیر کل</option>
                            <option value="not" className="font-IRsans">معاون</option>
                            <option value="waiting" className="font-IRsans">رئیس مرکزی</option>
                            <option value="check" className="font-IRsans">رئیس اداره</option>
                            <option value="not" className="font-IRsans">کارشناس</option>

                        </select>
                        {/* <input
                            type="text"
                            id="input-group-1"
                            disabled="true"
                            class="pr-9 font-IRsans text-right right-6 bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="آرمان"/> */}
                    </div>
                </div>
                <div className="flex flex-col w-[48%] ml-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">رمز عبور</span>
                    <div class="relative mt-3">
                        <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                            <Lock/>
                        </div>
                        <input
                            type="text"
                            id="input-group-1"
                            class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                            placeholder="رمز عبور"/>
                    </div>
                </div>
                <div className="flex flex-col w-[48%] mr-[2%] mb-4">
                    <span className="text-base font-normal font-IRsans">کد امنیتی</span>
                    <div className="flex justify-between items-center ">
                        <div class="relative mt-3 w-[90%]">
                            <div
                                class="absolute top-[10px] right-2 flex items-center pl-3 pointer-events-none">
                                <Secure/>
                            </div>
                            <input
                                type="text"
                                id="input-group-1"
                                class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md mb-0 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                                placeholder="کد امنیتی"/>
                            <img src={Captcha} alt="captcha" className="w-[90px] top-1 left-2 absolute"/>
                        </div>
                        <button className="mt-4">
                            <Reload/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <label className="font-IRsans text-base font-normal">
                    <input
                        type="checkbox"
                        class="accent-mainColor w-4 h-4 border-2 border-mainColor outline-mainColor ml-2"/>
                    <a href="#" className="text-mainColor">آیین نامه</a>  و <a href="#" className="text-mainColor">مقررات</a> را مطالعه کرده و آنها را پذیرفته ام .
                </label>
            </div>
            

            <button
                className="w-[60%] mx-auto block h-12 bg-mainColor shadow-blueShadow mt-10 font-IRsans text-white text-xl font-medium rounded-lg hover:bg-lightBlue hover:text-mainColor">
                ورود
            </button>

        </div>

    )
}
export default SignUpForm;