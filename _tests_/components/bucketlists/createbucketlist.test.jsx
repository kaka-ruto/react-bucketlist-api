import React from 'react';
import ReactDOM from 'react-dom';
import CreateBucketlist from '../../../client/components/bucketlists/CreateBucketlist.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

const wrapper = shallow(<CreateBucketlist/>);
describe('Create bucketlist', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

                ReactDOM.render((
                    <MuiThemeProvider muiTheme = { getMuiTheme() }>
                        <Router>
                            <Route component={CreateBucketlist}/>
                        </Router>
                    </MuiThemeProvider>),
                    div);
    });

    describe('Text', () => {
        it('should show up', () => {
            expect(wrapper).toHaveLength(1);
            expect(wrapper.text()).toContain('Create bucketlist');
            
        });

        it('it has state defined', () => {
            expect(wrapper.state).toBeDefined
        });

        it('it has props defined', () => {
            expect(wrapper.props).toBeDefined
            
        });

        it('it changes state ', () => {
            expect(wrapper.state).toBe === " bucketlist: { title: '' } }";
            wrapper.setState({
                "bucketlist": { title: 'Travelling' }
            });
            expect(wrapper.state).toBe === " bucketlist: { title: 'Travelling' } }"
        });
    });
});