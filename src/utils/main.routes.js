import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewRequest from "../pages/UserPanel/NewRequest";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import ChangePassStep1 from "../pages/Login/ChangePassStep1";
import ChangePassStep2 from "../pages/Login/ChangePassStep2";
import NewPassword from "../pages/Login/NewPassword";
import RequestRegistered from "../pages/UserPanel/RequestRegistered";
import RequestHistory from "../pages/UserPanel/RequestHistory";
const MainRoutes = (props) =>{
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/newRequest" element={<NewRequest/>} />
                </Routes>
                <Routes>
                    <Route path="/" element={<Login/>} />
                </Routes>
                <Routes>
                    <Route path="/signup" element={<SignUp/>} />
                </Routes>
                <Routes>
                    <Route path="/changePassStep1" element={<ChangePassStep1/>} />
                </Routes>
                <Routes>
                    <Route path="/changePassStep2" element={<ChangePassStep2/>} />
                </Routes>
                <Routes>
                    <Route path="/newPassword" element={<NewPassword/>} />
                </Routes>
                <Routes>
                    <Route path="/requestRegistered" element={<RequestRegistered/>} />
                </Routes>
                <Routes>
                    <Route path="/requestHistory" element={<RequestHistory/>} />
                </Routes>
            </BrowserRouter>
    )
}
export default MainRoutes;