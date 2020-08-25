import React, { useState , useEffect} from "react";
import {getPlaylist} from '../../Api/Api'

function DashBoard() {

  useEffect(()=>{
      getPlaylist()
  },[])

 
  return (
    <div>
      <p>DASHBOARD</p>
    </div>
  );
}

export default DashBoard;
