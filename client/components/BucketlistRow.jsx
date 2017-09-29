// Holds a table row with bucketlist data, along with 'Read one', edit and delete bucketlist buttons
import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

class BucketlistRow extends React.Component {
    render () {
        return (
            <TableRow>
                <TableRowColumn>{ this.props.bucketlist.id }</TableRowColumn>
                <TableRowColumn>{ this.props.bucketlist.title }</TableRowColumn>
                <TableRowColumn>
                    <a href="/#/dashboard"
                        onClick = {() => this.props.changeAppMode('readOne', this.props.bucketlist.id)}
                        >
                        Read One
                    </a>
                    <a href='/#/dashboard'
                        onClick={() => this.props.changeAppMode('edit', this.props.bucketlist.id)}
                        > Edit
                    </a>
                    <a href='/#/dashboard'
                        onClick={() => this.props.changeAppMode('delete', this.props.bucketlist.id)}
                        > Delete
                    </a>
                </TableRowColumn>
            </TableRow>
        );
    }
}

export default BucketlistRow;