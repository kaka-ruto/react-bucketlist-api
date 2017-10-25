// Holds a table row with bucketlist data, along with 'Read one', edit and delete bucketlist buttons
import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import { Card, CardHeader } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import {purple200, red200, blue200} from 'material-ui/styles/colors';

class BucketlistRow extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render () {
        return (
            <TableRow>
                <TableRowColumn>{ this.props.bucketlist.id }</TableRowColumn>
                <TableRowColumn>{ this.props.bucketlist.title }</TableRowColumn>
                <TableRowColumn>
                    <a href="/#/dashboard"
                        onClick = {() => this.props.changeAppMode('readOne', this.props.bucketlist.id)}
                        >
                        <FontIcon className="material-icons md-6" color={blue200}>visibility</FontIcon>
                    </a>
                    <a href='/#/dashboard'
                        onClick={() => this.props.changeAppMode('edit', this.props.bucketlist.id)}
                        >
                        <FontIcon className="material-icons md-6" color={purple200}>edit</FontIcon>
                    </a>
                    <a href='/#/dashboard'
                        onClick={() => this.props.changeAppMode('delete', this.props.bucketlist.id)}
                        >
                        <FontIcon className="material-icons md-6" color={red200}>delete_forever</FontIcon>
                    </a>
                </TableRowColumn>
            </TableRow>
        
        );
    }
}

export default BucketlistRow;