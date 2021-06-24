import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';
function App() {
  return (
    <Router classname='container'>
      <div className='nav'>
        <Link to='/' className='link'>
          Home
        </Link>
        <Link to='/register' className='link'>
          Form
        </Link>
      </div>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register'>
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
