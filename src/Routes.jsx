import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Login from './Login';
import Main from '../src/pages/main/Main';
import Demands from './pages/demands/Demands';
import Messages from './pages/messages/Messages';

export default props =>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} />
        <Route path='/demands' component={Demands} />
        <Route path='/messages' component={Messages} />
        <Redirect from='*' to='/main' />
    </Switch>