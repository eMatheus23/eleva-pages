import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeTracks from '../pages/HomeTracks';
import HomeCourses from '../pages/HomeCourses';
import Plans from '../pages/Plans';
import Signup from '../pages/Signup';
import CheckoutPage from '../pages/CheckoutPage';
import CheckoutBill from '../pages/CheckoutBill';
import CheckoutAccessPage from '../pages/CheckoutAccessPage';
import TrackPage from '../pages/TrackPage';
import CoursePage from '../pages/CoursePage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeCourses} />
        <Route exact path="/tracks" component={HomeTracks} />
        <Route exact path="/track" component={TrackPage} />
        <Route exact path="/course" component={CoursePage} />
        <Route path="/plans" component={Plans} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/checkout/bill" component={CheckoutBill} />
        <Route path="/checkout/access" component={CheckoutAccessPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
