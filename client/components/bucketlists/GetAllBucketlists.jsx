// Component to view all the created bucketlists
import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ActionsComponent from './ActionsComponent.jsx';
import TableBucketlists from './TableBucketlists.jsx';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class GetAllBucketlists extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allBucketlists: []
        };
    }

    // On mount, fetch all bucketlists and store them as this component's state
    componentDidMount() {
        axios({
            url : "http://localhost:5000/bucketlists/",
            method: "GET",
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}

        }).then((response) => {
                this.setState({
                    allBucketlists: response.data.results
            });

        }).catch(function (error) {
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
        });

    }

    // Render component on the page
    render() {
        var allBucketlists = this.state.allBucketlists;

        return  (
            <div>
                <Card className = "sidebar border-radius">
                    <CardTitle title = "Bucketlists" />
                    <TableBucketlists bucketlists={allBucketlists} changeAppMode={this.props.changeAppMode}/> 
                    <ActionsComponent changeAppMode = {this.props.changeAppMode} /> 
                </Card>
            </div>
        );
    }
}

export default GetAllBucketlists;