import React from 'react';
import ReactDOM from 'react-dom';
import CreateBucketlist from '../../../client/components/bucketlists/CreateBucketlist.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { shallow } from 'enzyme';
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

    describe('Text', () => {
        it('should show create bucketlist', () => {
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

    // describe('Response', () => {
    //     it('Should return data from response', (done) => {
    //       let mockAdapter = new MockAdapter(axios);

    //        mockAdapter.onGet('http://localhost:5000/bucketlists/').reply(200, {
    //          data: {
    //            posts: ['Intro to git']
    //          }
    //     });
    //     // axios.get('http://localhost:5000/bucketlists/')
    //     // .then(function(response) {
    //     //   console.log(response.data);
    //     // });

    //     //    let response = CreateBucketlist();

    //        setTimeout(() => {
    //           expect(response.posts[0]).to.be.equal('Intro to git');
    //        }, 0)
    //     });
    // });
});