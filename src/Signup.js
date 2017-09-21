import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css'
import axios from 'axios'
import Login from './Login'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    // Create a handleClick function to send data to backend on clicking the Login button
    handleClick(event) {
        var apiBaseUrl = "http:localhost:5000/";
        console.log("values", this.state.username, this.state.password);

        // TODO: check for empty values before hitting submit
        var self = this;
        var payload = {
            'username': this.state.username,
            "password": this.state.password
        }

        axios.post(apiBaseUrl + 'auth/register', payload).then(function (response) {
            console.log(response);
            if (response.data.code === 200) {
                console.log("Registration Successful");

                var bucketlists = [];
                bucketlists.push(<Login appContext = {this} />)

                var loginmessage = "Please sign up first before you login"
                self.props.parentContext.setState({
                    bucketlists: bucketlists,
                    loginmessage: loginmessage,
                    buttonLabel: "Sign Up",
                    isLogin: true
                });
            }
        })

        .catch (function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <Appbar title="Sign up" />
                <TextField
                    hintText = "Enter your username"
                    floatingLabelText = "Username"
                    onChange = {(event, newValue) => this.setState({username: newValue})}
                />
                <br/>
                <TextField
                    type = "password"
                    hintText = "Enter your password"
                    floatingLabelText = "Password"
                    onChange = {(event, newValue) => this.setState({password: newValue})}
                />
                <br />
                <RaisedButton label = "Sign Up" primary = {true}
                    className = "loginButton"
                    onClick = {(event) => this.handleClick(event)} />
            </div>
        )
    }
}

export default Signup;