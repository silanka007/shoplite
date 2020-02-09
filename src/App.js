import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/home-page';

const HatPage = (props) => (
  <div>
    {console.log(props)}
    hello welcome to hat page
    <a href="/" >home</a>
  </div>
)

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatPage} />
    </div>
  );
}

export default App;
