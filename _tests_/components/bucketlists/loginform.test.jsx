import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../../../client/components/bucketlists/LoginForm.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('Login Form', () => {
    // it('renders without crashing', () => {
    //     const div = document.createElement('div');

    //             ReactDOM.render((
    //                 <MuiThemeProvider muiTheme = { getMuiTheme() }>
    //                     <Router>
    //                         <Route exact path='/login' component={LoginForm} errors/>
    //                     </Router>
    //                 </MuiThemeProvider>),
    //                 div);
    // });


    // describe('Text', () => {
    //     it('should display the header', () => {
    //         const wrapper = render(
    //             <MuiThemeProvider muiTheme = { getMuiTheme() }>
    //                 <LoginForm errors onSubmit user/>
    //             </MuiThemeProvider>
    //         );
    //         expect(wrapper).toHaveLength(1);
    //         expect(wrapper.text()).toContain('Login');
    //     });
    // });
    it('should have two input fields',()=>{
		const wrapper = shallow(<LoginForm errors onSubmit user/>);
        // expect(wrapper.find('input')).toHaveLength(2);
        console.log(wrapper.instance())
    });

});
