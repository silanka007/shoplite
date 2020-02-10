import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import Header from './components/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
      
    </div>
  );
}

export default App;
