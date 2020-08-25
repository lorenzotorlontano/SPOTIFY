import React, { useState, useEffect } from "react";
import { getPlaylist } from "../../../Api/Api";
import { useLocation } from 'react-router-dom';

function Card() {
  const [artist, setArtist] = useState();
  const location = useLocation();

  
  useEffect(() => {
      console.log(location.pathname)
    getPlaylist()
    console.log(getPlaylist());
  },[]);

  return <div></div>;
}

export default Card;
