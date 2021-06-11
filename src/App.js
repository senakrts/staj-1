import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthService from './services/auth.service';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-expand navbar-light fixed-top'>
        <div className='container'>
          <a href='' className='navbar-brand'>
            Home
          </a>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a href='' className='nav-link'>
                  Login
                </a>
              </li>
              <li className='nav-item'>
                <a href='' className='nav-link'>
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
