import React from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import NewRequestFormStep4 from "../../components/NewRequestFormStep4";
import {ReactComponent as Add} from "../../assets/icon/blue/add.svg"
const NewRequestStep4 = () => {
    return (
        <div
            className="w-full h-full bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full"
            style={{
            direction: 'rtl'
        }}>

            <div className="flex md:block">
                <AgentRightMenu/>
                <div
                    className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                    <div className="border-b border-b-midGray border-dashed">
                        <div className="flex-col pb-5 px-12 pt-12 ">
                            <div className="flex items-center mb-6">
                                <Add/>
                                <span style={{fontFamily:'Shabnam'}} className="font-IRsans text-mainColor mr-3 font-bold text-base">
                                    ثبت درخواست جدید
                                </span>
                            </div>
                            <p style={{fontFamily:'Shabnam'}} className="font-IRsans font-normal text-base">فرم زیر را با دقت پر کنید تا
                                درخواست شما ثبت شود .پس از بررسی درخواست شما ،اجازه ی سفر برای شما صادر میشود.</p>
                        </div>

                    </div>
                    <div className="px-12 pb-12 ">

                        <NewRequestFormStep4/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NewRequestStep4;

/*responsive--done*/