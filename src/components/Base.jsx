import React, { PropTypes } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Base = ({ children }) => (
    <div>
        <div className = "top-bar">
            <div className = "top-bar-left">
                <NavLink to = "/"> React Buck</NavLink>
                <Link to="/dashboard">Dashboard</Link>
            </div>

            <div className = "top-bar-right">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>

        {children}

    </div>
);

Base.propTypes = {
    children: PropTypes.object.isRequired
};

export default Base;