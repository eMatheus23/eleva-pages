import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeTracks from '../pages/HomeTracks';
import HomeCourses from '../pages/HomeCourses';
import HomeCoursesPromo from '../pages/HomeCoursesPromo';
import HomeContent from '../pages/HomeContent';
import Plans from '../pages/Plans';
import Signup from '../pages/Signup';
import CheckoutPage from '../pages/CheckoutPage';
import CheckoutBill from '../pages/CheckoutBill';
import CheckoutAccessPage from '../pages/CheckoutAccessPage';
import TrackPage from '../pages/TrackPage';
import CoursePage from '../pages/CoursePage';
import ContentListing from '../pages/ContentListing';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeCourses} />
        <Route path="/tracks" component={HomeTracks} />
        <Route exact path="/courses" component={HomeCourses} />
        <Route path="/courses/promo" component={HomeCoursesPromo} />
        <Route path="/track" component={TrackPage} />
        <Route path="/course" component={CoursePage} />
        <Route path="/plans" component={Plans} />
        <Route path="/signup" component={Signup} />
        <Route path="/content" component={HomeContent} />
        <Route path="/content-listing" component={ContentListing} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/checkout/bill" component={CheckoutBill} />
        <Route path="/checkout/access" component={CheckoutAccessPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
