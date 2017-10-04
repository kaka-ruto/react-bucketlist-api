import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';  
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className = "top-bar">
                    <div className = "top-bar-left">
                        <Link to = "/"> React Buck</Link>
                        <Link to = "/dashboard"> Dashboard</Link>
                    </div>
        
                    <div className = "top-bar-right">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>
                
                < Card className = "container" >
                    < CardTitle title = "React Bucketlist" subtitle = "This is the HomePage" />
                </ Card>
            </div>
        );
    }
}
export default HomePage;