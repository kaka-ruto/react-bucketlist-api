// omponent with buttons that initiate different actions eg edit, delete
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var ActionsComponent = (onClick) =>  {
    return (
        <div>
            <a href="/#/dashboard"
                onClick = {onClick} >
                <RaisedButton label = "Add Item" primary fullWidth />
            </a>
        </div>

    );
}

export default ActionsComponent;