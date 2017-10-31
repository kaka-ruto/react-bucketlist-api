import React from 'react';
import ReactDOM from 'react-dom';
import Base from '../../../client/components/bucketlists/Base.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });


describe('Navbar', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

                ReactDOM.render((
                    <MuiThemeProvider muiTheme = { getMuiTheme() }>
                        <Router>
                            <Route component={Base}/>
                        </Router>
                    </MuiThemeProvider>),
                    div);
    });

    describe('Text', () => {
        it('should show up', () => {
            const wrapper = render(
                <MuiThemeProvider muiTheme = { getMuiTheme() }>
                    <Router>
                        <Base/>
                    </Router>
                </MuiThemeProvider>
            );
            expect(wrapper).toHaveLength(1);
            expect(wrapper.text()).toContain('Home');
        });

        it('shows login and signup if user is not logged in', () => {
            const wrapper = render(
                <MuiThemeProvider muiTheme = { getMuiTheme() }>
                    <Router>
                        <Base/>
                    </Router>
                </MuiThemeProvider>
            );

            expect(wrapper.text()).toContain('LoginSign up');
        })
    });
});
