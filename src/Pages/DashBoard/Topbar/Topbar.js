import React, { useState, useEffect } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Button from '@material-ui/core/Button';
import { getPlaylist } from "../../../Api/Api";
import {
  authEndpoint,
  clientId,
  redirectUri,
  scopes,
} from "../../../Config/Config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({


  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const useAppBarStyle = makeStyles({
  root: {
    background: 'transparent !important',
    boxShadow: 'none',
  },
});

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const appBarClasses = useAppBarStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [user, setUser] = useState();

  useEffect(() => {
    const resp = getPlaylist().then((re) => {
      setUser(re.data.items[0])
    })
  }, []);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );



  const style = {
    backgroundColor: 'grey',
    // backgroundImage: 'linear-gradient(to right, blue, red)'
  }

  const icon = {
    border: 'none',
    height: '26px',
    padding: '5px',
    width: '26px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,.7)',
    color: '#fff',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    display: 'inlineFlex',
    justifyContent: 'center',
    webkitBoxAlign: 'center',
  }

  const button = {
    backgroundColor: 'rgba(0,0,0,.7)',
    border: '1px solid hsla(0,0%,100%,.7)',
    borderRadius: '500px',
    fontSize: '2px',
    fontWeight: '200',
    color: 'white',
    letterSpacing: '1.76px',
    textTransform: 'uppercase',
    padding: '8px 34px',
    display: 'inline-block',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 33ms cubic-bezier(.3,0,0,1)',
    willChange: 'transform',
    fontFamily: 'spotify-circular,spotify-circular-cyrillic,spotify-circular-arabic,spotify-circular-hebrew,Helvetica Neue,Helvetica,Arial,Hiragino Kaku Gothic Pro,Meiryo,MS Gothic,sans-serif',
    font: '400 13.3333px Arial',
    margin: '0em',
    alignItems: 'flex-start',
    textIndent: '0px',
    textShadow: 'none',
    wordSpacing: 'normal',
    appearance: 'button',
    webkitWritingMode: 'horizontal-tb !important',
    textRendering: 'auto',
  }

  const userbutton = {
    backgroundColor: 'rgba(0,0,0,.7)',
    borderRadius: '500px',
    textTransform: 'lowercase',
    fontSize: '2px',
    fontWeight: '200',
    color: 'white',
    letterSpacing: '1.76px',
    cursor: 'pointer',
    textAlign: 'center',
    willChange: 'transform',
    font: '400 13.3333px Arial',
  }


  return (
    <div className={classes.grow}>
      <AppBar classes={{ root: appBarClasses.root }} style={style} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"

          >
            <Link to="/dashboard">
              <ArrowBackIosRoundedIcon style={icon} />
            </Link>
          </IconButton>

          <IconButton
            edge="start"
            className={classes.menuButton}

            aria-label="open drawer"
          >
            <Link>
              <ArrowForwardIosRoundedIcon style={icon} />
            </Link>
          </IconButton>


          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" >
              <Button style={button} disableElevation>
                Update
              </Button>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <div>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`}
                >
                  <Button
                    variant="contained"
                    color="default"
                    style={userbutton}
                    startIcon={<div style={{
                      backgroundColor: '#333', display: 'flex', justifyContent: 'center', borderRadius: '50%', width: ' 100%',
                      height: ' 100%', padding: '0px', margin: '0px'
                    }}><AccountCircleIcon /></div>}
                  >
                    {console.log('stop porco del cazzpo', user)}
                    <span style={{}} >{user ? user.owner.display_name : null}</span >
                  </Button>
                </a>
              </div>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}