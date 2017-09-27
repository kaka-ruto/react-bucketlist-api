// Component to view all the created bucketlists
import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import ActionsComponent from './ActionsComponent.jsx';
import TableBucketlists from './TableBucketlists.jsx';
import axios from 'axios';

window.ReadAllBucketlists = React.createClass({
    getInitialState() {
        return {
            allBucketlists: []
        };
    },

    // On mount, fetch all bucketlists and store them as this component's state
    componentDidMount() {
        axios({
            url : "http://localhost:5000/bucketlists/",
            method: "GET",
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}}).then((response) => {
                this.setState({
                    allBucketlists: response.data
            });
        })

        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                swal("Error!", error.response.data.message, "error");
                console.log("Response data", error.response.data);
                console.log("Response status", error.response.status);
                console.log("Response headers", error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log("Request error", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error msg', error.message);
            }
            console.log("Error config", error.config);

            window.sessionStorage.setItem('isAuthenticated', false);
        });
    },

    // Render component on the page
    render() {
            var allBucketlists = this.state.allBucketlists;

            if (allBucketlists.results == 0) {
                return (
                <Card className = "sidebar">
                    <CardHeader title = "Bucketlists" /> < Divider />
                    <h5><i>You have no bucketlists yet</i></h5>
                    < RaisedButton onClick={this.addBucketlist} label = "Add Bucketlist" secondary={true} fullWidth />
                </Card>
                );
            }

            return  (
                <div>
                <Card className = "sidebar">
                     <ActionsComponent changeAppMode = {this.props.changeAppMode} /> 
                    <CardHeader title = "Bucketlists" />
                    <TableBucketlists bucketlists={allBucketlists} changeAppMode={this.props.changeAppMode}/>
                </Card>
                </div>
            );
    }
})

export default ReadAllBucketlists;