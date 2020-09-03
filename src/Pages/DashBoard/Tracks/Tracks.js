import React, { useState, useEffect, useRef, createRef } from "react";
import { getPlaylist, getAlbums, getAlbum } from "../../../Api/Api";
import '../Tracks/Tracks.css'
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
import TopBar from '../Topbar/Topbar'
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Sidebar from '../../../Components/SideBar/SideBar';
import RenderTracksScreen from '../Tracks/RenderTracksScreen/RenderTracksScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";

function Tracks() {

    const [albums, setAlbums] = useState();
    const [album, setAlbum] = useState();
    const [overed, setOvered] = useState();

    const { id } = useParams();


    useEffect(() => {
        const re = getAlbum(id).then((re) => {
            setAlbum(re.data)
        })
    }, [id]);

    const style = {
        backgroundColor: 'black',
        color: '#B3B3B3',
        textTransform: 'capitalize',
    }

    const trackNumber = album ? album.tracks.items.map((val, index) => {
        return <p>{val.track_number}</p>
    }
    ) : null;

    const onMouseOver = (id) => {
        setOvered(id)
    }

    console.log(overed)

    const onMouseOut = () => {
        setOvered(null)
    }


    return (

        <Grid className="wrapperTracks" direction="column" container>

            <Grid container direction="row">

                <Grid item md={2}>
                    <Sidebar

                    />
                </Grid>

                <Grid item md={10}>
                    {album ?
                        <>

                            <Grid className="header" item md={12}>
                                <TopBar />
                            </Grid>

                            <RenderTracksScreen/>

                        </>
                        : null}
                </Grid>

                <Grid style={{ position: 'fixed', bottom: '0', display: 'flex', left: '0', right: '0px', textAlign: 'center', backgroundColor: '#333' }} item md={12}>
                    Foooter
            </Grid>
            </Grid>
        </Grid> 
    );
}

export default Tracks;