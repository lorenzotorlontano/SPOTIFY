import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Header from '../../Components/Header/Header'
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes,
} from "../../../src/Config/Config";
import "../Home/Home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function Home() {
  const classes = useStyles();


  return (
    <div className="wrapperHome">
      <Header/>
      <div className="contBodyHome">
        <h1 className="titleHome">Listening is<br/> everything</h1>
        <h4 className="subtitleHome">
          Milioni di brani e podcast. Senza alcuna carta di credito.
        </h4>
        <a
           href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`}
          id="generic-btn-premium"
          role="button"
          className="button"
        >
          LOGIN
        </a>
      </div>
    </div>
  );
}

export default Home;
