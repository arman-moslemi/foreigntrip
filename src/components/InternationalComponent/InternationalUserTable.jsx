


import React from "react";

import { ReactComponent as Eye } from "../../assets/icon/black/eye.svg";
import { ReactComponent as Ban } from "../../assets/icon/black/ban.svg";
import './components.css';
import { Link } from "react-router-dom";
import { ReactComponent as Trash } from "../../assets/icon/blue/trash.svg";
import { ReactComponent as Pencil } from "../../assets/icon/blue/pencil.svg";
import Img1 from "../../assets/img/user.png";
import { axiosReq } from "../../commons/axiosReq";

export const truncate = (str, len) => {
  // console.log("truncate", str, str.length, len);
  if (str.length > len && str.length > 0) {
    let new_str = str + " ";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(" "));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
};

const InternationalUserTable = ({ data,reCheck,setRecheck }) => {
  const [showError, setShowError] = React.useState(false);
  const [showLog, setShowLog] = React.useState(false);
  const [showBan, setShowBan] = React.useState(false);
  const [id, setId] = React.useState();


  const suspendUser=async()=>{
    console.log(1234)
 
 
   const dataUser = await axiosReq("InternationalAdmin/SuspendAgent",{
    AgentId:id
   });
   if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
setRecheck(!reCheck)
setShowBan(false)
}
else {
    alert("عملیات با خطا روبرو شد.")
}

   
   }
   const deleteUser=async()=>{
    console.log(1234)
 
 
   const dataUser = await axiosReq("InternationalAdmin/DeleteAgent",{
    AgentId:id
   });
   if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
setRecheck(!reCheck)
setShowError(false)
}
else {
    alert("عملیات با خطا روبرو شد.")
}

   
   }
  const tableBody = data?.map((tableRow, index) =>
    <tr key={tableRow.id} className="border-b border-b-borderGray">
      <td style={{ fontFamily: 'shabnam' }} className="py-4 text-sm text-right pr-4   ">
        <input type="checkbox" />
      </td>
      <td style={{ fontFamily: 'shabnam' }} className="py-4 text-sm text-right pr-4  ">{index + 1}</td>
      <td style={{ fontFamily: 'shabnam' }} className="py-4 text-sm text-right  pr-4">


        {tableRow.agentName} {tableRow.agentFamily}



      </td>

      <td style={{ fontFamily: 'shabnam' }} className="py-4 text-sm text-center pr-4  " >{tableRow.nationalCode}</td>
      <td style={{ fontFamily: 'shabnam' }} className="py-4 text-sm text-center pr-4  "  >{tableRow.mobile}</td>
      <td style={{ fontFamily: 'shabnam' }} className="py-4 text-sm text-center pr-4  ">{tableRow.position?.positionType}</td>
      <td style={{ fontFamily: 'shabnam' }} className="py-4 text-sm text-center pr-4 pl-4  "> <div className="flex justify-center">
        <button className="mx-2" onClick={() => setShowLog(true)}>
          <Eye />
        </button>
        <button className="mx-2" onClick={() => {setId(tableRow?.agentId);setShowBan(true)}}>
          <Ban />
        </button>
        <Link to={'/internationalAdmin/addAgent'}>
          <button className="mx-2" >
            <Pencil />
          </button>
        </Link>
        <button className="mx-2" onClick={() => {setId(tableRow?.agentId);setShowError(true)}}>
          <Trash />
        </button>
      </div>    </td>

    </tr>
  )
  return (
    <>

      <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
        <table class="table-auto w-full  ">
          <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{ borderRadius: '20px' }}>
            <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{ borderRadius: '20px' }}>
              <th style={{ fontFamily: 'Shabnam' }} className="text-right pr-4   ">
                <input type="checkbox" />
              </th>
              <th style={{ fontFamily: 'Shabnam' }} className="text-right pr-4   ">ردیف</th>
              <th style={{ fontFamily: 'Shabnam' }} className="text-right   pr-4">نام و نام خانوادگی کاربر</th>
              <th style={{ fontFamily: 'Shabnam' }} className="text-center font-IRsan pr-4">کد ملی</th>
              <th style={{ fontFamily: 'Shabnam' }} className="text-center font-IRsan pr-4">شماره تلفن همراه</th>
              <th style={{ fontFamily: 'Shabnam' }} className="text-center   pr-4">پست ستادی</th>
              <th style={{ fontFamily: 'Shabnam' }} className="text-center pl-4  pr-4" >عملیات</th>

            </tr>
          </thead>
          <tbody>
            {tableBody}

          </tbody>
        </table>

      </div>
      {showError ?
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-5 mx-auto max-w-3xl">

              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold   text-black align-middle text-center">
                    هشدار!
                  </span>

                </div>

                <div className="relative p-6 flex-auto">
                  <p style={{ fontFamily: 'Shabnam' }} className="my-4 text-black text-sm   leading-relaxed">
                    آیا از حذف مورد انتخاب شده مطمئن هستید؟
                  </p>
                </div>

                <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
                  <button
                    style={{ fontFamily: 'Shabnam' }}
                    className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowError(false)}
                  >
                    خیر
                  </button>
                  <button
                    style={{ fontFamily: 'Shabnam' }}
                    className="text-white   float-left bg-red shadow-redShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => deleteUser()}
                  >
                    بله
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>
        : null
      }
      {showBan ?
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-5 mx-auto max-w-3xl">

              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold   text-black align-middle text-center">
                    هشدار!
                  </span>

                </div>

                <div className="relative p-6 flex-auto">
                  <p style={{ fontFamily: 'Shabnam' }} className="my-4 text-black text-sm   leading-relaxed">
                    آیا از مسدود سازی کاربر انتخاب شده مطمئن هستید؟
                  </p>
                </div>

                <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
                  <button
                    style={{ fontFamily: 'Shabnam' }}
                    className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowBan(false)}
                  >
                    خیر
                  </button>
                  <button
                    style={{ fontFamily: 'Shabnam' }}
                    className="text-white   float-left bg-red shadow-redShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => suspendUser()}
                  >
                    بله
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>
        : null
      }
      {showLog ?
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[30%] xl:w-[50%] md:w-[80%] xs:w-[97%] my-5 mx-auto max-w-3xl">

              <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
                  <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold   text-black align-middle text-center">
                    مشاهده لاگ
                  </span>

                </div>


                <div className="flex flex-wrap p-6">
                  <p className="text-darkBlue" style={{ fontFamily: 'Shabnam' }}>
                    اخرین ورود به سامانه :دوشنبه ۱۲ تیر
                  </p>
                  <p className="text-darkBlue" style={{ fontFamily: 'Shabnam' }}>
                    نمایش اطلاعات لاگ سرور اینجا نمایش داده می شود.
                  </p>
                </div>

                <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">

                  <button
                    style={{ fontFamily: 'Shabnam' }}
                    className="text-white   float-left bg-mainColor shadow-blueShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowLog(false)}
                  >
                    بستن
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>
        : null
      }
    </>
  )


}

export default InternationalUserTable;