import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Navbar =(props) => {
    return (
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <Link className="brand-logo" to="/">Poke Times</Link>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link  to="/newpost">New Post</Link></li>
                <li><Link to="/contact">Contact</Link></li>                
            </ul>
        </div>
    </nav>
    )
}

export default withRouter(Navbar)