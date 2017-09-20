import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';

class LoginPage extends React.Component {
    ///// Class Constructor

    constructor(props) {
        super(props);

        // Set the initial component state
        this.state = {
            errors: {},
            user: {
                email: '',
                username: '',
                passoword: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    ///// Process the form
    processForm(event) {
        // Prevent default action, in this case, the form submission event
        event.preventDefault();

        console.log('name:', this.state.user.username)
        console.log('password:', this.state.user.password)
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