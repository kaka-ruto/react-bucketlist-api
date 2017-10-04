import React from 'react';
import ReactDom from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/index.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import Dashboard from './containers/Dashboard.jsx';

ReactDom.render((
  <MuiThemeProvider muiTheme = { getMuiTheme() }>
    <Router>
         <div>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/signup' component={SignUpPage}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </div>
    </Router>
  </MuiThemeProvider>),
  document.getElementById('root'));
