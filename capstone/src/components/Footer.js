import logo from '../images/Logo_big.png';
import fb_logo from '../images/facebook.png';
import insta_logo from '../images/instagram.png';
import yt_logo from '../images/youtube.png';

function Footer() {
    return (
        <footer>
            <div className="content comp_margin">
                <img
                    src={ logo }
                    alt="Little Lemon Logo"
                    id="footer_logo"
                />
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
                    <li id="sm_background">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img
                                src={ fb_logo }
                                alt="Facebook icon"
                                className="footer_icon"
                                />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img
                                src={ insta_logo }
                                alt="Instagram icon"
                                className="footer_icon"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img
                                src={ yt_logo }
                                alt="Youtube icon"
                                className="footer_icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;