// Desc: Main Dashboard component
import './App.css';
import { Link } from 'react-router-dom';  // Add this import

function Dashboard() {
    return (
        <div className="App">
            <div> {/* Changed from body to div since body shouldn't be used here */}
                <p>This is link to <Link to="/landing">Landing Page</Link> for Dylan</p>
                <h1>Dashboard</h1>
                <p>
                    this is the main dashboard
                </p>
            </div>
        </div>
    );
}

export default Dashboard;
