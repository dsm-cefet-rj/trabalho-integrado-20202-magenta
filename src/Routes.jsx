import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import Demands from './Pages/Demands/Demands';
import AvailableDemands from './Pages/Available_Demands/Available_Demands';
import Messages from './Pages/Messages/Messages';

export default props =>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} />
        <Route path='/demands' component={Demands} />
        <Route path='/available-demands' component={AvailableDemands} />
        <Route path='/messages' component={Messages} />
        <Redirect from='*' to='/main' />
    </Switch>