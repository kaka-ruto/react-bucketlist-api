import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <AppBar title="Login" />
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
                <RaisedButton label = "Login" primary = {true} style = {style}
                    onClick = {(event) => this.handleClick(event)} />
            </div>
        );
    }
}

const style = {
    margin: 15
};

export default Login;