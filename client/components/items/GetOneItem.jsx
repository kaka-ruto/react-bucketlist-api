// Get one bucketlist
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import axios from 'axios';

class GetOneItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                id: '0',
                title: ''
        };
    }

    // On mount, get product data and put them in this components state
    componentDidMount() {
        var bucketlistID = this.props.bucketlistID;    // From dashboard state
        var itemID = this.props.itemID;    // From getonebucketlist state

        axios({
            url : "http://localhost:5000/bucketlists/" + bucketlistID +'/items/' + itemID,
            method: "GET",
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}}).then((response) => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title
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

    render() {

        return (
            <div>
                <div>
                    <Card className = "sidebar-items">
                        <a href="/#/dashboard"
                            onClick = {() => this.props.changeItemsMode('readAll')} >
                            <RaisedButton label = "View Items" secondary={true} fullWidth />
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
                    </Card>
                </div>
            </div>
        );
    }
}

export default GetOneItem;