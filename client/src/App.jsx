import React, { Component } from 'react';
//import './App.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import './index.css';
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux';

class App extends Component {

  doLogout() {
    localStorage.setItem('uuID', '');
    window.location = '/';
  }

  render() {
    return (
      <Router>
          <Route path="/" render={() => <Dashboard/>} exact />
      </Router>
    );
  }
}

export default App;
