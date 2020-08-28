import React, { useState, useEffect } from "react";
import Card from '../../Pages/DashBoard/Card/Card'
import { getPlaylist } from "../../Api/Api";
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header'
import '../DashBoard/DashBoard.css'

function DashBoard() {

  return (
    <div className="wrapperDashboard">
      <Card/>
    </div>
  );
}

export default DashBoard;
