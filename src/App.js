import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <nav className='navbar navbar-expand navbar-light fixed-top'>
          <div className='container'>
            <Link className='navbar-brand' to={'/'}>
              Home
            </Link>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/register'}>
                    Sign up
                  </Link>
                </li>
              </ul>
              <Switch>
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
