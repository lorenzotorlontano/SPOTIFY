import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { getPlaylist } from "../../Api/Api";
import DeleteIcon from '@material-ui/icons/Delete';
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes,
} from "../../../src/Config/Config";
import "../../Pages/Home/Home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
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

function Header() {

  const [user, setUser] = useState();
  let currentPath = window.location.pathname


  useEffect(() => {
    const resp = getPlaylist().then((re) => {
      setUser(re.data.items[0])
    })
  }, [currentPath]);

  const classes = useStyles();
  
  const splittedString = currentPath.split("/")


  return (
    <>
    {
       splittedString[1] !== "Tracks" && (
    <div className="wrapperHeader">
      <AppBar
        style={{ color: "white", backgroundColor: "black", position: "fixed" }}
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            <a href="/">
              <img
                src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1-1024x309.png"
                className="logoHeader"
                style={{ cursor: "pointer" }}
              />
            </a>
          </Typography>
          <Button color="inherit">
            <div className="contAvatarSurname">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href={currentPath === '/dashboard' ? "/" : `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`}
              >
                {currentPath === '/dashboard' ? <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<AccountCircleIcon />}
                >
                    {user !== undefined & currentPath === '/dashboard' ? <span className="userName">{user.owner.display_name}</span> : null}
                </Button> : <span>Login</span>}
              </a>
            </div>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
    </>
  );
}

export default Header;
