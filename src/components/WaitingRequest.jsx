import React,{useState} from "react";
import { Link } from "react-router-dom";
import RequestDetail from "./RequestDetail";

import Signature from "./Signature";

const WaitingRequest = () =>{

    return (
        <div className="border border-borderGray rounded-md pt-10 px-5 py-5 mt-7">
  <RequestDetail/>
      <Signature/>
           
           
        </div>
    )
}
export default WaitingRequest;