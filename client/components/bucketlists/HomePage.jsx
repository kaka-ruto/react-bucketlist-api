import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';  
import { Link } from 'react-router-dom';
import Base from './Base.jsx';

function HomePage() {

    return (
        <div>
            <Base />

            < Card className = "container" >
                < CardTitle title = "React Bucketlist" subtitle = "This is the HomePage" />
            </ Card>
        </div>
    );
}
export default HomePage;