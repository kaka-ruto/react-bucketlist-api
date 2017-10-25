import React from 'react';
import ReactDOM from 'react-dom';
import UpdateItem from '../../../client/components/items/UpdateItem.jsx';
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

const wrapper = shallow(<UpdateItem bucketlistID={{ id: 1}}/>);
describe('Edit Item', () => {
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

    it('should show up', () => {
        const wrapper = render(
            <MuiThemeProvider muiTheme = { getMuiTheme() }>
                <Router>
                    <UpdateItem bucketlistID={{ id: 1}}/>
                </Router>
            </MuiThemeProvider>
        );
        expect(wrapper).toHaveLength(1);
        expect(wrapper.text()).toContain('View Item');
    });
});
