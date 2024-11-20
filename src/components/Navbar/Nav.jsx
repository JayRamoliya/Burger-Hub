import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'
const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="logo-link">BurgerHub</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/" className="navbar-link">Home</Link></li>
                <li><Link to="/order" className="navbar-link">Order</Link></li>
                {/* <li><Link to="/buildyourburger" className="navbar-link">Build Your Burger</Link></li> */}
                {/* <li><Link to="/customize/:burgerId" className="navbar-link">Customize</Link></li>
                <li><Link to="/build/:burgerId" className="navbar-link">Build Your Burger</Link></li> */}
            </ul>
        </nav>
    );
};

export default Nav;
