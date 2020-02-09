import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
