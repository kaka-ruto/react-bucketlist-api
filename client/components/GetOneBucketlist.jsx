// Get one bucketlist
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import axios from 'axios';

class GetOneBucketlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            return: {
                id: '0',
                title: ''
            }
        };
    }

    // On mount, get product data and put them in this components state
    componentDidMount() {
        var bucketlistId = this.props.bucketlistId;

        axios({
            url : "http://localhost:5000/bucketlists/" + bucketlistId,
            method: "GET",
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}}).then((response) => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title
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
        });
    }

    render() {
        return (
            <div>
                <a href="/#/dashboard"
                    onClick = {() => this.props.changeAppMode('readAll')} >
                    <RaisedButton label = "View Bucketlist" secondary={true} fullWidth />
                </a>
                <form onSubmit={this.onSave}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableRowColumn>{ this.state.id }</TableRowColumn>
                            <TableRowColumn>{ this.state.title }</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                </form>
            </div>
        );
    }
}

export default GetOneBucketlist;