import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import Edit from './components/Edit';
import Logout from './components/Logout';
import LeaveForm from './components/LeaveForm';
import ShowLeaves from './components/ShowLeaves';

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
          <Route path='/logout' exact component={Logout} />
          <Route path='/leaveform' exact component={LeaveForm} />
          <Route path='/forms' exact component={ShowLeaves} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
