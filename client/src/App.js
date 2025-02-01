import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './MainDashboard';
import LandingPage from './LandingPage';
import Products from './Products';
import Profile from './Profile';

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

// Create a wrapper component to handle navbar visibility
function AppContent() {
    const location = useLocation();
    const showNavbar = location.pathname !== '/landing';

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