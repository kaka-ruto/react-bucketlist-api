import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import axios from 'axios';

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
            }
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

        axios.post(apiUrl + 'auth/login', user).then(function (response) {
            console.log(response);
        })

        .catch (function (error) {
            console.log(error.response.data);
        });
    }

    ///// Render the component
    render() {
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