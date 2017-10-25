// Get one bucketlist
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardHeader } from 'material-ui/Card';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import axios from 'axios';

import GetAllItems from '../items/GetAllItems.jsx';
import CreateItem from '../items/CreateItem.jsx';
import GetOneItem from '../items/GetOneItem.jsx';
import UpdateItem from '../items/UpdateItem.jsx';
import DeleteItem from '../items/DeleteItem.jsx';

class GetOneBucketlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                id: '0',
                title: '',

                itemsMode: 'readAll',    // Gets all items belonging to a this bucketlist
                itemID: null
        };

        this.changeItemsMode = this.changeItemsMode.bind(this);
    }

    // Change items mode on user click
    changeItemsMode(newMode, itemID) {
        this.setState({
            itemsMode: newMode
        });

        if (itemID !== undefined) {
            this.setState({
                itemID: itemID
            });
        }
    }

    // On mount, get product data and put them in this components state
    componentDidMount() {
        var bucketlistID = this.props.bucketlistID;

        axios({
            url : "http://localhost:5000/bucketlists/" + bucketlistID,
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
        var itemModeComponent;
        
                switch(this.state.itemsMode) {
                    case 'readAll':
                        itemModeComponent = <GetAllItems bucketlistID={this.props.bucketlistID}
                                            changeItemsMode={this.changeItemsMode}/>
                        break;
                    case 'create':
                        itemModeComponent = <CreateItem bucketlistID={this.props.bucketlistID}
                                            changeItemsMode={this.changeItemsMode}/>
                        break;
                    case 'readOne':
                        itemModeComponent = <GetOneItem itemID={this.state.itemID} bucketlistID={this.props.bucketlistID}
                                            changeItemsMode={this.changeItemsMode}/>
                        break;
                    case 'update':
                        itemModeComponent = <UpdateItem itemID={this.state.itemID} bucketlistID={this.props.bucketlistID}
                                            changeItemsMode={this.changeItemsMode}/>
                        break;
                    case 'delete':
                        itemModeComponent = <DeleteItem itemID={this.state.itemID} bucketlistID={this.props.bucketlistID}
                                            changeItemsMode={this.changeItemsMode}/>
                        break;
                    default:
                        itemModeComponent = <GetAllItems itemID={this.state.itemID} bucketlistID={this.props.bucketlistID}
                                            changeItemsMode={this.changeItemsMode}/>
                        break;
                }

        return (
            <div>
                <div>
                    <Card className = "sidebar">
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
                    </Card>
                </div>
                <div>
                    { itemModeComponent }
                </div>
            </div>
        );
    }
}

export default GetOneBucketlist;