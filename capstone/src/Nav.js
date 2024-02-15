import logo from './images/Logo.svg';

function Nav(props) {
    return (
        <nav>
            <a href="Home">
                <img src={logo} alt="Little Lemon Logo" />
            </a>
            <ul id="navigation">
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Menu">Menu</a></li>
                <li><a href="Reservations">Reservations</a></li>
                <li><a href="Order online">Order online</a></li>
                <li><a href="Login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;