import logo from './images/Logo_big.png';
import fb_logo from './images/facebook.png';
import insta_logo from './images/instagram.png';
import yt_logo from './images/youtube.png';

function Footer(props) {
    return (
        <footer>
            <div class="bg-white">
                <div class="content margin">
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
                                <img
                                    src={ fb_logo }
                                    alt="Facebook icon"
                                    class="footer_icon"
                                    />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                                <img
                                    src={ insta_logo }
                                    alt="Instagram icon"
                                    class="footer_icon"
                                />
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
                                <img
                                    src={ yt_logo }
                                    alt="Youtube icon"
                                    class="footer_icon"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;