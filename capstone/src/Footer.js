import logo from './images/Logo_big.png';

function Footer(props) {
    return (
        <footer>
            <img src={logo} alt="Little Lemon Logo" />
            <ul class="footer_nav">
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Menu">Menu</a></li>
                <li><a href="Reservations">Reservations</a></li>
                <li><a href="Order online">Order online</a></li>
                <li><a href="Login">Login</a></li>
            </ul>
            <h5 class="footer_nav_header">Contact</h5>
            <ul class="footer_nav">
                <li><a href="Adress">Adress</a></li>
                <li><a href="Phone number">Phone number</a></li>
                <li><a href="Email">Email</a></li>
            </ul>
            <h5 class="footer_nav_header">Social Media Links</h5>
            <ul class="Footer_nav_media">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                    FB Icon
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                    Insta Icon
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
                    YT Icon
                </a>
            </ul>
        </footer>
    )
}

export default Footer;