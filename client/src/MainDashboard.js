import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Calendar, Package } from 'lucide-react';
import './MainDashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Monitor your inventory metrics and product status</p>
        </div>
        <div className="header-actions">
          <button 
            className="action-button secondary" 
            onClick={() => navigate('/products')}
          >
            View Products
          </button>
          <button 
            className="action-button primary" 
            onClick={() => navigate('/products')}
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-content">
            <div>
              <h3 className="metric-title">Expiring Today</h3>
              <p className="metric-value">0</p>
            </div>
            <AlertTriangle className="metric-icon alert" />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-content">
            <div>
              <h3 className="metric-title">Next Expiration</h3>
              <p className="metric-value">June 23</p>
              <p className="metric-subtitle">Frozen Salmon</p>
            </div>
            <Calendar className="metric-icon calendar" />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-content">
            <div>
              <h3 className="metric-title">Total Products</h3>
              <p className="metric-value">112</p>
            </div>
            <Package className="metric-icon package" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
