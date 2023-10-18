import React, { useState, useEffect } from "react";
import InternationalRightMenu from "../../components/InternationalComponent/InternationalRightMenu";
import { ReactComponent as Doc } from "../../assets/icon/blue/doc.svg"
import { axiosReq } from "../../commons/axiosReq";
import { useNavigate } from "react-router-dom";
import InternationalUserTable from "../../components/InternationalComponent/InternationalUserTable";
import { Link } from "react-router-dom";
import ExpertTable from "../../components/ExpertComponent/ExpertTable";
import Cookies from 'universal-cookie';

const ExpertList = () => {
  const [showAdd,
    setShowAdd] = useState(false);
  const [reCheck, setRecheck] = useState(false);
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [family, setFamily] = useState();
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();
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
      if (cookies.get('Role') == "InternationalAdmin") {
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



    const dataUser = await axiosReq("InternationalAdmin/GetInternationalExpert");
    console.log(dataUser)
    setData(dataUser)



  }
  const addUser = async () => {
    console.log(1234)


    const dataUser = await axiosReq("InternationalAdmin/InsertInternationalExpert", {
      InternationalExpertName: name,
      InternationalExpertFamily: family,
      InternationalExpertUserName: userName,
      Password: pass
    });
    if (dataUser?.status == 200 || dataUser?.status == 204 || dataUser?.status == 201) {
      setRecheck(!reCheck)
      setShowAdd(false)
    }
    else {
      alert("عملیات با خطا روبرو شد.")
    }


  }
  return (
    <div className="w-full h-full bg-lightGray py-10 px-10 lg:px-8  md:p-0  lg:h-full" style={{ direction: 'rtl' }}>
      <div className="flex md:block">
        <InternationalRightMenu />
        <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] min-w-[500px] lg:min-w-[450px] md:min-w-[95%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">

          <div className="flex justify-between 2xs:flex-col 2xs:items-start">
            <div className="flex items-center">
              <Doc />
              <span style={{ fontFamily: 'Shabnam' }} className="  text-mainColor mr-3 font-bold">
                لیست کارشناسان
              </span>

            </div>

            <button onClick={() => setShowAdd(true)} className="bg-mainColor 2xs:w-[100%] 2xs:mt-4 2xs:mx-0 shadow-blueShadow py-2 px-4 text-white mr-2 rounded-md" style={{ fontFamily: 'Shabnam' }} >
              + ثبت نام
            </button>
          </div>
          {
            showAdd ?
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-2xl my-5 mx-auto max-w-2xl">

                    <div className="border-0 rounded-lg p-2 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                      <div className="text-center p-4 border-b border-solid border-b-midGray rounded-t">
                        <span style={{ fontFamily: 'Shabnam' }} className="text-base font-bold   text-black align-middle text-center">
                          افزودن کارشناس
                        </span>

                      </div>

                      <div className="flex flex-wrap p-6">
                        <div className="flex flex-col w-[39%] xs:w-[100%] xs:ml-0 xs:mb-6 ml-[2%]">
                          <span style={{ fontFamily: 'Shabnam' }} className="  text-[#0D296E] font-bold text-sm">
                            نام
                          </span>
                          <input value={name} onChange={(e) => setName(e.target.value)} className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="علی" />
                        </div>
                        <div className="flex flex-col w-[59%] xs:w-[100%]">
                          <span style={{ fontFamily: 'Shabnam' }} className="  text-[#0D296E] font-bold text-sm">
                            نام خانوادگی
                          </span>
                          <input value={family} onChange={(e) => setFamily(e.target.value)} className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="اطهری" />
                        </div>
                      </div>
                      <div className="flex flex-col w-[100%] px-6 mb-6">
                        <span style={{ fontFamily: 'Shabnam' }} className="  text-[#0D296E] font-bold text-sm">
                          نام کاربری
                        </span>
                        <input value={userName} onChange={(e) => setUserName(e.target.value)} className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="۰۰۲۰۷۶۸۹۷۶" />
                      </div>
                      <div className="flex flex-col w-[100%] px-6 mb-6">
                        <span style={{ fontFamily: 'Shabnam' }} className="  text-[#0D296E] font-bold text-sm">
                          رمز عبور
                        </span>
                        <input onChange={(e) => setPass(e.target.value)} className="border border-borderGray rounded-md px-2 py-1   mt-2" placeholder="۰۹۱۲۸۷۶۸۷۶۵" />
                      </div>

                      <div className="flex items-center justify-center justify-end border-solid border-slate-200 rounded-b">
                        <button
                          style={{ fontFamily: 'Shabnam' }}
                          className="text-black   float-left background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowAdd(false)}
                        >
                          بستن
                        </button>
                        <button
                          style={{ fontFamily: 'Shabnam' }}
                          className="text-white   float-left bg-mainColor shadow-blueShadow rounded-md font-bold uppercase px-10 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => addUser()}
                        >
                          افزودن
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
          <ExpertTable data={data} reCheck={reCheck} setRecheck={setRecheck} />
        </div>
      </div>


    </div>
  )
}
export default ExpertList;

/*responsive--done*/