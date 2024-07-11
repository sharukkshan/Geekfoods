import './Footer.css';
import logo from './assets/footerlogo.svg';
import facebookIcon from './assets/facebook.png';
import twitterIcon from './assets/twitter.png';
import instaIcon from './assets/insta.png';
import githubIcon from './assets/git.png';
import dribbleIcon from './assets/dribble.png';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="Logo" className="footer-logo" />
                <p className="footer-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                <div className="footer-links">
                    <a href="/about">About</a>
                    <a href="/careers">Careers</a>
                    <a href="/history">History</a>
                    <a href="/services">Services</a>
                    <a href="/projects">Projects</a>
                    <a href="/blog">Blog</a>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instaIcon} alt="Instagram" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                        <img src={dribbleIcon} alt="Dribbble" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;