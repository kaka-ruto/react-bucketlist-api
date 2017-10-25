import React from 'react';
import ReactDOM from 'react-dom';
import CreateItem from '../../../client/components/items/CreateItem.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

const wrapper = shallow(<CreateItem/>);
describe('Create item', () => {
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
        const component = render(
            <MuiThemeProvider muiTheme = { getMuiTheme() }>
                <CreateItem/>
            </MuiThemeProvider>
        );
        it('should show up', () => {
            expect(component).toHaveLength(1);
            expect(component.text()).toContain('Create item');
            
        });

        it('it has state defined', () => {
            expect(wrapper.state).toBeDefined
        });

        it('it has props defined', () => {
            expect(wrapper.props).toBeDefined
            
        });

        it('it changes state ', () => {
            expect(wrapper.state).toBe === " item: { title: '' } }";
            wrapper.setState({
                "item": { title: 'Mongolia trip' }
            });
            expect(wrapper.state).toBe === " bucketlist: { title: 'Mongolia trip' } }"
        });
    });
});