// Holds a table row with bucketlist data, along with 'Read one', edit and delete bucketlist buttons
import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import {purple200, red200, blue200} from 'material-ui/styles/colors';

class ItemRow extends React.Component {
    render () {
        console.log("itemrow", this.props.item.id)
        return (
            <TableRow>
                <TableRowColumn>{ this.props.item.id }</TableRowColumn>
                <TableRowColumn>{ this.props.item.title }</TableRowColumn>
                <TableRowColumn>
                    <a href="/#/dashboard"
                        onClick = {() => this.props.changeItemsMode('readOne', this.props.item.id)}
                        >
                        <FontIcon className="material-icons md-6" color={blue200}>visibility</FontIcon>
                    </a>
                    <a href='/#/dashboard'
                        onClick={() => this.props.changeItemsMode('update', this.props.item.id)}
                        >
                        <FontIcon className="material-icons md-18" color={purple200}>edit</FontIcon>
                    </a>
                    <a href='/#/dashboard'
                        onClick={() => this.props.changeItemsMode('delete', this.props.item.id)}
                        >
                        <FontIcon className="material-icons md-6" color={red200}>delete_forever</FontIcon>
                    </a>
                </TableRowColumn>
            </TableRow>
        );
    }
}

export default ItemRow;