import React from 'react';
import ReactDOM from 'react-dom';
import DeleteItem from '../../../client/components/items/DeleteItem.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import swal from 'sweetalert';
import { shallow } from 'enzyme';

import { render } from 'enzyme';

const wrapper = shallow(<DeleteItem bucketlistID={ 1 }/>);
describe('Delete Bucketlist', () => {
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
        expect(wrapper).toHaveLength(1);
    });
});
