import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const BucketlistForm = ({onSubmit, onChange, bucketlist}) => (
    <Card>
        <form action = "/" onSubmit = { onSubmit }>
            <h2 className = "card-heading">Buck</h2>

            <div className = "field-line">
                <TextField
                type = "text"
                floatingLabelText = "Title"
                autoFocus = 'true'
                name = "title"
                onChange = { onChange }
                value = { bucketlist.title }
                />
            </div>

            <div className = "button-line">
                <RaisedButton type =  "submit" label = "Log In" primary />
            </div>
        </form>
    </Card>
);

BucketlistForm.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    bucketlist: PropTypes.object.isRequired
};

export default BucketlistForm;