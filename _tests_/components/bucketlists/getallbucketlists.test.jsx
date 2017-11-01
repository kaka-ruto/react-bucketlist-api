import React from 'react';
import ReactDOM from 'react-dom';
import GetAllBucketlists from '../../../client/components/bucketlists/GetAllBucketlists.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { shallow, mount } from 'enzyme';
import { render } from 'enzyme';

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
                            <Route exact path='/dashboard' component={GetAllBucketlists}/>
                        </Router>
                    </MuiThemeProvider>),
                    div);
    });

    describe('Text', () => {
        it('should display the header', () => {
            const wrapper = render(
                <MuiThemeProvider muiTheme = { getMuiTheme() }>
                    <GetAllBucketlists/>
                </MuiThemeProvider>
            );
            expect(wrapper).toHaveLength(1);
            expect(wrapper.text()).toContain('Bucketlists');
        });
    });

    // describe('Response', () => {
    //     it('Should return data from response', (response) => {
    //       let mockAdapter = new MockAdapter(axios);

    //        mockAdapter.onGet('http://localhost:5000/bucketlists/').reply(200, {
    //          data: {
    //            posts: ['Intro to git']
    //          }
    //     });
        // console.log(response)
        // axios.get('http://localhost:5000/bucketlists/')
        // .then(function(response) {
        //   console.log(response.data);
        // });

        //    let response = CreateBucketlist();

        //    setTimeout(() => {
        //       expect(response.posts[0]).to.be.equal('Intro to git');
        //    }, 0)
        // });

        // it('mounts', () => {
        //     const wrapper = mount(<GetAllBucketlists prepareStyles=""/>)
        // })
    // });
});
