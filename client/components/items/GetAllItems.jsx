// Component to view all the created bucketlists
import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ActionsComponent from '../items/ActionsComponent.jsx';
import TableItems from './TableItems.jsx';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class GetAllItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }
    
    // On mount, fetch all bucketlists and store them as this component's state
    componentDidMount() {
        var bucketlistID = this.props.bucketlistID;
        axios({
            url : "http://localhost:5000/bucketlists/" + bucketlistID + '/items',
            method: "GET",
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}}).then((response) => {
                this.setState({
                    items: response.data.results
                });
                console.log("passed thru getallitems fetch", items);
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
            } else if(error.message) {
                // Something happened in setting up the request that triggered an Error
                console.log('Error msg', error.message);
            } else if(error.config) {
                console.log("Error config", error.config);
            }    
        });
    }   

    // Render component on the page
    render() {
        var items = this.state.items;
        
        return  (
            <div>
                <Card className = "sidebar-items border-radius">
                    <CardTitle title = "Items" />
                    <TableItems items={items} changeItemsMode={this.props.changeItemsMode}/>
                    <ActionsComponent onClick={this.props.changeItemsMode('create')} changeItemsMode = {this.props.changeItemsMode} />
                    {/* <div>
                        <a href="/#/dashboard"
                            onClick = {() => this.props.changeItemsMode('create')} >
                            <RaisedButton label = "Add Item" primary fullWidth />
                        </a>
                    </div> */}
                </Card>
            </div>
        );
    }
}
    
export default GetAllItems;