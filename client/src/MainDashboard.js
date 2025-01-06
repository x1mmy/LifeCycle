// Desc: Main Dashboard component
import './App.css';
import { Link, Navigate } from 'react-router-dom';  // Add this import
import { Calendar, Package, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './MainDashboard.css';



const Dashboard = () => {
    const navigate = useNavigate();

    return (
      <div className="dashboard">
        
  
        {/* Main Content */}
        <div className="main-content">
          {/* Team Member Link */}
          <div className="team-link">
            <p>
              This is link to{' '}
              <a href="./#/landing">Landing Page</a>{' '}
              for Dylan
            </p>
          </div>
  
          <h1 className="dashboard-title">Dashboard</h1>
          
          <div className="cards-grid">
            {/* Expiring Today Card */}
            <div className="card">
              <div className="card-content">
                <div>
                  <p className="card-label">Expiring Today</p>
                  <h3 className="card-value">0</h3>
                </div>
                <AlertTriangle className="card-icon alert" />
              </div>
            </div>
  
            {/* Expiring Soon Card */}
            <div className="card">
              <div className="card-content">
                <div>
                  <p className="card-label">Next Expiration</p>
                  <h3 className="card-value">June 23</h3>
                  <p className="card-subtitle">Frozen Salmon</p>
                </div>
                <Calendar className="card-icon calendar" />
              </div>
            </div>
  
            {/* Total Products Card */}
            <div className="card">
              <div className="card-content">
                <div>
                  <p className="card-label">Total Products</p>
                  <h3 className="card-value">112</h3> 
                  {/* need to make this dynamic from DB */}
                </div>
                <Package className="card-icon package" />
              </div>
            </div>
          </div>
  
          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/products')}>Add Product</button>
            <button className="btn btn-secondary" onClick={() => navigate('/products')}>View Products</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
