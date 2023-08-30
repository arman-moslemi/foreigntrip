import React from "react";
import './components.css';
import {ReactComponent as Pencil} from "../assets/icon/blue/pencil.svg"
import {ReactComponent as Trash} from "../assets/icon/blue/trash.svg"

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

const NewRequestFormStep2Table = () => {

    const tableRow = [
        {
            id: '1',
            name: 'علی اسد زاده',
            father: 'سید امیرقاسم',
            idNumber: '0020145869',
            nationalCode: '0020145869',
            birthday: '1350/10/28',
            gender: 'آقا',
            maritalStatus: 'متاهل',
            degree: 'دکترا/معماری سیتم های کامپیوتری',
            foreign: 'متوسط',
            experience: '12 سال',
            phoneNumber: '09124759846',
            landLineNumber: '02122698547',
            passportType: 'سیاسی',
            location: 'هولدینگ شستا',
            position: 'مدیر عامل',
            employmentStatus: 'پیمانی'
        }, {
            id: '2',
            name: 'علی اسد زاده',
            father: 'سید امیرقاسم',
            idNumber: '0020145869',
            nationalCode: '0020145869',
            birthday: '1350/10/28',
            gender: 'آقا',
            maritalStatus: 'متاهل',
            degree: 'دکترا/معماری سیتم های کامپیوتری',
            foreign: 'متوسط',
            experience: '12 سال',
            phoneNumber: '09124759846',
            landLineNumber: '02122698547',
            passportType: 'سیاسی',
            location: 'هولدینگ شستا',
            position: 'مدیر عامل',
            employmentStatus: 'پیمانی'
        }
    ]
    const tableBody = tableRow.map((tableRow) => <tr key={tableRow.id} className="border-b border-b-borderGray">
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-right pr-4 px-4">{tableRow.name}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-right px-4 ">{tableRow.father}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-right px-4 ">{tableRow.idNumber}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.nationalCode}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.birthday}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.gender}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.maritalStatus}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.degree}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.foreign}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.experience}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.phoneNumber}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.landLineNumber}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.passportType}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.location}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 ">{tableRow.position}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4">{tableRow.employmentStatus}</td>
        <td
            style={{
            fontFamily: 'Shabnam'
        }}
            className="py-4 text-xs text-center px-4 pl-4 flex"><div className="ml-1.5"><Pencil className="w-4 h-4"/></div><div className="ml-1.5"><Trash className="w-4 h-4"/></div></td>
    </tr>)
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
                                className="text-right text-xs md:px-4 pr-4">نام و نام خانوادگی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">نام پدر</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">شماره شناسنامه</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">کد ملی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">تاریخ تولد</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">جنسیت</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">تاهل</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">مدرک/رشته تحصیلی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">میزان آشنایی با زبان خارجی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">سابقه کار</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">تلفن همراه</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">تلفن ثابت</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">نوع گذرنامه</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">محل خدمت</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">سمت</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4">وضعیت استخدامی</th>
                            <th
                                style={{
                                fontFamily: 'Shabnam'
                            }}
                                className="text-center text-xs md:px-4 pl-4">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}

                    </tbody>
                </table>

            </div>
        </div>

    )
}
export default NewRequestFormStep2Table;