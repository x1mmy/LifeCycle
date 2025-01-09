// This is the main app nav bar component
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <ul className='nav-links'>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
            <img className='profile-img' src="/images/profileimg.webp" onClick={'./'} />
        </nav>
    );
}

export default Navbar;