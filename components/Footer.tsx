import { FiLinkedin, FiGithub, FiMail, FiHeart } from 'react-icons/fi';
import { MdCoffee } from 'react-icons/md';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <div className="footer__monogram">UA</div>
        </div>
        <div className="footer__name">Umer Abbas</div>
        <div className="footer__title">AI/ML Engineer · AI Undergraduate @ COMSATS Lahore</div>

        <div className="footer__socials">
          <a href="https://linkedin.com/in/umer25" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
            <FiLinkedin size={17} />
          </a>
          <a href="https://github.com/Umerabbas25" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
            <FiGithub size={17} />
          </a>
          <a href="mailto:umerabbas756@gmail.com" className="social-btn" title="Email">
            <FiMail size={17} />
          </a>
        </div>

        <div className="footer__tagline">
          Built with <MdCoffee size={14} className="footer__icon" /> and <FiHeart size={13} className="footer__icon footer__icon--red" /> in React
        </div>

        <div className="footer__divider" />
        <p className="footer__copy">&copy; 2026 Umer Abbas · All rights reserved.</p>
      </div>
    </footer>
  );
}
