import React from "react";
import './components.css';

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

const RequestViewStep2 = ({data}) =>{
  

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

</tr>)
    return(

      <div className="border-b border-dashed border-[#CCCCCD] pb-4">
         <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
          <table class="table-auto w-full ">
  <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll pl-4" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll pl-4" style={{borderRadius:'20px'}}>
     
      <th style={{fontFamily:'Shabnam'}} className="text-right text-xs md:px-4 pr-4">نام و نام خانوادگی</th>
      <th style={{fontFamily:'Shabnam'}} className="text-right text-xs md:px-4">نام پدر</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4s">شماره شناسنامه</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4">کد ملی</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >تاریخ تولد</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >جنسیت</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >تاهل</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >مدرک/رشته تحصیلی</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >میزان آشنایی با زبان خارجی</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >سابقه کار</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >تلفن همراه</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >تلفن ثابت</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >نوع گذرنامه</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >محل خدمت</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4" >سمت</th>
      <th style={{fontFamily:'Shabnam'}} className="text-center text-xs md:px-4 pl-4" >وضعیت استخدامی</th>
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
export default RequestViewStep2;