import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/Sign-in-and-Sign-up';
const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signIn" component={SignInAndSignUp} />
      {/* <HomePage /> */}

      {/* <Switch>
        <Route path="/" component={HomePage} />
        <Route path="shop/hats" component={HatsPages} />
      </Switch> */}
    </div>
  );
};

export default App;
