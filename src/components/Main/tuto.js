import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './styles.scss';
import Item1 from './item1';
import Item2 from './item2';
import Item3 from './item3';
import Item4 from './item4';
import Item5 from './item5';
import Item6 from './item6';
import Item7 from './item7';
import Item8 from './item8';
import Item9 from './item9';
import Item10 from './item10';
import Item11 from './item11';
import Item12 from './item12';
import Item13 from './item13';
import Item14 from './item14';

//Import Prism
import Prism from "prismjs";

const Tuto = () => {
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    Prism.highlightAll();
  });
  return (
  <div className="main">
    <Switch>
      <Route exact path="/principal">
        <Item1 />
      </Route>
      <Route exact path="/props">
        <Item2 />
      </Route>
      <Route exact path="/bind">
        <Item3 />
      </Route>
      <Route exact path="/states">
        <Item4 />
      </Route>
      <Route exact path="/memo">
        <Item5 />
      </Route>
      <Route exact path="/router">
        <Item6 />
      </Route>
      <Route exact path="/vue-conditionnelle">
        <Item7 />
      </Route>
      <Route exact path="/ternaire">
        <Item8 />
      </Route>
      <Route exact path="/link">
        <Item9 />
      </Route>
      <Route exact path="/useLocation">
        <Item10 />
      </Route>
      <Route exact path="/map">
        <Item11 />
      </Route>
      <Route exact path="/event">
        <Item12 />
      </Route>
      <Route exact path="/find">
        <Item13 />
      </Route>
      <Route exact path="/scss">
        <Item14 />
      </Route>
    </Switch>
  </div>

);
};

export default Tuto;
