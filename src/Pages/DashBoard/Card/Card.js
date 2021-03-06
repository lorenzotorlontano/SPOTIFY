import React, { useState, useEffect } from "react";
import { getPlaylist, getAlbums } from "../../../Api/Api";
import { useLocation } from 'react-router-dom';
import DashBoard from '../../../Pages/DashBoard/DashBoard'
import '../Card/Card.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Card() {
  const [albums, setAlbums] = useState();
  const [overlay, setOverlay] = useState('none')
  const [onDetailScreen, setOnDetailScreen] = useState(false);


  useEffect(() => {
    const res = getAlbums().then((re) => {
      setAlbums(re.data.albums)
    })
  }, []);

  useEffect(() => {
    setOnDetailScreen(true)
  }, []);



  const showOverlay = () => {
    setOverlay('')
  }


  return (
    <Grid className="container" container >
      {albums ? albums.map((val, index) => {
        return (
          <Grid className="contCard" item xs={4}>

            <div onMouseLeave={() => setOverlay('none')} onMouseOver={() => showOverlay()} className="contImgCard" >
              <Link to={`/Tracks/${val.id}`}>
                <img className="imgCard" src={val.images[1].url} />
              </Link>
              <div style={{
                display: overlay, transition: '3s',
              }}>
                <p>{val.label}</p>
                <p>{val.name}</p>
                <p>total tracks:  {val.total_tracks}</p>
                <p>ID: {val.id}</p>
                <p>{val.copyrights[0].text}</p>
                <p>Type : {val.type}</p>
                <p>Date: {val.release_date}</p>
              </div>
            </div>

          </Grid>
        )
      }
      ) : null}
    </Grid>
  );
}

export default Card;
