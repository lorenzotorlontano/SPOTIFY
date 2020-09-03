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
import '../Search/Search.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";


function Search() {

    const { id } = useParams();

    useEffect(() => {

    }, [id]);

    const style = {
        backgroundColor: 'black',
        color: '#B3B3B3',
        textTransform: 'capitalize',
    }




    return (

            <Grid direction="column" container>

                <Grid container direction="row">

                    <Grid item md={2}>

                        <Sidebar />

                    </Grid>


                    <Grid style={{backgroundColor: '#333'}} item md={10}>
           
                            <Grid item md={12}>
                                <TopBar />
                            </Grid>

                    </Grid>

                    

                </Grid>

            </Grid>

    );
}

export default Search;
