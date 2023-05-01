import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPanel from "../pages/UserPanel/UserPanel";
import Login from "../pages/Login/Login";


const MainRoutes = (props) =>{
    return(
        <BrowserRouter>
    	<Routes>
    <Route path="/" element={<UserPanel/>} />
	</Routes>
    <Routes>
    <Route path="/login" element={<Login/>} />
	</Routes>
    </BrowserRouter>
    )
}
export default MainRoutes;