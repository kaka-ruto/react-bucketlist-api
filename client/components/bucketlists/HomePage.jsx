import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';  
import { Link } from 'react-router-dom';
import Base from './Base.jsx';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Base/>

                < Card className = "container" >
                    < CardTitle title = "React Bucketlist" subtitle = "This is the HomePage" />
                </ Card>
            </div>
        );
    }
}
export default HomePage;