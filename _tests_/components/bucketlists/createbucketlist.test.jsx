import React from 'react';
import ReactDOM from 'react-dom';
import CreateBucketlist from '../../../client/components/bucketlists/CreateBucketlist.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { shallow, mount } from 'enzyme';
import { render } from 'enzyme';

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

    it('should show create bucketlist', () => {
        expect(wrapper).toHaveLength(1);
        expect(wrapper.text()).toContain('<Card />');

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