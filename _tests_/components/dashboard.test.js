import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../../client/containers/Dashboard.jsx';
import swal from 'sweetalert';
import { HashRouter as Router, Route } from 'react-router-dom';

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

describe('Dashboard', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render((
            <Router>
                   <Route exact path='/' component={Dashboard}/>
            </Router>),
            div);
    });
});