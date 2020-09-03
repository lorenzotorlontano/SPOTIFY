import React, { useState, useEffect, useRef, createRef } from "react";
import { getPlaylist, getAlbums, getAlbum } from "../../../../Api/Api";
import '../../Tracks/Tracks.css';
import { useParams } from "react-router-dom";
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
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";

function RenderTracksScreen() {

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


    const onMouseOut = () => {
        setOvered(null)
    }

    return (
        <>
     { album &&
            <div className="contTitle">

                <div>
                    <img className="img" src={ album.images[1].url} />
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
            }
            <div style={{ backgroundColor: '#333', paddingLeft: '30px', paddingRight: '30px', paddingTop: '30px', color: 'white' }}>
                <Grid
                    container
                    direction="row-reverse"
                    justify="flex-end"
                    alignItems="center"
                    style={{}}
                >
                    <div style={{ marginRight: '20px', marginBottom: '10px' }}><MoreHorizIcon style={{ fontSize: '30px' }} /> </div >
                    <div style={{ marginRight: '20px', marginBottom: '10px' }}> <FavoriteBorderOutlinedIcon style={{ fontSize: '50px' }} /></div >

                    <div style={{ marginRight: '20px', marginBottom: '10px' }}>
                        <PlayCircleFilledSharpIcon style={{ fontSize: '80px', color: '#1db954' }} />
                    </div>

                </Grid>
                <div style={{ display: 'flex', flex: 0.9, justifyContent: 'space-between' }}>
                    <div> # TITOLO </div>
                    <div> <WatchLaterIcon /></div>
                </div>
                <hr /> 
              
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                    {album ?
                        album.tracks.items.map((val, index) => {
                            return (

                                <div className="hover" onMouseOver={() => onMouseOver(val.id)} onMouseOut={() => onMouseOut()} id={val.id} style={{ display: 'flex', color: 'white', cursor: 'pointer', paddingLeft: '16px', paddingRight: '16px', alignItems: 'center', marginTop: '10px', marginBottom: '10px', }}>

                                    <div style={{ alignItems: 'center', justifyContent: 'center', width: '32px', fontWeight: 'bold', color: 'grey' }}>
                                        {(overed === val.id) ? <PlayArrowIcon /> : val.track_number}
                                    </div>

                                    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                                            <div style={{ flex: 1 }}>
                                                {val.name}
                                                <div style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}  >
                                                    {val.artists[0].name}
                                                </div>
                                            </div>

                                            <div style={{ alignItems: 'center' }}>
                                                2.03
                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        )
                        : null
                    }
                </div>
            </div>
          
        </>
    )
}

export default RenderTracksScreen;