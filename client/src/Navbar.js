// This is the main app nav bar component
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;