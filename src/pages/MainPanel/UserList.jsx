import React, { useState, useEffect } from "react";
import MainRightMenu from "../../components/MainAdminComponent/MainRightMenu";
import {ReactComponent as Profile} from "../../assets/icon/blue/profile.svg"
import {ReactComponent as Search} from "../../assets/icon/white/search.svg"

import MainAdminUserList from "../../components/MainAdminComponent/MainAdminUserList";
import Cookies from 'universal-cookie';
import { axiosReq } from "../../commons/axiosReq";
import { useNavigate } from "react-router-dom";
import InternationalUserTable from "../../components/InternationalComponent/InternationalUserTable";
import { Link } from "react-router-dom";
const UserList = () =>{
    const [data, setData] = useState();
    const [reCheck, setRecheck] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {

        auth();
    }, [reCheck]);
    const auth = async () => {
        const cookies = new Cookies();
        var token = cookies.get('token');
        console.log(cookies.get('Role'))
        if (!token) {
            navigate("/");
        } else {
            if (cookies.get('Role') == "MainAdmin") {
                GetData()

            }
            else {
                navigate("/");

            }
        }
    }
    const GetData = async () => {
        console.log(1234)
        const cookies = new Cookies();



        const dataUser = await axiosReq("MainAdmin/GetAgents");
        console.log(dataUser)
        setData(dataUser)



    }
    return(
        <div className="w-full h-screen bg-lightGray py-10 px-10 lg:px-8 md:p-0  lg:h-full" style={{direction:'rtl'}}>
        <div className="flex md:block">
            <MainRightMenu/>
            <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] xl-1400:py-8 xl-1400:px-4 md:w-[95%] md:min-w-[95%] md:rounded-xl md:mx-auto">
           
            <div className="flex items-center">
                    <Profile/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                     لیست کاربران
                </span>
                
                </div>
            <div className="flex justify-between xl:flex-col xl:items-start mt-10 xl-1400:mt-5 items-end">
                <div className="flex justify-between border border-[#CCCCCD] rounded-full h-[38px] w-[320px] xl-1400:w-[260px] xl:w-[100%] xl:mt-4 items-center px-2 py-1">
                    <input type="text" className="border-none focus-visible:outline-none" style={{fontFamily:'Shabnam'}} placeholder="جستجو کنید ..."/>
                    <button className="w-[30px] h-[30px] bg-mainColor shadow-blueShadow rounded-full flex justify-center items-center">
                        <Search/>
                    </button>
                </div>
                <div className="flex items-end xl:w-[100%] xl:justify-between xl:mt-5 lg:flex-col lg:items-start xs:flex-col-reverse">
                <div className="flex items-end ml-5 xl:mr-2 lg:mr-0 lg:w-[100%] xs:flex-col xs:items-start">
                <div className="flex  lg:w-[79%] items-end xs:w-[100%]">
                <div className="flex flex-col w-[150px] lg:w-[49%] 2xs:w-[46%] ">
                    <span style={{fontFamily:'Shabnam'}}  className="text-base font-normal  ">مرتب سازی</span>
                    <div class=" mt-3">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب مجموعه</option>
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
                <div className="flex flex-col w-[150px] lg:w-[49%] 2xs:w-[53%] mr-2">
                   <div class=" mt-3">
                        
                        <select style={{fontFamily:'Shabnam'}}
                            name="cars"
                            id="cars"
                            className="   text-right  bg-white border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-mainColor focus:border-mainColor block w-full p-2">
                            <option style={{fontFamily:'Shabnam'}} value="newRequest" className=" ">انتخاب زیر مجموعه</option>
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
                </div>
                <button className="bg-mainColor shadow-blueShadow p-2 lg:w-[19%] xs:w-[100%] xs:mt-4 xs:mr-0 text-white mr-2 rounded-md" style={{fontFamily:'Shabnam'}} >
                    اعمال
                </button>
                </div>
                <div className="flex xl:ml-2 lg:w-[100%] lg:justify-between lg:mt-7 xs:mt-0 xs:mb-5">
                    <button className="shadow-blueShadow lg:w-[47%] lg:justify-center flex px-2  items-center h-[40px] bg-mainColor text-white rounded-md">
                  
                        <span className="text-white" style={{fontFamily:'Shabnam'}}>
                            گزارش گیری
                        </span>
                    </button>
               <Link className="lg:w-[47%] lg:ml-2" Link to={'/mainAdmin/addAgent'}>
               <button className="shadow-blueShadow lg:w-[100%] lg:justify-center flex px-2 h-[40px] items-center bg-mainColor text-white rounded-md mr-2">
                       
                       <span className="text-white " style={{fontFamily:'Shabnam'}}>
                          + افزودن کاربر
                       </span>
                   </button>
               </Link>
                </div>
                </div>
            </div>
            

            <MainAdminUserList data={data} reCheck={reCheck} setRecheck={setRecheck}/>
            </div>
        </div>
      
        
    </div>
    )
}
export default UserList;

/*responsive--done*/