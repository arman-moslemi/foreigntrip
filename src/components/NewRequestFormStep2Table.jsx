import React,{useState} from "react";
import './components.css';
import {ReactComponent as Pencil} from "../assets/icon/blue/pencil.svg"
import {ReactComponent as Trash} from "../assets/icon/blue/trash.svg"
import { axiosReq } from "../commons/axiosReq";

export const truncate = (str, len) => {
    // console.log("truncate", str, str.length, len);
    if (str.length > len && str.length > 0) {
        let new_str = str + " ";
        new_str = str.substr(0, len);
        new_str = str.substr(0, new_str.lastIndexOf(" "));
        new_str = new_str.length > 0
            ? new_str
            : str.substr(0, len);
        return new_str + "...";
    }
    return str;
};

const NewRequestFormStep2Table = ({data,setRecheck,reCheck}) => {
    const [showError,setShowError]= useState(false);
    const [id,setID] = useState();

    const tableBody = data?.map((tableRow) => <tr key={tableRow.requestId} className="border-b border-b-borderGray">
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-right pr-4 px-4">{tableRow.employeeName} {tableRow.employeeFamily}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-right px-4 ">{tableRow.employeeFatherName}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-right px-4 ">{tableRow.birthCertificationNumber}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.nationalCode}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.birthCertificationDate}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.gender?.genderType}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.maritalStatus?.maritalStatusType}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.degree}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.fieldOfStudy}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.workExperience}سال</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.mobile}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.phone}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.passPortType?.passportType}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.jobLocation}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.position?.positionType}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4">{tableRow.employeeStatus}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 pl-4 flex"><div className="ml-1.5"></div><div className="ml-1.5"><Trash onClick={()=>{setID(tableRow?.requestEmployeeId);setShowError(true)}} className="w-4 h-4 cursor-pointer"/></div></td>
    </tr>)

const deleteUser=async()=>{
    console.log(1234)
 
 
   const dataUser = await axiosReq("Request/RemoveEmployeeRequest",{
    RequestEmployeeId:id
   });
   if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
setRecheck(!reCheck)
setShowError(false)
}
else {
    alert("عملیات با خطا روبرو شد.")
}

   
   }
    return (

        <div className="">
            <div
                className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
                <table class="table-auto w-full overflow-scroll">
                    <thead
                        className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll pl-4"
                        style={{
                        borderRadius: '20px'
                    }}>
                        <tr
                            className="text-white  p-6 whitespace-nowrap overflow-x-scroll pl-4"
                            style={{
                            borderRadius: '20px'
                        }}>

                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-right text-xs md:px-4 pr-4">نام و نام خانوادگی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">نام پدر</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">شماره شناسنامه</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">کد ملی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">تاریخ تولد</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">جنسیت</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">تاهل</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">مدرک/رشته تحصیلی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">میزان آشنایی با زبان خارجی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">سابقه کار</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">تلفن همراه</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">تلفن ثابت</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">نوع گذرنامه</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">محل خدمت</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">سمت</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4">وضعیت استخدامی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="px-4 text-center text-xs md:px-4 pl-4">حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}

                    </tbody>
                </table>
                {
  showError ?
  <>
  <div
  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
>
  <div className="relative w-auto my-5 mx-auto max-w-3xl">
   
    <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
 
      <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
        <span style={{fontFamily:'Shabnam'}} className="text-base font-bold   text-black align-middle text-center">
         هشدار!
        </span>
     
      </div>
      
      <div className="relative p-6 flex-auto">
        <p style={{fontFamily:'Shabnam'}} className="my-4 text-black text-sm   leading-relaxed">
     آیا از حذف کاربر ناظر انتخاب شده مطمئن هستید؟
        </p>
      </div>
     
      <div className="flex items-center justify-center  border-solid border-slate-200 rounded-b">
        <button
        style={{fontFamily:'Shabnam'}}
          className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowError(false)}
        >
          خیر
        </button>
        <button
        style={{fontFamily:'Shabnam'}}
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
 : 
 null
}
            </div>
        </div>

    )
}
export default NewRequestFormStep2Table;