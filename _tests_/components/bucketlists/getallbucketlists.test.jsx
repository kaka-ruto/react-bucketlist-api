import React from 'react';
import ReactDOM from 'react-dom';
import GetAllBucketlists from '../../../client/components/bucketlists/GetAllBucketlists.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

describe('GetAllBucketlists', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

                ReactDOM.render((
                    <MuiThemeProvider muiTheme = { getMuiTheme() }>
                        <Router>
                            <Route exact path='/dashboard' component={GetAllBucketlists}/>
                        </Router>
                    </MuiThemeProvider>),
                    div);
    });

    describe('Text', () => {
        it('should display the header', () => {
            const wrapper = render(
                <MuiThemeProvider muiTheme = { getMuiTheme() }>
                    <GetAllBucketlists/>
                </MuiThemeProvider>
            );
            expect(wrapper).toHaveLength(1);
            expect(wrapper.text()).toContain('Bucketlists');
        });
    });
});
