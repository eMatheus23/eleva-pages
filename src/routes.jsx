import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Plans from './pages/Plans';
import SignupVisitor from './pages/SignupVisitor';
import SignupAddress from './pages/SignupAddress';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Plans} />
        <Route path='/plans' component={Plans} />
        <Route path='/signup/visitor' component={SignupVisitor} />
        <Route path='/signup/address' component={SignupAddress} />
        <Route path='/signup/checkout' component={Plans} />
        <Route path='/signup/access' component={Plans} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
