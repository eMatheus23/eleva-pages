import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Plans from './pages/Plans';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/plans' component={Plans} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
