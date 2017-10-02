// omponent with buttons that initiate different actions eg edit, delete
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class CreateItemButton extends React.Component{
    render() {
        // console.log("VCreate items", this.props.changeItemsMode('create'));
        return (
            <div>
                <a href="/#/dashboard"
                    onClick = {() => this.props.changeItemsMode('create')} >
                    <RaisedButton label = "Add Item" secondary={true} fullWidth />
                </a>
            </div>
            
        );
    }
}

export default CreateItemButton;