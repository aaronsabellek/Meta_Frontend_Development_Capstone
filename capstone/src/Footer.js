import logo from './images/Logo_big.png';

function Footer(props) {
    return (
        <footer>
            <div class="content">
            <img src={logo} alt="Little Lemon Logo" height="200" width="113" />
            <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Menu">Menu</a></li>
                <li><a href="Reservations">Reservations</a></li>
                <li><a href="Order online">Order online</a></li>
                <li><a href="Login">Login</a></li>
            </ul>
            <ul>
                <li><h5>Contact</h5></li>
                <li><a href="Adress">Adress</a></li>
                <li><a href="Phone number">Phone number</a></li>
                <li><a href="Email">Email</a></li>
            </ul>
            <ul>
                <li><h5>Social Media Links</h5></li>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                        FB Icon
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                        Insta Icon
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
                        YT Icon
                    </a>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer;