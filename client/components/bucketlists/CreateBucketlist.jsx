// Component contains the logic and HTML of our app’s “Add Bucketlist feature
import React from 'react';
import GetAllBucketlists from './GetAllBucketlists.jsx'
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class CreateBucketlist extends React.Component {
    constructor(props) {
        super(props);
        // Set initial component states
        this.state = {
            bucketlist: {
                title: ''
            }
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    // Handle form field changes
    onChange(event) {
        const field = event.target.name;
        const bucketlist = this.state.bucketlist;
        bucketlist[field] = event.target.value;

        this.setState({ 
            bucketlist
        });
    }

    // Handle onSave button
    onSave(event) {
        event.preventDefault();
        // Get the form data
        const bucketlist = this.state.bucketlist;

        axios({
            url : "http://localhost:5000/bucketlists/",
            method: "POST",
            data: bucketlist,
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}}).then((response) => {
                swal("Success!", response.data.message, "success");
                
        }).then(response=>{
            this.props.changeAppMode('readAll');
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
                <div>
                    <form onSubmit = { this.onSave }>     {/* onSave state comes from AddBucketlist comp */}
                        <h2 className = "card-heading">Create bucketlist</h2>

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
            </div>
        );
    }
}

export default CreateBucketlist;