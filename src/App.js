import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import Header from './components/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import './App.scss';

class App extends React.Component {
  constructor (props) {
    super();
    this.state = {
      currentUser: null
    }
  }
  
  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render(){
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
