import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up/Sign-in-and-Sign-up';
import { auth } from '../src/firebase/firebase.utils';
class App extends React.Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
  }
}

export default App;
