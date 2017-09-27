import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router";
import {List, ListItem} from 'material-ui/List';
import { Card, CardHeader } from 'material-ui/Card';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';   
import ReadAllBucketlists from '../components/ReadAllBucketlists.jsx'; 

// component that decides which main component to load: read or create/update

const Dashboard = React.createClass ({
    // Initial mode is 'read' mode
    getInitialState: function() {
        return {
            currentMode: 'readAll',
            bucketlistId: null
        };
    },

    // Change app mode on user click
    changeAppMode: function(newMode, bucketlistId) {
        this.setState({currentMode: newMode});

        if (bucketlistId !== undefined) {
            this.setState({bucketlistId: bucketlistId});
        }
    },

    // Render the component based on the selected mode
    render: function () {
        if (sessionStorage.getItem('isAuthenticated') == 'false') {
            return <Redirect to="login"/>
        }

        return <ReadAllBucketlists changeAppMode = {this.changeAppMode} />

        switch(this.getInitialState.currentMode) {
            case 'readAll':
                break;
            // case 'readOne':
            //     modeComponent = <ReadOneBucketlist productId={this.getInitialState.productId} changeAppMode={this.changeAppMode} />;
            //     break;
            // case 'create':
            //     modeComponent = <CreateBucketlist changeAppMode={this.changeAppMode} />;
            //     break;
            // case 'update':
            //     modeComponent = <UpdateBucketlist productId={this.getInitialState.productId} changeAppMode={this.changeAppMode} />;
            //     break;
            // case 'delete':
            //     modeComponent = <DeleteBucketlist productId={this.getInitialState.productId} changeAppMode={this.changeAppMode} />;
            //     break;
            default:
                break;
        }

         return modeComponent;
    }
});

// class Dashboard extends React.Component {    // Dashboard holds bucketlists, items
//     constructor(props) {
//         super(props);
        
//         // set the initial component state
//         this.state = {
//             bucketlists: []
//         };
        
//         this.AddBucketlist = AddBucketlist.bind(this);
//     }

//     componentDidMount() {
//         // Get available bucketlists
//         axios({
//             url : "http://localhost:5000/bucketlists/",
//             method: "GET",
//             headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}}).then((response) => {
//                 this.setState({
//                     bucketlists: response.data
//             });
//         })

//         .catch(function (error) {
//             if (error.response) {
//               // The request was made and the server responded with a status code
//               // that falls out of the range of 2xx
//               swal("Error!", error.response.data.message, "error");
//               console.log("Response data", error.response.data);
//               console.log("Response status", error.response.status);
//               console.log("Response headers", error.response.headers);
//             } else if (error.request) {
//               // The request was made but no response was received
//               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//               // http.ClientRequest in node.js
//               console.log("Request error", error.request);
//             } else {
//               // Something happened in setting up the request that triggered an Error
//               console.log('Error msg', error.message);
//             }
//             console.log("Error config", error.config);

//             window.sessionStorage.setItem('isAuthenticated', false);
//         });
//     }

//     render() {
        // if (sessionStorage.getItem('isAuthenticated') == 'false') {
        //     return <Redirect to="login"/>
        // }    

//         if (this.state.bucketlists.results == 0) {
//             return (
//             <Card className = "sidebar">
//                 <CardHeader title = "Bucketlists" /> < Divider />
//                 <h5><i>You have no bucketlists yet</i></h5>
//                 < RaisedButton onClick={this.addBucketlist} label = "Add Bucketlist" secondary={true} fullWidth />
//             </Card>
//             );
//         }

//         return (
//             <Card className = "sidebar">
//                 <CardHeader title = "Bucketlists" />
//                 <List>
//                     <ListItem primaryText="Travel" leftIcon={<ActionGrade />} />
//                 </List>
//             </Card>
//         );
//     }
// }

export default Dashboard;