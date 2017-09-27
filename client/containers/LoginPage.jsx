import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import axios from 'axios';
import { Redirect } from "react-router";
import swal from 'sweetalert';

class LoginPage extends React.Component {
    ///// Class Constructor

    constructor(props) {
        super(props);

        // Set the initial component state
        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            },
            isAuthenticated: false,
            redirect: false
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    ///// Change the User object
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({ 
            user
        });
    }
    
    ///// Process the form
    processForm(event) {
        // Prevent default action, in this case, the form submission event
        event.preventDefault();

        const apiUrl = "http://localhost:5000/";
        const user = this.state.user;

        axios.post(apiUrl + 'auth/login', user).then((response) => {
            swal("Success!", response.data.message, "success");
            this.setState({
                isAuthenticated: true,
                redirect: true
            });

            window.sessionStorage.setItem("accessToken", response.data.access_token);
            window.sessionStorage.setItem("isAuthenticated", true);
            console.log('Acc', sessionStorage.accessToken);
            console.log("Isauth", isAuthenticated)
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

    ///// Render the component
    render() {
        if (this.state.isAuthenticated) {  
            return <Redirect to="dashboard"/>
        }

        return (
            <LoginForm
                onSubmit = { this.processForm }
                onChange = { this.changeUser }
                errors = { this.state.errors }
                user = { this.state.user }
                
            />
        );
    }
}

export default LoginPage;