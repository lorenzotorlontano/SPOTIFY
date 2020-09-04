import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Hash from "../Pages/Hash/Hash";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header/Header";
import Tracks from "../Pages/DashBoard/Tracks/Tracks";
import Search from "../Pages/Search/Search";
import DetailsCategorys from "../Pages/DetailsCategories/DetailsCategories";
import RouterView from "../Components/RouterView/RouterView";
import Grid from '@material-ui/core/Grid';
import SideBar from '../Components/SideBar/SideBar'
import TopBar from '../Pages/DashBoard/Topbar/Topbar'

export default function App() {
  let currentPathname = window.location.pathname;

  useEffect(() => {
    console.log("accidenti", window.location.pathname);
  }, [currentPathname]);

  const splittedString = currentPathname.split("/");

  console.log(splittedString);

  return (
    <div>


      <Router>
        <Grid direction="column" container>
          <Grid container direction="row">
            <Grid item md={2}>
              <SideBar />
            </Grid>

            <Grid item md={10}>
              <Grid item md={12}>
                <TopBar />
              </Grid>

              <Grid item md={12}>
                <RouterView />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}
