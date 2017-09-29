// Component to hold the table header, table rows and bucketlists data
import React from 'react';
import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import BucketlistRow from './BucketlistRow.jsx'

const BucketlistsTable = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
        </TableHeader>

        <TableBody>
            {/* {rows} */}
        </TableBody>
    </Table>
);

class TableBucketlists extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            stripedRows: true,
            showCheckboxes: false
        };
    }

    render() {
        var rows = this.props.bucketlists.map(function(bucketlist, x) {
            return (
                <BucketlistRow key={x} bucketlist={bucketlist} changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));

        return (
            !rows.length ? <div>You have no bucketists yet</div> : <Table>
                                                                    <TableHeader>
                                                                        <TableRow>
                                                                            <TableHeaderColumn>ID</TableHeaderColumn>
                                                                            <TableHeaderColumn>Title</TableHeaderColumn>
                                                                            <TableHeaderColumn>Actions</TableHeaderColumn>
                                                                        </TableRow>
                                                                    </TableHeader>

                                                                    <TableBody>
                                                                        {rows}
                                                                    </TableBody>
                                                                </Table>
        );
    }
}

export default TableBucketlists;