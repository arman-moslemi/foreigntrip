import React from "react";
import './components.css';
import { Link } from "react-router-dom";
import { ReactComponent as Eye } from "../../assets/icon/black/eye.svg"
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

const InternationalTicketListTable = ({ data }) => {

  const tableRow = [
    {
      id: '1',
      num: '1',
      date: '#1234',
      subject: truncate("فراموشی رمز عبور ...", 30),
      location: '02/02/12-23:50',
      status: <span style={{ fontFamily: 'Shabnam' }} className="text-sm text-[#ffd200] font-bold  ">بسته شده</span >,
      function: <Link style={{ fontFamily: 'Shabnam' }} className="flex justify-center" to={'/expert/ticketShow'}>
        <Eye />
      </Link>


    },
    {
      id: '2',
      num: '2',
      date: '#4323',
      subject: truncate("فراموشی رمز عبور ...", 30),
      location: '02/02/12-23:50',
      status: <span style={{ fontFamily: 'Shabnam' }} className="text-sm text-green font-bold  ">پاسخ داده شده</span >,
      function: <Link style={{ fontFamily: 'Shabnam' }} className="flex justify-center" to={'/expert/ticketShow'}>
        <Eye />
      </Link>

    },
    {
      id: '3',
      num: '3',
      date: '#4321',
      subject: truncate("فراموشی رمز عبور ...", 30),
      location: '02/02/12-23:50',
      status: <span style={{ fontFamily: 'Shabnam' }} className="text-sm text-[#ff6900] font-bold  ">در انتظار پاسخ</span >,
      function: <Link style={{ fontFamily: 'Shabnam' }} className="flex justify-center" to={'/expert/ticketShow'}>
        <Eye />
      </Link>
    },
    {
      id: '4',
      num: '4',
      date: '#2323',
      subject: truncate("فراموشی رمز عبور ...", 30),
      location: '02/02/12-23:50',
      status: <span style={{ fontFamily: 'Shabnam' }} className="text-sm text-green font-bold  ">پاسخ داده شده</span >,
      function: <Link style={{ fontFamily: 'Shabnam' }} className="flex justify-center" to={'/expert/ticketShow'}>
        <Eye />
      </Link>
    },
    {
      id: '5',
      num: '5',
      date: '#1212',
      subject: truncate("فراموشی رمز عبور ...", 30),
      location: '02/02/12-23:50',
      status: <span style={{ fontFamily: 'Shabnam' }} className="text-sm text-[#ff6900] font-bold  ">در انتظار پاسخ</span >,
      function: <Link style={{ fontFamily: 'Shabnam' }} className="flex justify-center" to={'/expert/ticketShow'}>
        <Eye />
      </Link>
    }
  ]
  const tableBody = data?.map((tableRow, index) =>
    <tr key={tableRow.id} className="border-b border-b-borderGray">
      <td className="py-4 text-sm text-center pr-4  " style={{ fontFamily: 'Shabnam' }}>{index + 1}</td>
      <td className="py-4 text-sm text-center pr-4 " style={{ fontFamily: 'Shabnam' }}>{tableRow.ticketNumber}</td>
      <td className="py-4 text-sm text-right  pr-4 truncate" style={{ fontFamily: 'Shabnam' }}>{tableRow.subject}</td>
      <td className="py-4 text-sm text-center pr-4 " style={{ fontFamily: 'Shabnam' }} >{tableRow.latestUpdate}</td>
      <td className="py-4 text-sm text-center pr-4 " style={{ fontFamily: 'Shabnam' }}>
        {
          tableRow?.ticketStatusId == 1 ?
            <span style={{ fontFamily: 'Shabnam' }} className="text-sm text-[#ff6900] font-bold  "> {tableRow?.ticketStatus?.ticketStatusTitle}</span >
            :
            tableRow?.ticketStatusId == 2 ?
              <span style={{ fontFamily: 'Shabnam' }} className="text-sm text-green font-bold  "  > {tableRow?.ticketStatus?.ticketStatusTitle}</span >
              :
              <span style={{ fontFamily: 'Shabnam' }} className="text-sm text-green font-bold ">     {tableRow?.ticketStatus?.ticketStatusTitle}</span >
        }

      </td>
      <td className="py-4 text-sm text-center pr-4 pl-4 " style={{ fontFamily: 'Shabnam' }}>
        <Link style={{ fontFamily: 'Shabnam' }} className="flex justify-center" to={'/expert/ticketShow/' + tableRow?.ticketId}>
          <Eye />
        </Link></td>
    </tr>
  )
  return (
    <div className=" mt-10 border-borderGray border border-solid w-full overflow-x-auto whitespace-nowrap ">
      <table class="table-auto w-full  ">
        <thead className="bg-darkGray h-11 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll" style={{ borderRadius: '20px' }}>
          <tr className="text-white  p-6 whitespace-nowrap overflow-x-scroll" style={{ borderRadius: '20px' }}>
            <th className="text-center pr-4  " style={{ fontFamily: 'Shabnam' }}>ردیف</th>
            <th className="text-center   pr-4 " style={{ fontFamily: 'Shabnam' }}>شماره تیکت</th>
            <th className="text-right   pr-4 " style={{ fontFamily: 'Shabnam' }}>موضوع تیکت</th>
            <th className="text-center font-IRsan pr-4 " style={{ fontFamily: 'Shabnam' }}>آخرین به روز رسانی</th>
            <th className="text-center   pr-4 " style={{ fontFamily: 'Shabnam' }}>وضعیت تیکت</th>
            <th className="text-center   pr-4 pl-4" style={{ fontFamily: 'Shabnam' }} >مشاهده</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}

        </tbody>
      </table>

    </div>
  )
}
export default InternationalTicketListTable;