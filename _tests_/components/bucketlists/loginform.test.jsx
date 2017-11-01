import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../../../client/components/bucketlists/LoginForm.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';

const wrapper = shallow(<LoginForm errors onSubmit user/>);

describe('Login Form', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

                ReactDOM.render((
                    <MuiThemeProvider muiTheme = { getMuiTheme() }>
                        <Router>
                            <Route exact path='/login'/>
                        </Router>
                    </MuiThemeProvider>),
                    div);
    });


    describe('Text', () => {
        it('should display the header', () => {
            expect(wrapper).toHaveLength(1);
            // expect(wrapper.text()).toContain('Login');
            expect(wrapper.props).toBeDefined
            expect(wrapper.children()).toHaveLength(1)
        });
    });

});
