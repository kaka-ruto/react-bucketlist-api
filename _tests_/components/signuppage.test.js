import React from 'react';
import ReactDOM from 'react-dom';
import SignUpPage from '../../client/containers/SignUpPage.jsx';
import swal from 'sweetalert';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter()});

const wrapper = shallow(<SignUpPage />);

// global.sessionStorage = {
//     setItem: () => {},
//     getItem: () => {}
// }

// describe('SignUpPage', () => {
//     it('renders without crashing', () => {
//         const div = document.createElement('div');

//         ReactDOM.render((
//             <MuiThemeProvider muiTheme = { getMuiTheme() }>
//                 <Router>
//                     <Route exact path='/' component={SignUpPage}/>
//                 </Router>
//             </MuiThemeProvider>),
//             div);
//     });
// });