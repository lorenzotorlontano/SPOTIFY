import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Hash from "../../Pages/Hash/Hash";
import Home from "../../Pages/Home/Home";
import Tracks from '../../Pages/DashBoard/Tracks/Tracks'
import Search from '../../Pages/Search/Search'
import DetailsCategorys from '../../Pages/DetailsCategories/DetailsCategories'

function RouterView() {
  return (
    <div>
      <Switch>
        <Route path="/hash">
          <Hash />
        </Route>
        <Route path="/Search">
          <Search />
        </Route>
        <Route path="/DetailsCategorys/:id">
          <DetailsCategorys />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/Tracks/:id">
          <Tracks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default RouterView;
