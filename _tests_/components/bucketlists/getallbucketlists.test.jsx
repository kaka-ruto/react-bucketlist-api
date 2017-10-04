import React from 'react';
import ReactDOM from 'react-dom';
import GetAllBucketlists from '../../../client/components/GetAllBucketlists.jsx';
import swal from 'sweetalert';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';

global.sessionStorage = {
    setItem: () => {},
    getItem: () => {}
}

describe('GetAllBucketlists', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        
                ReactDOM.render((
                    <MuiThemeProvider muiTheme = { getMuiTheme() }>
                        <Router>
                            <Route exact path='/' component={GetAllBucketlists}/>
                        </Router>
                    </MuiThemeProvider>),
                    div);
    })
});