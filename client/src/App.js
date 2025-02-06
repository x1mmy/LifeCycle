import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './MainDashboard';
import LandingPage from './LandingPage';
import Products from './Products';
import Profile from './Profile';
import Login from './LoginPage'
import Signup from './SignUp';

// Create a wrapper component to handle navbar visibility
function AppContent() {
    const location = useLocation();
    const showNavbar = !['/landing', '/login', '/signup'].includes(location.pathname);

    return (
        <div className="App">
            {showNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;