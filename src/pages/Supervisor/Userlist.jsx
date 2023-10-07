import React, { useState, useEffect } from "react";
import UserlistTable from "../../components/UserlistTable";
import SuperVisorRightMenu from "../../components/SupervisorComponent/SuperVisorRightMenu";
import {ReactComponent as User} from "../../assets/icon/blue/profile.svg";
import Cookies from 'universal-cookie';
import { axiosReq } from "../../commons/axiosReq";
import { useNavigate } from "react-router-dom";
const Userlist = () =>{
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
            if (cookies.get('Role') == "Supervisor") {
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



        const dataUser = await axiosReq("Supervisor/GetAgents");
        console.log(dataUser)
        setData(dataUser)



    }
    return(
        <>
         <div className="w-full h-screen md:h-screen bg-lightGray py-10 px-10  md:p-0  lg:h-screen" style={{direction:'rtl'}}>

<div className="flex md:block">
<SuperVisorRightMenu/>
<div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 min-w-[500px] lg:min-w-[450px] w-[80%] xl:p-5 md:w-[95%] md:min-w-[95%] md:rounded-xl md:mx-auto">
<div className="flex items-center justify-between">
                    <div className="flex">
                    <User/>
                <span style={{fontFamily:'Shabnam'}} className="  text-mainColor mr-3 font-bold">
                       لیست کاربران سامانه
                </span>
                    </div>
                   
                </div>
<UserlistTable data={data}/>
</div>
</div>
</div>
        
        </>
    )
}

export default Userlist;