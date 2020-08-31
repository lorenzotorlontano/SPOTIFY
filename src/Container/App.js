import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Hash from "../Pages/Hash/Hash";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header/Header";
import Tracks from '../Pages/DashBoard/Tracks/Tracks'
export default function App() {
  return (    
    <div>
  {/* <Header/> */}
    <Router>
      <Switch>
        <Route path="/hash">
          <Hash />
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
    </Router>
    </div>
  );
}
