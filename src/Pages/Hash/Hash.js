import React, { useState, useEffect } from "react";
import {  useLocation, useHistory } from "react-router-dom";

function Hash() {
  const [hash, setHash] = useState();
  let history = useHistory();
  const paramToken = useLocation();

  const getHash = () => {

    let arrStringStr = paramToken.hash.split("=");
    let stringNoHash = arrStringStr[1].split("&");

    let stringNoHashOfZero = stringNoHash[0];
    setHash(stringNoHashOfZero);

    const token = JSON.stringify(stringNoHashOfZero);
    localStorage.setItem('token', token);
  }

  useEffect(() => {
    getHash();
    history.push('/dashboard')
  
  }, []);

  return <div></div>;
}

export default Hash;
