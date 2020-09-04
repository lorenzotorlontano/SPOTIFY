import React, { useState, useEffect, useRef, createRef } from "react";
import { getCategories, getNextCategories } from "../../../Api/Api";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Categories() {
    
  const [categories, setCategories] = useState({});
  const [nextCategories, setNextCategories] = useState([]);

  const urlNextTwenty = categories ? categories.next : null;

  useEffect(() => {
    getCategories().then((re) => {
      setCategories(re.data.categories);
    });
    getNextCategories(urlNextTwenty).then((re) => {
      setNextCategories(re.data.categories.items);
    });
  }, [urlNextTwenty]);

  const totalCategories =
    categories.items && categories.items.concat(nextCategories);

  return (
    <Grid container style={{marginTop: '50px'}}>
      {totalCategories
        ? totalCategories.map((val, index) => {
            return (
              <Grid item md={2}>
                <p>{val.id}</p>
                <Link to={`/DetailsCategorys/${val.id}`}>
                  <img src={val.icons[0].url} />
                </Link>
              </Grid>
            );
          })
        : null}
    </Grid>
  );
}

export default Categories;
