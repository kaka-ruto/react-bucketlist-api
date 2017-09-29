import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({onSubmit, onChange, errors, user,}) => (
    <Card className = "container">
        <form action = "/signup" onSubmit = { onSubmit }>
            <h2 className = "card-heading">Sign Up</h2>

            { errors.summary && <p className = "error-message">{errors.summary}</p> }

            <div className = "field-line">
                <TextField
                floatingLabelText = "Username"
                autoFocus = 'true'
                name = "username"
                errorText = { errors.username }
                onChange = { onChange }
                value = { user.username }
                />
            </div>

            <div className = "field-line">
                <TextField
                floatingLabelText = "Email"
                name = "email"
                type = "email"
                errorText = { errors.email }
                onChange = { onChange }
                value = { user.email }
                />
            </div>

            <div className = "field-line">
                <TextField
                floatingLabelText = "Password"
                name = "password"
                type = "password"
                errorText = { errors.password }
                onChange = { onChange }
                value = { user.password }
                />
            </div>

            <div className = "button-line">
                <RaisedButton type =  "submit" label = "Create Account" primary />
            </div>

            <CardText>Alread have an account? <Link to = {'/login'}> Log In </Link> </CardText>
        </form>
    </Card>
);

SignUpForm.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;