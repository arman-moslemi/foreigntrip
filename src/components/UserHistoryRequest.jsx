import React from "react";


const UserHistoryRequest = () =>{

    return(
        <>
        <table class="table-fixed w-full">
  <thead className="bg-darkGray h-11 rounded-t-2xl" style={{borderRadius:'20px'}}> 
    <tr className="text-white  p-6" style={{borderRadius:'20px'}}>
      <th>ردیف</th>
      <th>تاریخ سفر</th>
      <th>موضوع سفر</th>
      <th>کشور مقصد</th>
      <th>وضعیت</th>
      <th>عملیات</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>۱</td>
      <td>۱۴۰۲/۰۵/۱۲</td>
      <td>لغو قرارداد شماره ۱۲۴ وزارت خانه</td>
    <td>اندونزی</td>
      <td>رد شده</td>
      <td><button className="mx-auto block w-auto h-10 bg-mainColor shadow-blueShadow mt-7 font-IRsans text-white text-lg rounded-lg hover:bg-lightBlue hover:text-mainColor">
                         مشاهده تاریخچه درخواست ها
                        </button></td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
        </>
    )
}
export default UserHistoryRequest;