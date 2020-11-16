import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SejaPremium from './pages/SejaPremium';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/cadastro/seja-premium' component={SejaPremium} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
