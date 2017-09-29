// Component to hold the table header, table rows and bucketlists data
import React from 'react';
import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import BucketlistRow from './BucketlistRow.jsx'

class TableBucketlists extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            stripedRows: true,
            showCheckboxes: false,
            selectable: true,
        };
    }

    render() {
        var rows = this.props.bucketlists.map(function(bucketlist, x) {
            return (
                <BucketlistRow key={x} bucketlist={bucketlist} changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));

        return (
            !rows.length ? <div>You have no bucketists yet</div> 
                        : <Table selectable={this.state.selectable}>
                                <TableHeader adjustForCheckbox={this.state.showCheckboxes} displaySelectAll={this.state.showCheckboxes}>
                                    <TableRow>
                                        <TableHeaderColumn>ID</TableHeaderColumn>
                                        <TableHeaderColumn>Title</TableHeaderColumn>
                                        <TableHeaderColumn>Actions</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>

                                <TableBody displayRowCheckbox={this.state.showCheckboxes} stripedRows={this.state.stripedRows}>
                                    {rows}
                                </TableBody>
                            </Table>
        );
    }
}

export default TableBucketlists;