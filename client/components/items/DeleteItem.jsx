import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class DeleteItem extends React.Component {
    constructor(props) {
        super(props);
        // Set initial component states
        this.state = {
            title: ''
        };

        this.onDelete = this.onDelete.bind(this);
    }

    // Handle single row deletion
    onDelete(event) {
        const bucketlistID = this.props.bucketlistID;
        const itemID = this.props.itemID;

        axios({
            url : "http://localhost:5000/bucketlists/" + bucketlistID + '/items/' + itemID,
            data: JSON.stringify({'id': itemID}),
            method: "DELETE",
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}

        }).then((response) => {
                swal("Success!", response.data.message, "success");
                // Switch app mode to see other items
                this.props.changeItemsMode('readAll');

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
            } else if (error.message == undefined) {
                // Something happened in setting up the request that triggered an Error
                console.log('Error msg', error.message);
            } else if (error.config !== undefined) {
                console.log("Error config", error.config);
            }
        });
    }

    render() {
        swal({
            title: "Delete bucketlist item",
            text: "This bucketlist item will be permanently deleted",
            icon: 'warning',
            buttons: true,
            dangerMode: true

        }).then ((confirmAction) => {
            if (confirmAction) {
                this.onDelete()
            }
        });

        return null;
    }
}

export default DeleteItem;