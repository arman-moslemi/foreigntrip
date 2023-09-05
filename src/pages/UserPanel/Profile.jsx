import React from "react";
import AgentRightMenu from "../../components/AgentRightMenu";
import ProfileInfo from "../../components/Profile";
const Profile = () => {
    return(
        <div className="w-full h-full bg-lightGray py-10 px-20 xl:px-0 md:p-0  lg:h-full" style={{direction:'rtl'}}>
            <div className="flex md:block">
                <AgentRightMenu/>
                <div className="bg-white rounded-tr-none rounded-br-none rounded-tl-2xl rounded-bl-2xl p-12 my-10 w-[80%] xl:p-5 md:w-[95%] md:rounded-xl md:mx-auto">
                <ProfileInfo/>
                </div>
            </div>
        </div>
    )
}
export default Profile;

/*responsive -- done */