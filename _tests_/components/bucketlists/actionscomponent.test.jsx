import React from 'react';
import ReactDOM from 'react-dom';
import ActionsComponent from '../../../client/components/bucketlists/ActionsComponent.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

describe('Actions Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

                ReactDOM.render((
                    <MuiThemeProvider muiTheme = { getMuiTheme() }>
                        <Router>
                            <Route exact path='/dashboard' component={ActionsComponent}/>
                        </Router>
                    </MuiThemeProvider>),
                    div);
    });

    it('should display the header', () => {
        const wrapper = render(
            <MuiThemeProvider muiTheme = { getMuiTheme() }>
                <ActionsComponent/>
            </MuiThemeProvider>
        );
        expect(wrapper).toHaveLength(1);
        expect(wrapper.text()).toContain('Add Bucketlist');
    });
});
