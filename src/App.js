import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';

const HatsPages = () => {
  console.log('hellllllllllllllllllllllllll');
  return (
    <div>
      <h1>Hats Pagesss</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPages} />
      {/* <HomePage /> */}

      {/* <Switch>
        <Route path="/" component={HomePage} />
        <Route path="shop/hats" component={HatsPages} />
      </Switch> */}
    </div>
  );
};

export default App;
