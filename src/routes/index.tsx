import React from 'react';
import {Switch} from 'react-router-dom'

import Route from './route'

import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import AdminDashboard from '../adminPages/Dashboard'
import { useAuth } from '../context/AuthContext';


const Routes: React.FC = () => {
   
  return (
    <Switch>
        <Route path="/" exact component={Signin}/>
        <Route path='/signup' component={Signup}/>

        <Route path='/dashboard' component={Dashboard} isPrivate/>
        <Route path='/admin/dashboard' component={AdminDashboard} isPrivate/>
    </Switch>
  );
}

export default Routes;