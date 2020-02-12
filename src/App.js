import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth,createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import Header from './components/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import './App.scss';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  
  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      };
      this.setState({currentUser: userAuth});
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
