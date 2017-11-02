// Get one bucketlist
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class EditBucketlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            return: {
                id: '0',
                title: ''
            }
        };

            this.onChange = this.onChange.bind(this);
            this.onSave = this.onSave.bind(this);
    }

    // Get the bucketlist to be edited
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

    // Handle form field changes
    onChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    // Handle onSave button
    onSave(event) {
        event.preventDefault();

        // Get the form data
        const data = {
            title: this.state.title
        };

        console.log('BUck data', data)
        const bucketlistID = this.props.bucketlistID;

        axios({
            url : "http://localhost:5000/bucketlists/" + bucketlistID,
            method: "PUT",
            data: data,
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
                <Card className = "sidebar border-radius">
                <a href="/#/dashboard"
                    onClick = {() => this.props.changeAppMode('readAll')} >
                    <RaisedButton label = "Back" primary />
                </a>
                    <form action = "/" onSubmit = { this.onSave }>     {/* onSave state comes from AddBucketlist comp */}
                        <h2 className = "card-heading">Bucketlist</h2>

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
                </Card>
            </div>
        );
    }
}

export default EditBucketlist;