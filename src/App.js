import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Change from './pages/Change';
import Users from './pages/Users';
import Form from './pages/Form';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/users' exact component={Users} />
          <Route path='/change' exact component={Change} />
          <Route path='/form' exact component={Form} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
