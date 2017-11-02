import React from 'react';
import ReactDOM from 'react-dom';
import EditBucketlist from '../../../client/components/bucketlists/EditBucketlist.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

const wrapper = shallow(<EditBucketlist bucketlist={{ id: 1}}/>);
describe('Edit Bucketlist', () => {
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

    it('is visible', () => {
        const wrapper = render(
            <MuiThemeProvider muiTheme = { getMuiTheme() }>
                <Router>
                    <EditBucketlist bucketlist={{ id: 1}}/>
                </Router>
            </MuiThemeProvider>
        );
        expect(wrapper).toHaveLength(1);
        expect(wrapper.text()).toContain('Back');
    });
});
