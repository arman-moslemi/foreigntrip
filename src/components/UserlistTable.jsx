import React from "react";
import {ReactComponent as Search} from "../assets/icon/white/search.svg"
const UserlistTable = () =>{

    return(
        <>
        <div className="flex justify-between items-center mt-5">
            <div className="flex items-center">
                <span className="font-IRSans text-mainColor font-bold text-base ml-4">
                    جستجو در بین کاربران
                </span>
                <input type="text" className="border rounded-full w-80 border-midGray px-4 py-1.5 font-IRsans" placeholder="جستجو کنید ..."/>
            </div>
            <button className="bg-mainColor shadow-blueShadow rounded-md text-base font-IRsans text-white flex px-5 py-2  items-center justify-center">
                <Search/>
                جستجو

            </button>
        </div>
        </>
    )


}

export default UserlistTable;