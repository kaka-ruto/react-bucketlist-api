import React from 'react';
import ReactDOM from 'react-dom';
import GetOneBucketlist from '../../../client/components/bucketlists/GetOneBucketlist.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

const wrapper = shallow(<GetOneBucketlist bucketlist={{ id: 1}}/>);
describe('Get Bucketlist', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

                ReactDOM.render((
                    <MuiThemeProvider muiTheme = { getMuiTheme() }>
                        <Router>
                            <wrapper/>
                        </Router>
                    </MuiThemeProvider>),
                    div);
    });

    it('should show view bucketlist', () => {
        const wrapper = render(
            <MuiThemeProvider muiTheme = { getMuiTheme() }>
                <Router>
                    <GetOneBucketlist bucketlist={{ id: 1}}/>
                </Router>
            </MuiThemeProvider>
        );
        expect(wrapper).toHaveLength(1);
        expect(wrapper.text()).toContain('Back');
    });
});
