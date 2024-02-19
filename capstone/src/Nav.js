import logo from './images/Logo.svg';
import menu_icon from './images/menu_icon.svg';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav>
            <div class="content header_div">
                <Link to="/">
                    <img src={logo} alt="Little Lemon Logo" />
                </Link>
                <input type="checkbox" id="navigation_checkbox" />
                <label for="navigation_checkbox" id="navigation_label" title="Navigation öffnen">
                    <img src={menu_icon} id="menu_icon" alt="Menu icon" />
                </label>
                <ul id="navigation">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/menu" className="nav-item">Menu</Link>
                    <Link to="/reservations" className="nav-item">Reservations</Link>
                    <Link to="/order_online" className="nav-item">Order online</Link>
                    <Link to="/login" className="nav-item">Login</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;