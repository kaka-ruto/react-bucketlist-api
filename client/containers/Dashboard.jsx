import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router";
import {List, ListItem} from 'material-ui/List';
import { Card, CardHeader } from 'material-ui/Card';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import RaisedButton from 'material-ui/RaisedButton';   
import { Link, NavLink } from 'react-router-dom';
import Base from '../components/bucketlists/Base.jsx';

// Bucketlist components
import GetAllBucketlists from '../components/bucketlists/GetAllBucketlists.jsx';
import GetOneBucketlist from '../components/bucketlists/GetOneBucketlist.jsx';
import CreateBucketlist from '../components/bucketlists/CreateBucketlist.jsx'; 
import EditBucketlist from '../components/bucketlists/EditBucketlist.jsx';
import DeleteBucketlist from '../components/bucketlists/DeleteBucketlist.jsx';
// Items components
import GetAllItems from '../components/items/GetAllItems.jsx';
import CreateItem from '../components/items/CreateItem.jsx';
// search bucketlists
import SearchBucketlists from '../components/bucketlists/SearchBucketlists.jsx';

// component that decides which main component to load: read or create/update

export class Dashboard extends React.Component {    // Dashboard holds bucketlists + items
    constructor(props) {
        super(props);

        // Initial mode is 'read' mode
        this.state = {
            currentMode: 'readAll',
            currentItem: 'readAllItems',    // All items for the selected bucket
            bucketlistID: null,
            loggedIn: true
        };

        this.changeAppMode = this.changeAppMode.bind(this);
        this.logout = this.logout.bind(this);
    }

    // Change app mode on user click
    changeAppMode(newMode, bucketlistID) {
        this.setState({
            currentMode: newMode
        });

        if (bucketlistID !== undefined) {
            this.setState({
                bucketlistID: bucketlistID
            });
        }
    }

    logout(event) {
        event.preventDefault();

        axios({
            url : "http://localhost:5000/auth/logout",
            method: "POST",
            headers: {'Authorization': ('Bearer ' + sessionStorage.getItem('accessToken'))}

        }).then((response) => {
                // Delete the token from localStorage
                sessionStorage.removeItem('accessToken');
                this.setState({
                    'loggedIn': false
                });
                swal("Success!", response.data.message, "success");

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

    // Render the component based on the selected mode
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/login"/>
        }

        if (!sessionStorage.accessToken) {
            swal("Login required!", "You are required to login to access this page", "error");
            return <Redirect to="/login"/>
        }

        var modeComponent;

        switch(this.state.currentMode) {
            case 'readAll':
                modeComponent = <GetAllBucketlists changeAppMode = {this.changeAppMode} />;
                break;
            case 'readOne':
                modeComponent = <GetOneBucketlist bucketlistID={this.state.bucketlistID} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateBucketlist changeAppMode={this.changeAppMode} />;
                break;
            case 'edit':
                modeComponent = <EditBucketlist bucketlistID={this.state.bucketlistID} changeAppMode={this.changeAppMode} />;
                break;
            case 'delete':
                modeComponent = <DeleteBucketlist bucketlistID={this.state.bucketlistID} changeAppMode={this.changeAppMode} />;
                break;
            default:
                modeComponent = <GetAllBucketlists changeAppMode = {this.changeAppMode} />;
                break;
        }

        return (
            <div className="dashboard">
                {/* <Base loggedIn={this.state.loggedIn} logout={this.logout} /> */}

                <div className="container">
                    <div className = "top-bar">
                        <div className = "top-bar-left">
                            <NavLink to = "/"> Home</NavLink>
                            <Link to="/dashboard">Dashboard</Link>
                        </div>
                        <div className = "top-bar-right">
                            {/* <button onClick={this.logout}>Logout</button> */}
                            <Link to="/login" onClick={this.logout}>Logout</Link>
                        </div>
                    </div>
                </div>

                <div className="modecomponent container">
                    {modeComponent}
                </div>
            </div>
        );
    }
}

export default Dashboard;