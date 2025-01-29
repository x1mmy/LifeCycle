// This is the main app nav bar component
import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useState,useEffect, useRef } from 'react';

import { Package, LayoutDashboard, Bell, Settings } from "lucide-react"

function Navbar() {

    //This is the state for the settings menu
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

     // This is the reference for the settings dropdown
    const dropdownRef = useRef(null);

    //This is the function to toggle the settings menu
    const toggleSettings = () => { 
        setIsSettingsOpen(!isSettingsOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // This is the function to close the settings menu if the user clicks outside of it
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsSettingsOpen(false); // This sets the settings menu to false
            }
        };
        // This is the event listener for the click outside of the settings menu
        document.addEventListener('click', handleClickOutside); 
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="navbar-brand">
                        <Package className="brand-icon" />
                        <span className="brand-name">LifeCycle</span>
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
                    <div className="settings-container" ref={dropdownRef}> {/* This is the reference for the settings dropdown */}

                        <button 
                            className="icon-button" 
                            aria-label="Settings"
                            onClick={toggleSettings}
                        >
                            <Settings className="action-icon" />
                        </button>
                        {isSettingsOpen && (
                            <div className="settings-dropdown">
                                <Link to="/settings" className="dropdown-item">Settings</Link>
                                <Link to="/profile" className="dropdown-item">Profile</Link>
                                <Link to="/logout" className="dropdown-item">Logout</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;