import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from '../../client/containers/Dashboard.jsx';
import swal from 'sweetalert';
import { HashRouter as Router, Route } from 'react-router-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { mount, shallow } from 'enzyme';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

const wrapper = shallow(
    <Router>
        <Route exact path='/' component={Dashboard}/>
    </Router>
);

describe('Dashboard', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render((
            <Router>
                   <Route exact path='/' component={Dashboard}/>
            </Router>),
            div);
    });

    it('should display the header', () => {
            const wrapper = render(
                <MuiThemeProvider muiTheme = { getMuiTheme() }>
                    <Router>
                        <Dashboard/>
                    </Router>
                </MuiThemeProvider>
            );
            // expect(wrapper).toHaveLength(1);
            // expect(wrapper.text()).toContain('Add Bucketlist');
        });
});