// Component contains the logic and HTML of our app’s “Add Bucketlist feature
import React from 'react';
import GetAllBucketlists from '../GetAllBucketlists.jsx'
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        // Set initial component states
        this.state = {
            item: {
                title: ''
            }
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    // Handle form field changes
    onChange(event) {
        const field = event.target.name;
        const item = this.state.item;
        item[field] = event.target.value;

        this.setState({ 
            item
        });
    }

    // Handle onSave button
    onSave(event) {
        event.preventDefault();
        const bucketlistID = this.props.bucketlistID;
        // Get the form data
        const item = this.state.item;

        axios({
            url : "http://localhost:5000/bucketlists/" + bucketlistID +'/items',
            method: "POST",
            data: item,
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}}).then((response) => {
                swal("Success!", response.data.message, "success");
                
        }).then(response=>{
            this.props.changeItemsMode('readAll');
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
            } else if (error.message) {
                // Something happened in setting up the request that triggered an Error
                console.log('Error msg', error.message);
            } else if (error.config) {
                console.log("Error config", error.config);
            }
            console.log("Random error", error);
        });
    }

    render () {
            return (
                <div>
                    <Card className="sidebar-items">
                        <div>
                            <form onSubmit = { this.onSave }>
                                <h2 className = "card-heading">Create item</h2>
    
                                <div className = "field-line">
                                    <TextField
                                    type = "text"
                                    floatingLabelText = "Title"
                                    autoFocus = 'true'
                                    name = "title"
                                    onChange = { this.onChange }
                                    value = { this.state.title }
                                    />
                                </div>
    
                                <div className = "button-line">
                                    <RaisedButton type = "submit" onClick={this.onSave} label = "Save Bucketlist" primary />
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            );
    }
}

export default CreateItem;