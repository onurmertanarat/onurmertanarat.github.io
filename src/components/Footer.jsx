import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="social-links">
                    <li>
                        <a href="https://github.com/onurmertanarat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/onurmertanarat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
                <p>© 2025 Onur Mert Anarat - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;