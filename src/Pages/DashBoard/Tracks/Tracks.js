import React, { useState, useEffect } from "react";
import { getPlaylist, getAlbums, getAlbum } from "../../../Api/Api";
import '../Tracks/Tracks.css'
import { useParams } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Tracks() {
    const [albums, setAlbums] = useState();
    const [album, setAlbum] = useState();



    const { id } = useParams();

    useEffect(() => {
        const re = getAlbum(id).then((re) => {
            setAlbum(re.data)
        })
    }, [id]);


    console.log('sto facendo il console nfds', album)

    return (
        <div>
            <Grid  container>
                <Grid style={{backgroundColor: '#333', display: 'flex'}} item md={2}>
                    <p>qui andrà il menu</p>
                </Grid>

                <Grid item md={9}>
                    <Grid style={{ backgroundColor: '#333', width: '100%'}} item md={12}>headerrrrr</Grid>
                    {album ?
                        <>
                            <img src={album.images[1].url} />
                            <h1>{album.name}</h1>
                            {album ?
                                album.tracks.items.map((val, index) => {
                                    return (
                                        <>
                                            <p>{val.name}</p>
                                            <p>{val.track_number}</p>
                                            
                                        </>
                                    )
                                }
                                )
                                : null
                            }
                        </>
                        : null}
                </Grid>
                <Grid style={{ position: 'fixed', border: '10px solid red', bottom: '0', display: 'flex', left: '0', right: '0px', textAlign: 'center', backgroundColor: '#333' }} item md={12}>
                    Foooter
                </Grid>

            </Grid>
        </div>
    );
}

export default Tracks;
