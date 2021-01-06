import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Plans from '../pages/Plans';
import Signup from '../pages/Signup';
import CheckoutPage from '../pages/CheckoutPage';
import CheckoutBill from '../pages/CheckoutBill';
import CheckoutAccessPage from '../pages/CheckoutAccessPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Plans} />
        <Route exact path="/plans" component={Plans} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/checkout/bill" component={CheckoutBill} />
        <Route exact path="/checkout/access" component={CheckoutAccessPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
