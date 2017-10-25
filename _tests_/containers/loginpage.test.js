import React from 'react';
import ReactDOM from 'react-dom';

import swal from 'sweetalert';
import { MemoryRouter, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LoginPage from '../../client/containers/LoginPage.jsx';
import LoginForm from '../../client/components/bucketlists/LoginForm.jsx';

configure({ adapter: new Adapter() });

const component = shallow(<LoginPage/>);
// const mountedComponent = mount(
//     <MuiThemeProvider>
//         <MemoryRouter>
//             <LoginPage/>
//         </MemoryRouter>
//     </MuiThemeProvider>
// );
// const errors = {summary: 'muchene'}

// const loginpage = mount(<LoginPage/>);

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

describe('LoginPage', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render((
            <MuiThemeProvider muiTheme = { getMuiTheme() }>
                <MemoryRouter>
                    <Route exact path='/' component={LoginPage}/>
                </MemoryRouter>
            </MuiThemeProvider>),
            div);
    });

    it('renders 1 <LoginPage/> component', () => {
        expect(component).toHaveLength(1);
    });

    it('verifies state', () => {
        expect(component.instance().state).toBeDefined;
    });

    it('renders empty states values', () => {
        expect(component.instance().state.errors).toBeTruthy;
        expect(component.instance().state.user).toBeTruthy;
    });

    it('submits data', () => {
        const preventDefault = jest.fn();
        component.setState({
            user: {'email': 'kaka@gmail.com', 'password': 'kaka'}
        })
        expect(component.state().user)
        component.find(LoginForm).simulate('onSubmit', {preventDefault});
        expect(toJson(component)).toMatchSnapshot;
        expect(preventDefault).toBeCalled;
    })

    it('should be an instance of the component', () => {
        expect(component.instance()).toBeInstanceOf(LoginPage);
    });

    // it('renders class login as the parent', () => {
    //     expect(component.hasClass("login")).toEqual(true);
    // });
    
    it('has two children', () => {
        expect(component.children()).toHaveLength(2);
        // console.log(component.children().get(0).props.children);
        // expect(component.children().get(1).props).hasClass('loginform');
    });

    it('has props', () => {
        // console.log(component.props())
    })

});

describe('LoginForm', () => {
    it('renders 1 LoginForm component', () => {
        expect(component.find(LoginForm)).toHaveLength(1);
        expect(component.find(LoginForm).props());

    });

    // it('simulates click events', () => {
    //     const wrapper = shallow(<LoginForm onSubmit={onSubmit} />);
    //     wrapper.find(RaisedButton).simulate('click');
    // })

    // it('has 2 input fields', () => {
    //     expect(component.find(LoginForm)).find('input').toHaveLength(2);
    // })
    
});