import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../../client/containers/LoginPage.jsx';
import swal from 'sweetalert';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

describe('LoginPage', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render((
            <MuiThemeProvider muiTheme = { getMuiTheme() }>
                <Router>
                    <Route exact path='/' component={LoginPage}/>
                </Router>
            </MuiThemeProvider>),
            div);
    });
});