// Profile component for managing user settings and preferences
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // State to manage active tab selection
  const [activeTab, setActiveTab] = useState('General');

  // State to manage form input values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    companyName: ''
  });

  // Add new state for security settings if needed
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Add new state for preferences if needed
  const [preferences, setPreferences] = useState({
    emailNotifications: false,
    darkMode: false,
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add API call to update user profile
  };

  // Available tabs for navigation
  const tabs = ['General', 'Security', 'Preferences'];

  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="profile-header">
        <h1>Profile Settings</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      {/* Tab Navigation */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* General Settings Form - Only shown when General tab is active */}
      {activeTab === 'General' && (
        <div className="form-container">
          <h2>General Information</h2>
          <p>Update your basic profile information</p>

          <form onSubmit={handleSubmit}>
            {/* Username Input Field */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            {/* Email Input Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Company Name Input Field */}
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>

            {/* Form Submit Button */}
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </form>
        </div>
      )}

      {/* Security Settings Form */}
      {activeTab === 'Security' && (
        <div className="form-container">
          <h2>Security Settings</h2>
          <p>Manage your password and security preferences</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={securityData.currentPassword}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={securityData.newPassword}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={securityData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="save-button">
              Update Password
            </button>
          </form>
        </div>
      )}

      {/* Preferences Form */}
      {activeTab === 'Preferences' && (
        <div className="form-container">
          <h2>Preferences</h2>
          <p>Customize your application experience</p>

          <div className="preferences-list">
            {/* Notifications Setting */}
            <div className="preference-item">
              <div className="preference-info">
                <h3>Notifications</h3>
                <p>Receive email notifications about your inventory</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={preferences.emailNotifications}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    emailNotifications: e.target.checked
                  }))}
                />
                <span className="slider round"></span>
              </label>
            </div>

            {/* Dark Mode Setting */}
            <div className="preference-item">
              <div className="preference-info">
                <h3>Dark Mode</h3>
                <p>Toggle between light and dark theme</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={preferences.darkMode}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    darkMode: e.target.checked
                  }))}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;