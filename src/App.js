import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth,createUserProfileDocument } from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.action';
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import Header from './components/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import './App.scss';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            } 
          });
        })
      };
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render(){
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
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser : user => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
