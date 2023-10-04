import React, {useEffect,useState } from "react";
import ExpertRightMenu from "../../components/ExpertComponent/ExpertRightMenu";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import { axiosReq } from "../../commons/axiosReq";
import { useNavigate, useParams } from "react-router-dom";


const ExpertReportsView = () => {
  const [show, setShow] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showSendModal, setShowSendModal] = React.useState(false);
  const [data, setData] = useState();
  const [rejDes, setRejDes] = useState();
  const [reCheck, setRecheck] = useState(false);
  const id = useParams().id;

  let navigate = useNavigate();

  useEffect(() => {

    auth();
  }, [reCheck]);
  const auth = async () => {
    const cookies = new Cookies();
    var token = cookies.get('token');
    console.log(token)
    if (!token) {
      navigate("/");
    } else {
      if (cookies.get('Role') == "InternationalExpert") {
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



    const dataUser = await axiosReq("Report/GetReportByRequest", {
      RequestId: id
    });
    console.log(dataUser)
    setData(dataUser.data)



  }
  const RejectRep = async () => {
    console.log(1234)
    const dataUser = await axiosReq("InternationalExpert/RejectReportExpert", {
      RequestId: id,
      RejectRequest:rejDes
    });
    if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
    
      setShowSendModal(true)
  }
  else {
      alert("اطلاعات ورودی نادرست می باشند")
  }
  
  
  }
  const AcceptRep = async () => {
    console.log(1234)
    const dataUser = await axiosReq("InternationalExpert/AcceptReportExpert", {
      RequestId: id
    });
    if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
      setShowSuccessModal(true)
  
  }
  else {
      alert("اطلاعات ورودی نادرست می باشند")
  }
  
  
  }
  return (
    <div className="w-full h-screen  bg-lightGray py-10 px-20 lg:px-8 md:p-0  lg:h-full" style={{ direction: 'rtl' }}>
      <div className="flex md:block">
        <ExpertRightMenu />
        <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] md:min-w-[95%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
          <div className="flex items-center justify-between">

            <span style={{ fontFamily: 'Shabnam' }} className="  text-mainColor  font-bold">
              مشاهده گزارش ارسال شده
            </span>

          </div>
          {
            data?.request?
            <div className="flex justify-between flex-wrap">
            <div className="w-full my-3">
              <p style={{ fontFamily: 'Shabnam' }} className="  text-base font-bold text-[#0D296E]">
                نام و نام خانوادگی مامور  :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray text-sm font-medium">
{data?.request?.agent?.agentName} {data?.request?.agent?.agentFamily}                 </span>
              </p>
            </div>
            <div className="w-[50%] xl-lg:w-[100%] my-3 md:w-full">
              <p style={{ fontFamily: 'Shabnam' }} className="2xs:grid  text-base font-bold text-[#0D296E]">
                شماره و تاریخ درخواست :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                 {data?.request?.dateLetter}
                </span>
              </p>
            </div>
            <div className="w-[50%] xl-lg:w-[100%] my-3 md:w-full">
              <p style={{ fontFamily: 'Shabnam' }} className="2xs:grid  text-base font-bold text-[#0D296E]">
                شماره و تاریخ مجوز :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                {data?.request?.data?.approvedBy} 
                </span>
              </p>
            </div>
            <div className="w-[50%] xl-lg:w-[100%] my-3 md:w-full">
              <p style={{ fontFamily: 'Shabnam' }} className="2xs:grid  text-base font-bold text-[#0D296E]">
                تاریخ انجام سفر :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                {data?.request?.travelDateStart}
                </span>
              </p>
            </div>
            <div className="w-[50%] xl-lg:w-[100%] my-3 md:w-full">
              <p style={{ fontFamily: 'Shabnam' }} className=" 2xs:grid  text-base font-bold text-[#0D296E]">
                آدرس الکترونیکی دستگاه مقصد :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray 2xs:mt-1 text-sm font-medium">
             {data?.request?.internetAddressOfTheExecutiveDevice}
                </span>
              </p>
            </div>
            <div className="w-[50%] lg-md:w-[100%] my-3 md:w-full">
              <p style={{ fontFamily: 'Shabnam' }} className=" 2xs:grid text-base font-bold text-[#0D296E]">
                نام دستگاه داخلی :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                {data?.request?.ExecutiveDeviceName}
                </span>
              </p>
            </div>
            <div className="w-[50%] lg-md:w-[100%] my-3 md:w-full">
              <p style={{ fontFamily: 'Shabnam' }} className=" 2xs:grid text-base font-bold text-[#0D296E]">
                نام دستگاه مقصد :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                {data.request?.executiveDeviceName}
                </span>
              </p>
            </div>
         
            <div className="w-[50%] lg-md:w-[100%] my-3 md:w-full">
              <p style={{ fontFamily: 'Shabnam' }} className="2xs:grid  text-base font-bold text-[#0D296E]">
                کشور مقصد :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                  {data?.request?.destinationCountry}
                </span>
              </p>
            </div>
            <div className="w-[50%] lg-md:w-[100%] my-3 md:w-full">
              <p style={{ fontFamily: 'Shabnam' }} className="2xs:grid  text-base font-bold text-[#0D296E]">
                شهر مقصد :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray 2xs:mt-1 text-sm font-medium">
                  {data?.request?.destinationCity}
                </span>
              </p>
            </div>
            <div className="w-full my-3 md:w-full">
              <p style={{ fontFamily: 'Shabnam' }} className=" text-justify  text-base font-bold text-[#0D296E]">
                خلاصه دستاورد سفر(اعم از مکان های مورد بازدید طرفها و مقامات ملاقات شونده موضوعات مطروحه توافقات بعمل آمده موارد کاربردی برای سایر دستگاه های ذیربط و ...) :
                <span>   </span>
                <span style={{ fontFamily: 'Shabnam' }} className="text-darkGray text-sm font-medium">
                 {data?.reportAchievement}
                </span>
              </p>
            </div>
          </div>
            :
            null
          }
         
          {
            show ?
              <div className="mt-20 w-full">
                <p style={{ fontFamily: 'Shabnam' }} className="  text-base font-bold text-[#0D296E]">
                  علت رد گزارش مامور اعزامی را اینجا بنویسید
                </p>
                <textarea onChange={(e)=>setRejDes(e.target.value)} style={{ fontFamily: 'Shabnam' }} id="message" rows="8" class="block p-2.5 mt-5   w-full text-sm text-gray-900 bg-gray-50 rounded border  border-borderGray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="توضیحات خود را اینجا بنویسید..."></textarea>
                <div className="flex justify-end w-full">

                  <button onClick={()=>RejectRep()} style={{ fontFamily: 'Shabnam' }}  className="mt-5 min-w-[120px] xs:w-[100%] h-8 px-2 bg-mainColor shadow-blueShadow   text-white text-sm rounded-lg hover:bg-lightBlue hover:text-mainColor ">
                    ارسال
                  </button>
                  {showSendModal ?
                    <>
                      <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        <div className="relative w-auto my-5 mx-auto max-w-3xl">

                          <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                            <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                              <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold   text-red">
                                رد گزارش
                              </span>

                            </div>

                            <div className="relative p-6 flex-auto">
                              <p style={{ fontFamily: 'Shabnam' }} className="my-4 text-black text-sm   leading-relaxed">
                                علت رد گزارش مامور اعزامی با موفقیت برای ایشان ارسال گردید.
                              </p>
                            </div>

                            <div className="flex items-center justify-endborder-t justify-end border-solid border-slate-200 rounded-b">
                              <button style={{ fontFamily: 'Shabnam' }}
                                className="text-mainColor   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowSendModal(false)}
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
                </div>
              </div>
              :
              <div className="flex w-full justify-end mt-10">
                <button style={{ fontFamily: 'Shabnam' }} className=" bg-[#ff0000] w-[162px] xs:w-[49%] rounded-md h-[40px] flex justify-center items-center text-white    font-medium text-base shadow-redShadow hover:bg-white hover:text-[#ff0000] hover:border-2 hover:border-[#ff0000]"
                  onClick={() => setShow(true)
                  }>
                  رد کردن گزارش
                </button>
                <button style={{ fontFamily: 'Shabnam' }} onClick={() => setShowSuccessModal(true)} className="mr-5 xs:mr-3 xs:w-[49%] bg-[#3AB50E] hover:bg-white hover:text-[#3AB50E] hover:border-2 hover:border-[#3AB50E] w-[162px] rounded-md h-[40px] flex justify-center items-center text-white    font-medium text-base shadow-greenShadow">
                  تایید گزارش
                </button>
                {showSuccessModal ?
                  <>
                    <div
                      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                      <div className="relative w-[30%] xl-lg:w-[45%] md:w-[70%] xs:w-[330px] my-5 mx-auto max-w-3xl">

                        <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                          <div className="flex items-start justify-between p-4 border-b border-solid border-b-midGray rounded-t">
                            <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold   text-green">
                              تایید گزارش
                            </span>

                          </div>

                          <div className="relative p-6 flex-auto">
                            <p style={{ fontFamily: 'Shabnam' }} className="my-4 text-black text-sm  ">
                              تایید گزارش مامور اعزامی با موفقیت انجام شد.
                            </p>
                          </div>

                          <div className="flex items-center justify-center  border-solid border-slate-200 rounded-b mb-4">

                            <Link to={'/expert/requestList'} style={{ fontFamily: 'Shabnam' }}
                              className=" float-left flex items-center bg-mainColor rounded-md shadow-blueShadow uppercase px-8 py-2 mx-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => AcceptRep()}
                            >

                              <span style={{ fontFamily: 'Shabnam' }} className="text-white   text-sm font-bold">
                                ادامه
                              </span>


                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

                  </>
                  : null
                }

              </div>
          }
        </div>
      </div>
    </div>
  )
}
export default ExpertReportsView;

/*responsive--done*/