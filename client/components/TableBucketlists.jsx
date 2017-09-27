// Component to hold the table header, table rows and bucketlists data
import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn } from 'material-ui/Table';

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

window.TableBucketlists = React.createClass({
    render() {
        if (this.props.allBucketlists) {
            var rows = this.props.allBucketlists.map(function(bucketlist, x) {
                return (
                    <BucketlistRow key={x} bucketlist={bucketlist} changeAppMode={this.state.changeAppMode} />
                );
            }.bind(this));
            return (
                !rows.length ? <div>You have no bucketists yet</div> : BucketlistsTable
            );
        }
        
       return <div> Needs fixing </div>
    }
});

export default TableBucketlists;