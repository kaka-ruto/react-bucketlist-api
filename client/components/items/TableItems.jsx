// Component to hold the table header, table rows and bucketlists data
import React from 'react';
import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import ItemRow from './ItemRow.jsx'

class TableItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            stripedRows: true,
            showCheckboxes: false,
            selectable: true,
        };
    }

    render() {
        var rows = this.props.items.map(function(item, x) {
            return (
                <ItemRow key={x} item={item} changeItemsMode={this.props.changeItemsMode} />
            );
        }.bind(this));

        return (
            !rows.length ? <div className="no-items">You have no items yet</div>
                        : <div>
                            <Table selectable={this.state.selectable}>
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
                          </div>
        );
    }
}

export default TableItems;