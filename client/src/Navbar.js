
import { Link } from "react-router-dom"
import "./Navbar.css"
import React, { useState, useEffect, useRef } from "react"
import { Package, LayoutDashboard, Bell, Settings, Menu, X } from "lucide-react"

function Navbar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSettingsOpen(false)
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".burger-menu")
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            <Package className="brand-icon" />
            <span className="brand-name">LifeCycle</span>
          </Link>

          {/* Desktop Navigation */}
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
          {/* Mobile Menu Button */}
          <button className="burger-menu" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="action-icon" /> : <Menu className="action-icon" />}
          </button>

          {/* Desktop Actions */}
          <div className="desktop-actions">
            <button className="icon-button" aria-label="Notifications">
              <Bell className="action-icon" />
            </button>
            <div className="settings-container" ref={dropdownRef}>
              <button className="icon-button" aria-label="Settings" onClick={toggleSettings}>
                <Settings className="action-icon" />
              </button>
              {isSettingsOpen && (
                <div className="settings-dropdown">
                  {/* <Link to="/settings" className="dropdown-item">
                    Settings
                  </Link> */}
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <Link to="/logout" className="dropdown-item">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`} ref={mobileMenuRef}>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            <LayoutDashboard className="nav-icon" />
            Dashboard
          </Link>
          <Link to="/products" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            <Package className="nav-icon" />
            Products
          </Link>
          <div className="mobile-divider"></div>
          <Link to="/profile" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            <Settings className="nav-icon" />
            Settings
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

