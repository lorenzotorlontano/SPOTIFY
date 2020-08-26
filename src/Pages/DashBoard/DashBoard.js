import React, { useState, useEffect } from "react";
import Card from '../../Pages/DashBoard/Card/Card'
import { getPlaylist } from "../../Api/Api";
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header'

function DashBoard() {

  const [user, setUser] = useState();

  // const resp = getPlaylist().then((re) => {
  //   setUser(re.data.items[0]);
  // })

  useEffect(() => {
    const resp = getPlaylist().then((re) => {
      setUser(re.data.items[0])
    })
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default DashBoard;
