import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import Edit from './components/Edit';
//import Form from './components/Form';

function App() {
  //localStorage.removeItem('username');
  //localStorage.removeItem('token');
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/users' exact component={Users} />
          <Route path='/edit' exact component={Edit} />{' '}
        </Switch>
      </Router>
    </>
  );
}

export default App;
