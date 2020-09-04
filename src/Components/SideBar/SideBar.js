import React, { useState, useEffect, useRef, createRef } from "react";
import '../../Pages/DashBoard/Tracks/Tracks.css'
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
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../../Pages/DashBoard/Tracks/Tracks.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
    Link,
    useHistory,
} from "react-router-dom";

function Sidebar() {

    useEffect(() => { 
    },[]);

    const style = {
        backgroundColor: 'black',
        color: '#B3B3B3',
        textTransform: 'capitalize',
    }

    return (


        <div style={{ position: 'fixed', flexDirection: 'column', display: 'flex',  width: '255px' , height: '100vh' ,backgroundColor: 'black', color: 'white' ,   paddingTop: '20px', }}>
            <img
                src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1-1024x309.png"
                style={{ cursor: "pointer", width: '50%', marginLeft: '20px' }}
            />
            <div className="contIcon" >
                <Button
                    style={style}
                    variant="contained"
                    startIcon={<HomeOutlinedIcon />}
                >
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                        Home
                    </Link>
                </Button>
                <Button
                    style={style}

                    variant="contained"
                    startIcon={<SearchIcon />}
                >
                    <Link to="/Search" style={{ textDecoration: 'none', color: 'white' }}>
                        Search
                                </Link>
                </Button>
                <Button
                    style={style}

                    variant="contained"
                    startIcon={<LibraryMusicOutlinedIcon />}
                >
                    <Link to="" style={{ textDecoration: 'none', color: 'white' }}>Library</Link>
                </Button>
            </div >
        </div>
    );
}

export default Sidebar;
