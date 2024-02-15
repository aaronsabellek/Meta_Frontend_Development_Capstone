import logo from './images/Logo.svg';

function Nav(props) {
    return (
        <nav class="flexbox">
            <div class="content">
            <a href="Home">
                <img src={logo} alt="Little Lemon Logo" />
            </a>
            <ul id="navigation" class="fullwidth">
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Menu">Menu</a></li>
                <li><a href="Reservations">Reservations</a></li>
                <li><a href="Order online">Order online</a></li>
                <li><a href="Login">Login</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;