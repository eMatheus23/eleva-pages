import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Plans from './pages/Plans';
import SignupVisitor from './pages/SignupVisitor';
import SignupAddress from './pages/SignupAddress';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutBill from './pages/CheckoutBill';
import CheckoutAccessPage from './pages/CheckoutAccessPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Plans} />
        <Route exact path="/plans" component={Plans} />
        <Route exact path="/signup/visitor" component={SignupVisitor} />
        <Route exact path="/signup/address" component={SignupAddress} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/checkout/bill" component={CheckoutBill} />
        <Route exact path="/checkout/access" component={CheckoutAccessPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
