// == Import npm
import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from 'src/components/Header';
import Main from 'src/components/Main';

// == Import
import './styles.css';
import 'src/styles/prism.css';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import PrismScss from 'prismjs/components/prism-scss.min';

// == Composant
const App = () => {
  const location = useLocation();
  useEffect(() => {
    Prism.highlightAll();
  }, [location]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

// == Export
export default App;
