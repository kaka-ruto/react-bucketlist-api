// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import HomePage from './components/HomePage';

// const Appp = () => (
//     <MuiThemeProvider>
//         <HomePage />
//     </MuiThemeProvider>
// );

// ReactDOM.render(
//     <Appp />, 
//     document.getElementById('root')
// );
// registerServiceWorker();

import React from 'react';
import ReactDom from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes.js';
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import LoginPage from './containers/LoginPage.jsx';

ReactDom.render((
  <MuiThemeProvider muiTheme = { getMuiTheme() }>
    <Router >
      <div>
        <Base />
        <Route path='/' component={HomePage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SignUpPage}/>
      </div>
    </Router>
  </MuiThemeProvider>),
  document.getElementById('root')
);