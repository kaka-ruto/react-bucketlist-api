import React from 'react';
import ReactDOM from 'react-dom';
import DeleteBucketlist from '../../../client/components/bucketlists/DeleteBucketlist.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import swal from 'sweetalert';
import { shallow } from 'enzyme';

import { render } from 'enzyme';

const wrapper = shallow(<DeleteBucketlist bucketlist={{ id: 1}}/>);
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
