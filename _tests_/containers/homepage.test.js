import React from 'react';
import ReactDOM from 'react-dom';
// import HomePage from '../../../client/components/bucketlists/HomePage.jsx';
import HomePage from '../../client/components/bucketlists/HomePage.jsx'
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { render } from 'enzyme';


describe('HomePage', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render((
            <MuiThemeProvider muiTheme = { getMuiTheme() }>
                <Router>
                    <Route exact path='/' component={HomePage}/>
                </Router>
            </MuiThemeProvider>),
            div);
    });

    describe('Homepage item name', () => {
        it('should display the homepage', () => {
            const wrapper = render(
                <MuiThemeProvider muiTheme = { getMuiTheme() }>
                    <Router>
                        <Route exact path='/' component={HomePage}/>
                    </Router>
                </MuiThemeProvider>
            );
            expect(wrapper).toHaveLength(1);
            expect(wrapper.text()).toContain('This is the HomePage');
        });
    });
});