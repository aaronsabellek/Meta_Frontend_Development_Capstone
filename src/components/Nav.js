import { Link } from 'react-router-dom';
import logo from '../images/logo_small.svg';
import menu_icon from '../images/menu_icon.svg';

function Nav() {
    return (
        <nav className="content">
            <Link
                id="nav_logo"
                to="/"
            >
                <img
                    src={ logo }
                    alt="Little Lemon Logo"
                />
            </Link>
            <input
                type="checkbox"
                id="nav_checkbox"
            />
            <label
                htmlFor="nav_checkbox"
                id="nav_label"
                title="Navigation öffnen"
            >
                <img
                    src={ menu_icon }
                    id="nav_icon"
                    alt="Navigation icon"
                />
            </label>
            <ul id="navigation">
                <Link to="/" className="nav_item">Home</Link>
                <Link to="/about" className="nav_item">About</Link>
                <Link to="/menu" className="nav_item">Menu</Link>
                <Link to="/reservations" className="nav_item">Reservations</Link>
                <Link to="/order_online" className="nav_item">Order online</Link>
                <Link to="/login" className="nav_item">Login</Link>
            </ul>
        </nav>
    )
}

export default Nav;