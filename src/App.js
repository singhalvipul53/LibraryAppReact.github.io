import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import { selectUser } from './features/userSlice';
import Login from './Login';
import Library from './Library';
import Header from './Header';
import Checkout from './Checkout';

function App() {
  const user=useSelector(selectUser)
  return (
    <Router>
      {
        !user ?
      <Login/>
      : 
      (
    <div className="app">
        <Header/>
        <div className='app_body'>
        <Switch>
        <Route  path='/checkout'>
        <Checkout/>
      </Route>
        <Route path=''>
          <Library/>
        </Route>
        </Switch>
        </div>
    </div>
      )}
    </Router>
  );
}

export default App;
