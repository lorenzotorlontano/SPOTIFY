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
    console.log('console.log di overed',id)
}

console.log(overed)

const onMouseOut = () => {
    setOvered(null)
}

    return (

        <Grid className="wrapperTracks" direction="column" container>

            <Grid container direction="row">

                <Grid style={{ backgroundColor: 'black', color: 'white', }} item md={2}>

                    <div style={{ position: 'fixed', flexDirection: 'column', display: 'flex', width: '200px', paddingTop: '20px', }}>
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
                                <Link style={{ textDecoration: 'none', color: 'white' }}>Search</Link>
                            </Button>
                            <Button
                                style={style}

                                variant="contained"
                                startIcon={<LibraryMusicOutlinedIcon />}
                            >
                                <Link style={{ textDecoration: 'none', color: 'white' }}>Library</Link>
                            </Button>
                        </div >
                    </div>

                </Grid>

                <Grid item md={10}>
                    {album ?
                        <>

                            <Grid className="header" item md={12}>
                                <TopBar />
                            </Grid>


                            <div className="contTitle">

                                <div>
                                    <img className="img" src={album.images[1].url} />
                                </div>
                                <div style={{ margin: '50px' }}>
                                    <div>
                                        <p style={{ color: 'white' }}>
                                            {album.type}
                                        </p>
                                    </div>
                                    <h1 style={{ color: 'white' }} >
                                        {album.name}
                                    </h1>
                                </div>
                            </div>
                            <div style={{ backgroundColor: '#333', paddingLeft: '30px', paddingRight: '30px', paddingTop: '30px', color: 'white' }}>
                                <Grid
                                    container
                                    direction="row-reverse"
                                    justify="flex-end"
                                    alignItems="center"
                                >
                                    <div><MoreVertOutlinedIcon style={{ fontSize: '30px' }} /> </div >
                                    <div > <FavoriteBorderOutlinedIcon style={{ fontSize: '50px' }} /></div >
                                    <div > <PlayCircleFilledSharpIcon style={{ fontSize: '80px' }} /></div >
                                </Grid>
                                <div style={{ display: 'flex', flex: 0.9, justifyContent: 'space-between' }}>
                                    <div> # TITOLO </div>
                                    <div> <WatchLaterIcon /></div>
                                </div>
                                <hr />
                                {album ?
                                    album.tracks.items.map((val, index) => {
                                        return (
                                            <div onMouseOver={()=> onMouseOver(val.id)} onMouseOut={()=>onMouseOut()} id={val.id} style={{ display: 'flex', color: 'white', cursor: 'pointer', flexDirection: 'column' }}>

                                                <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>

                                                    <div style={{ alignItems: 'center', height: '20px' ,width: '20px', justifyContent: 'center' }}>
                                                        {(overed === val.id) ? <p ><PlayArrowIcon /> </p> : <p>{val.track_number}</p>}
                                                    </div>

                                                    <div style={{ marginLeft: '10px', display: 'flex', flex: 1, justifyContent: 'space-between', }}>
                                                        <div> <p>{val.name}</p></div>
                                                        <div> <p>2.03 </p>   </div>
                                                    </div>

                                                </div>

                                                <div>
                                                    <p>{val.artists[0].name}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                    : null
                                }
                            </div>
                        </>
                        : null}
                </Grid>
            </Grid>

            <Grid style={{ position: 'fixed', bottom: '0', display: 'flex', left: '0', right: '0px', textAlign: 'center', backgroundColor: '#333' }} item md={12}>
                Foooter
            </Grid>

        </Grid>
    );
}

export default Tracks;
