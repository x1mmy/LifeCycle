// This is the main app nav bar component
import { Link } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

import { Package, LayoutDashboard, Bell, Settings } from "lucide-react"

function Navbar() {
    // return (
    //     <nav className="navbar">
    //         <ul className='nav-links'>
    //             <li>
    //                 <Link to="/">Dashboard</Link>
    //             </li>
    //             <li>
    //                 <Link to="/products">Products</Link>
    //             </li>
    //         </ul>
    //         <img className='profile-img' src="/images/profileimg.webp" onClick={'./'} />
    //     </nav>
    // );

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="navbar-brand">
                        <Package className="brand-icon" />
                        <span className="brand-name">Life Cycle</span>
                    </Link>

                    <div className="nav-links">
                        <Link to="/" className="nav-link">
                            <LayoutDashboard className="nav-icon" />
                                Dashboard
                        </Link>
                        <Link to="/products" className="nav-link">
                            <Package className="nav-icon" />
                                Products
                        </Link>
                    </div>
                </div>

                <div className="navbar-actions">
                    <button className="icon-button" aria-label="Notifications">
                        <Bell className="action-icon" />
                    </button>
                    <button className="icon-button" aria-label="Settings">
                        <Settings className="action-icon" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;