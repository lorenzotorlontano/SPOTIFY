import React, { useState, useEffect, useRef, createRef } from "react";
import { useParams } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Button from '@material-ui/core/Button';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import TopBar from '../../Pages/DashBoard/Topbar/Topbar'
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Sidebar from '../../Components/SideBar/SideBar';
import Categories from '../Search/Categories/Categories'
import '../Search/Search.css'

function DetailsCategorys() {
  const [DetailsCategorys, setDetailsCategory] = useState();
  const { id } = useParams();

  let currentPath = window.location.pathname;

  const splittedString = currentPath.split("/");
  console.log("siamo su detailcategory porco dio", splittedString);

  return (
    <div style={{}}>
      <p>cia</p>
    </div>
  );
}

export default DetailsCategorys;
