import React,{useState,useEffect,useRef} from "react";

import {ReactComponent as User} from "../assets/icon/black/profile.svg"
import {ReactComponent as Pass} from "../assets/icon/black/lock.svg"
import {ReactComponent as Reload} from "../assets/icon/black/reload.svg"
import {ReactComponent as Secure} from "../assets/icon/black/secure.svg"
// import { Captcha } from "@nabidam/react-captcha";
import './components.css';
import axios from "axios";
import {apiUrl} from "../commons/inFormTypes";
import Cookies from 'universal-cookie';
import Captcha from "../assets/img/captcha.png"
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    // const [passwordShown, setPasswordShown] = useState(false); const
    // togglePassword = () => {   setPasswordShown(!passwordShown); };
    const [user,setUser]=useState()
  const [erUser,setErUser]=useState(false)
  const [pass,setPass]=useState()
  const [erPass,setErPass]=useState(false)
  const [captcha,setCaptcha]=useState()
  const [captchaIn,setCaptchaIn]=useState()

  const [isShown, setIsShown] = useState(false);
  const [snipper, setSnipper] = useState(false);
  const [guid, setGuid] = useState();
  let navigate = useNavigate();
  const captchaRef = useRef();

  const handleClick = event => {

    setIsShown(!isShown);


  };

  const login=()=>{
    console.log(captcha)

    if(!pass||!user){
        if(!pass){
          setErPass(true)
        }
        if(!user){
          setErUser(true)
        }
    }
    else{
      setErPass(false)
      setErUser(false)
    console.log(pass)
    console.log(captcha)
// if(validateCaptcha(captcha)==false||!user || !pass){
if(captchaIn !== captcha||!user || !pass){
  handleClick()
}
else{
  setSnipper(true)
  axios
  .post(apiUrl + "auth/Login",{
    Username:user,
    Password:pass
  })
.then(function (response) {
  console.log(123456)
  console.log(response)

if (response.request.status == 200) {
  const cookies = new Cookies();
cookies.set('token',response.data.token, { path: '/' })
cookies.set('ID',response.data.id, { path: '/' })
  // console.log(response.data.token)
setSnipper(false)
  if(response.data.role=="Organ"){
    cookies.set('Role',response.data.role, { path: '/' })

    navigate("/newRequestStep1");
  }
  if(response.data.role=="Expert"){
    cookies.set('Role',response.data.role, { path: '/' })
    // cookies.set('Role',response.data.role, { path: '/karshenas' })
    cookies.set('token',response.data.token, { path: '/karshenas' })
    cookies.set('token',response.data.token, { path: '/karshenas/viewRequest' })

    navigate("/karshenas/request");
  }
  if(response.data.role=="Admin"){
    cookies.set('Role',response.data.role, { path: '/' })

    cookies.set('Role',response.data.role, { path: '/admin' })

    navigate("/admin/dashboard");
  }
  if(response.data.role=="MainAdmin"){
    cookies.set('Role',response.data.role)

    navigate("/mainadmin/mainadminTicketList");
  }
}
else{
  handleClick()
  setSnipper(false)

}})
.catch(function (error) {
console.log(error);
setSnipper(false)

});
  // if(user=="admin" && pass=="123456"){
  //   navigate("/admin/dashboard");
  // }

  // if(user=="anjoman" && pass=="123456"){
  //   navigate("/anjoman/lastStatus");

  // }

  // if(user=="karshenas" && pass=="123456"){
  //   navigate("/karshenas/request");

  // }

  // if(user=="sabt" && pass=="123456"){
  //   navigate("/sabtesherkat/sabtRequest");

  // }
  // if(user=="tashakol" && pass=="123456"){
  //   navigate("/tashakolRegister1");

  // }
  // if(user=="main" && pass=="123456"){
  //   navigate("/mainadmin/mainadminTicketList");

  // }

  }

  }}

    return (
        <div>
            <div class="relative my-6">
                <div class="absolute top-6 right-2 flex items-center pl-3 pointer-events-none">
                    <User/>
                </div>
                <input
                style={{fontFamily:'Shabnam'}}
                    type="text"
                    id="input-group-1"
                    class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                    placeholder="کد ملی"
                    onChange={(e)=>setUser(e.target.value)}   

                    />
            </div>
            <div class="relative my-6">
                <div class="absolute top-3 right-2 flex items-center pl-3 pointer-events-none">
                    <Pass/>
                </div>
                <input
                style={{fontFamily:'Shabnam'}}
                    type="text"
                    id="input-group-1"
                    class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                    placeholder="رمز عبور"
                    onChange={(e)=>setPass(e.target.value)}   

                    />
            </div>
            {/* <div class="relative my-6">
                    <div class="absolute inset-y-5 right-2 flex items-center pl-3 pointer-events-none">
                        <Lock/>
                    </div>
                    <input type={passwordShown ? "text" : "password"} id="input-group-1" class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md my-5 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="رمز عبور"/>
                    <button onClick={togglePassword} className="absolute top-[10px] left-[10px]">
                        <Show/>
                    </button>
                </div>*/}

            <div className="flex justify-between items-center ">
                <div class="relative mt-0 w-[90%]">
                    <div
                        class="absolute top-[10px] right-2 flex items-center pl-3 pointer-events-none">
                        <Secure/>
                    </div>
                    <input
                    style={{fontFamily:'Shabnam'}}
                        type="text"
                        id="input-group-1"
                        class="pr-9 font-IRsans text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md mb-0 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  "
                        placeholder="کد امنیتی"/>
                
                   <img src={Captcha} alt="captcha" className="w-[90px] top-1 left-2 absolute"/> 
                </div>
                <button>
                    <Reload/>
                </button> 
              
            </div>
            {/* <div id="captchas"  className="w-[90px] top-1 left-2  flex">
         <Captcha className="absolute"  setWord={setCaptcha} ref={captchaRef} 
         reloadEl={<button onClick={()=>captchaRef.current.initializeCaptcha()}>
        <Reload/>  </button>}
         persianChars={true} fontFamily={"Shabnam"} backgroundColor={"#a0afd5"} fontColor="#fff" border="1px solid #000"/>
         </div> */}
            <div className="flex mt-3 mb-4">
                <p style={{fontFamily:'Shabnam'}}className="text-xs font-IRsans text-black font-normal">کلمه عبور خود را فراموش کرده اید ؟</p>
                <Link style={{fontFamily:'Shabnam'}}  to={'/changePassword'} className="text-xs font-IRsans text-linkBlue font-normal mr-1">تغییر رمز عبور</Link>
            </div>
            {/* <div className="flex items-center justify-start mt-2">
                    <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-black text-xs">
                        کلمه عبور خود را فراموش کردید ؟
                    </p>
                    <Link style={{fontFamily:'Shabnam'}}  to={'/changePassStep1'} className="font-IRsans text-mainColor text-xs mr-1 font-bold hover:text-lightBlue">
                        تغییر رمز عبور
                    </Link>
                </div> */}
                <button onClick={()=>login()} style={{fontFamily:'Shabnam'}}
                    className="w-full h-12 bg-mainColor shadow-blueShadow mt-6 font-IRsans text-white text-xl font-medium rounded-lg hover:bg-lightBlue hover:text-mainColor">
                      ورود   
                </button>

            {/* <div className="flex items-center justify-start mt-2 xs:flex-wrap">
                    <p style={{fontFamily:'Shabnam'}} className="font-IRsans text-black text-xs">
                       حساب کاربری ندارید ؟
                    </p>
                    <Link style={{fontFamily:'Shabnam'}}  to={'/signup'} className="font-IRsans text-mainColor text-xs mr-1 font-bold hover:text-lightBlue">
                       ثبت نام کنید
                    </Link>
                </div> */}
        </div>

    )
}
export default LoginForm;