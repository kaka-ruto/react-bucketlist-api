// omponent with buttons that initiate different actions eg edit, delete
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ActionsComponent extends React.Component{
    render() {
        return (
            <div>
                <a href="/#/dashboard"
                    onClick = {() => this.props.changeAppMode('create')} >
                    <RaisedButton label = "Add Bucketlist" secondary={true} fullWidth />
                </a>
            </div>

        );
    }
}

export default ActionsComponent;