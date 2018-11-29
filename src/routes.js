import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Display from './Components/DisplayTask';
import OneTask from './Components/OneTask';

export default <Switch>
    <Route exact path='/' component={Display}/>
    <Route exact path='/task/:id' component={OneTask}/>
</Switch>