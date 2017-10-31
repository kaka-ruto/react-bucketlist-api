import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Base(props) {

        return (
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
        )
    }

export default Base;

// function Base(props) {
    
//         console.log('baseeeeee', props.loggedIn)
//         if (props.loggedIn === true) {
//             return (
//                 <div className="container">
//                     <div className = "top-bar">
//                         <div className = "top-bar-left">
//                             <NavLink to = "/"> Home</NavLink>
//                             <Link to="/dashboard">Dashboard</Link>
//                         </div>
            
//                         <div className = "top-bar-right">
//                             <Link to="/login">Login</Link>
//                             <Link to="/signup">Sign up</Link>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//         else {
//             // That means we are in the dashboard
//             return (
//                 <div className="container">
//                     <div className = "top-bar">
//                         <div className = "top-bar-left">
//                             <NavLink to = "/"> Home</NavLink>
//                             <Link to="/dashboard">Dashboard</Link>
//                         </div>
//                         <div className = "top-bar-right">
//                             <button onClick={props.logout}>Logout</button>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//     }
//     export default Base;