import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Plans from './pages/Plans';
import CreatePremiumVisit from './pages/CreatePremiumVisit';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/plans' component={Plans} />
        <Route path='/create-premium/visit' component={CreatePremiumVisit} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
