import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router";
import {List, ListItem} from 'material-ui/List';
import { Card, CardHeader } from 'material-ui/Card';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import RaisedButton from 'material-ui/RaisedButton';   
import GetAllBucketlists from '../components/GetAllBucketlists.jsx';
import GetOneBucketlist from '../components/GetOneBucketlist.jsx';
import CreateBucketlist from '../components/CreateBucketlist.jsx'; 
import EditBucketlist from '../components/EditBucketlist.jsx';
import DeleteBucketlist from '../components/DeleteBucketlist.jsx';

// component that decides which main component to load: read or create/update

class Dashboard extends React.Component {    // Dashboard holds bucketlists + items
    constructor(props) {
        super(props);
        
        // Initial mode is 'read' mode
        this.state = {
            currentMode: 'readAll',
            bucketlistId: null
        };

        this.changeAppMode = this.changeAppMode.bind(this);
    }

    // Change app mode on user click
    changeAppMode(newMode, bucketlistId) {
        this.setState({
            currentMode: newMode
        });

        if (bucketlistId !== undefined) {
            this.setState({
                bucketlistId: bucketlistId
            });
        }
    }

    // Render the component based on the selected mode
    render() {
        if (sessionStorage.isAuthenticated == 'false') {  
            return <Redirect to="login"/>
        }

        var modeComponent;
        
        switch(this.state.currentMode) {
            case 'readAll':
                modeComponent = <GetAllBucketlists changeAppMode = {this.changeAppMode} />;
                break;
            case 'readOne':
                modeComponent = <GetOneBucketlist bucketlistId={this.state.bucketlistId} changeAppMode={this.changeAppMode} />;
                break;
            case 'create':
                modeComponent = <CreateBucketlist changeAppMode={this.changeAppMode} />;
                break;
            case 'edit':
                modeComponent = <EditBucketlist bucketlistId={this.state.bucketlistId} changeAppMode={this.changeAppMode} />;
                break;
            case 'delete':
                modeComponent = <DeleteBucketlist bucketlistId={this.state.bucketlistId} changeAppMode={this.changeAppMode} />;
                break;
            default:
                modeComponent = <GetAllBucketlists changeAppMode = {this.changeAppMode} />;
                break;
        }
        
        return modeComponent;
    }
}

export default Dashboard;