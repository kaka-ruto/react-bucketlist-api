import React, { PropTypes } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Base = () => (

    <div className="container">
        <div className = "top-bar">
            <div className = "top-bar-left">
                <NavLink to = "/"> Home</NavLink>
                <Link to="/dashboard">Dashboard</Link>
            </div>

            <div className = "top-bar-right">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    </div>
);

export default Base;