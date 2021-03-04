import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Login from './Login';
import Main from './Main';

export default props =>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} /> 
        <Redirect from='*' to='/' />
    </Switch>