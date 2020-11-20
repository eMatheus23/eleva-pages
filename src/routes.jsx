import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Plans from './pages/Plans';
import Signup from './pages/Signup';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/plans' component={Plans} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
