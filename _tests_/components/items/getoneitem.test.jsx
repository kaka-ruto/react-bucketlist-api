import React from 'react';
import ReactDOM from 'react-dom';
import GetOneItem from '../../../client/components/items/GetOneItem.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

const wrapper = shallow(<GetOneItem bucketlistID={{ id: 1}}/>);
describe('Get Item', () => {
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

    describe('Text', () => {
        it('should show "view item"', () => {
            const wrapper = render(
                <MuiThemeProvider muiTheme = { getMuiTheme() }>
                    <Router>
                        <GetOneItem bucketlistID={{ id: 1}}/>
                    </Router>
                </MuiThemeProvider>
            );
            expect(wrapper).toHaveLength(1);
            expect(wrapper.text()).toContain('View Item');
        });
    });
});
