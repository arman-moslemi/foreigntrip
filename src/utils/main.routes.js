import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewRequestStep1 from "../pages/UserPanel/NewRequestStep1";
import NewRequestStep2 from "../pages/UserPanel/NewRequestStep2";
import NewRequestStep3 from "../pages/UserPanel/NewRequestStep3";
import NewRequestStep4 from "../pages/UserPanel/NewRequestStep4";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import SignUpDone from "../pages/Login/SignUpDone";

import NewPassword from "../pages/Login/NewPassword";
import RequestRegistered from "../pages/UserPanel/RequestRegistered";
import RequestHistory from "../pages/UserPanel/RequestHistory";
import Profile from "../pages/UserPanel/Profile";
import SubmitReport from "../pages/UserPanel/SubmitReport";
import PassportRequest from "../pages/UserPanel/PassportRequest";
import Request from "../pages/MainPanelLast/Requests";
import NewIncomeRequest from "../pages/MainPanelLast/NewIncomeRequest";
import NewIncomeRequestAccepted from "../pages/MainPanelLast/NewIncomeRequestAccepted";
import RequestRejectedPage from "../pages/MainPanelLast/RequestRejected";
import ReportHistory from "../pages/MainPanelLast/ReportHistory";
import Traveling from "../pages/MainPanelLast/Traveling";
import TravelDone from "../pages/MainPanelLast/TravelDone";
import TravelTracking from "../pages/UserPanel/TravelTracking";
import TicketList from "../pages/UserPanel/TicketList";
import TicketShow from "../pages/UserPanel/TicketShow";

import Userlist from "../pages/Supervisor/Userlist";
import ReportList from "../pages/Supervisor/ReportList";
import ReportView from "../pages/Supervisor/ReportView";
import AgentList from "../pages/MainPanelLast/AgentList"; 
import SignUpRequest from "../pages/MainPanelLast/SignUpRequest";
import RegistrationRequestList from "../pages/MainPanelLast/RegistrationRequestList";
import Waiting from "../pages/MainPanelLast/Waiting";
import SignUpDetail from "../pages/MainPanelLast/SignUpDetail";
import Slist from "../pages/MainPanelLast/Slist";
import ChangePassword from "../pages/Login/ChangePassword";
import NewPasswordSet from "../pages/Login/NewPasswordSet";


/*   newPages */

import UserList from "../pages/MainPanel/UserList";
import AddAgent from "../pages/MainPanel/AddAgent";
import ReportsList from "../pages/MainPanel/ReportList";
import ReportsView from "../pages/MainPanel/ReportsView";
import TicketListMain from "../pages/MainPanel/TicketListMain";
import TicketShowMain from "../pages/MainPanel/TicketShowMain";
import AdminList from "../pages/MainPanel/AdminList";
import SendMessageList from "../pages/MainPanel/SendMessageList";
import Message from "../pages/MainPanel/Message";
import RequestsList from "../pages/MainPanel/RequestsList";
import RequestsView from "../pages/MainPanel/RequestsView";
const MainRoutes = (props) =>{
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/newRequestStep1" element={<NewRequestStep1/>} />
                </Routes>
                <Routes>
                    <Route path="/newRequestStep2" element={<NewRequestStep2/>} />
                </Routes>
                <Routes>
                    <Route path="/newRequestStep3" element={<NewRequestStep3/>} />
                </Routes>
                <Routes>
                    <Route path="/newRequestStep4" element={<NewRequestStep4/>} />
                </Routes>
                <Routes>
                    <Route path="/" element={<Login/>} />
                </Routes>
                <Routes>
                    <Route path="/signup" element={<SignUp/>} />
                </Routes>
                <Routes>
                    <Route path="/signUpDone" element={<SignUpDone/>} />
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
                <Routes>
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
                <Routes>
                    <Route path="/submitReport" element={<SubmitReport/>} />
                </Routes>
                <Routes>
                    <Route path="/passportRequest" element={<PassportRequest/>} />
                </Routes>
                <Routes>
                    <Route path="/requests" element={<Request/>} />
                </Routes>
                <Routes>
                    <Route path="/newIncomeRequest" element={<NewIncomeRequest/>} />
                </Routes>
                <Routes>
                    <Route path="/newIncomeAccepted" element={<NewIncomeRequestAccepted/>} />
                </Routes>
                <Routes>
                    <Route path="/requestRejected" element={<RequestRejectedPage/>} />
                </Routes>
                <Routes>
                    <Route path="/reportHistory" element={<ReportHistory/>} />
                </Routes>
                <Routes>
                    <Route path="/traveling" element={<Traveling/>} />
                </Routes>
                <Routes>
                    <Route path="/travelDone" element={<TravelDone/>} />
                </Routes>
                <Routes>
                    <Route path="/travelTracking" element={<TravelTracking/>} />
                </Routes>
                <Routes>
                    <Route path="/ticketList" element={<TicketList/>} />
                </Routes>
                <Routes>
                    <Route path="/ticketShow" element={<TicketShow/>} />
                </Routes>
                <Routes>
                    <Route path="/supervisor/userList" element={<Userlist/>}/>
                </Routes>
                <Routes>
                    <Route path="/supervisor/reportList" element={<ReportList/>}/>
                </Routes>
                <Routes>
                    <Route path="/supervisor/reportView" element={<ReportView/>}/>
                </Routes>
              
                <Routes>
                    <Route path="/agentList" element={<AgentList/>}/>
                </Routes>
                <Routes>
                    <Route path="/registrationRequestList" element={<RegistrationRequestList/>}/>
                </Routes>
                <Routes>
                    <Route path="/waiting" element={<Waiting/>}/>
                    <Route path="/signUpRequest" element={<SignUpRequest/>}/>
                </Routes>
                <Routes>
                    <Route path="/signUpDetail" element={<SignUpDetail/>}/>
                </Routes>
                <Routes>
                    <Route path="/supervisorList" element={<Slist/>}/>
                </Routes>
                <Routes>
                    <Route path="/changePassword" element={<ChangePassword/>}/>
                </Routes>
                <Routes>
                    <Route path="/newPasswordSet" element={<NewPasswordSet/>}/>
                </Routes>

                {/*
                
                newPages
            
    */}

                <Routes>
                    <Route path="/mainAdmin/userList" element={<UserList/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/addAgent" element={<AddAgent/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/reportList" element={<ReportsList/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/reportView" element={<ReportsView/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/ticketShowMain" element={<TicketShowMain/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/ticketListMain" element={<TicketListMain/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/adminList" element={<AdminList/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/sendMessageList" element={<SendMessageList/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/message" element={<Message/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/requestsList" element={<RequestsList/>}/>
                </Routes>
                <Routes>
                    <Route path="/mainAdmin/requestView" element={<RequestsView/>}/>
                </Routes>
            </BrowserRouter>
    )
}
export default MainRoutes;