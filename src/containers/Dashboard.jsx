import React from 'react';
import {List, ListItem} from 'material-ui/List';
import { Card, CardHeader } from 'material-ui/Card';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const Bucketlists = () => (
    <Card className = "sidebar">
        <CardHeader title = "Bucketlists" />
        <List>
            <ListItem primaryText="Travel" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Study" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Start a venture" leftIcon={<ActionGrade />} />
        </List>
    </Card>
);

export default Bucketlists;