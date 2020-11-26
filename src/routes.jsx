import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Plans from './pages/Plans';
import SignupVisitor from './pages/SignupVisitor';
import SignupAddress from './pages/SignupAddress';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutAccessPage from './pages/CheckoutAccessPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Plans} />
        <Route path='/plans' component={Plans} />
        <Route path='/signup/visitor' component={SignupVisitor} />
        <Route path='/signup/address' component={SignupAddress} />
        <Route path='/signup/checkout' component={CheckoutPage} />
        <Route path='/checkout/access' component={CheckoutAccessPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
