import React from 'react';
import './Footer.css';

{/* Cambiar por InfoJob */ }
const TwitterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M23 3.00005C22.0424 3.67553 20.9821 4.19217 19.86 4.53005C19.2577 3.83757 18.4573 3.34675 17.567 3.12398C16.6767 2.90121 15.7391 2.95725 14.88 3.28482C14.0209 3.6124 13.2801 4.19559 12.756 4.95764C12.2319 5.71968 11.9495 6.62477 11.947 7.55005V8.55005C10.1554 8.59604 8.38133 8.1691 6.80402 7.31291C5.22671 6.45672 3.90156 5.20146 2.96 3.65005C2.96 3.65005 0 10 7 13.0001C5.40552 14.08 3.55152 14.6568 1.64 14.6501C8.00002 18 16 15 16 7.55005C15.9992 7.28829 15.9746 7.02706 15.926 6.77005C16.9406 5.75381 17.6599 4.45331 18 3.00005H23ZM19 6.50005H21V4.50005H19V6.50005Z" fill="currentColor" fillOpacity="0.4" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> {/* Buscar logo de Linkedin */}
        <path fillRule="evenodd" clipRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 7H5V17H7V7ZM19 12.5C19 14.9853 16.9853 17 14.5 17C12.0147 17 10 14.9853 10 12.5V7H12.5V12.5C12.5 13.6046 13.3954 14.5 14.5 14.5C15.6046 14.5 16.5 13.6046 16.5 12.5V7H19V12.5Z" fill="currentColor" fillOpacity="0.4" />
    </svg>
);

const GithubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.98 6.14 17.98C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.42 6 9.54 6.65 8.85C6.55 8.6 6.2 7.57 6.75 6.2C6.75 6.2 7.59 5.93 9.5 7.23C10.3 7 11.15 6.89 12 6.89C12.85 6.89 13.7 7 14.5 7.23C16.41 5.93 17.25 6.2 17.25 6.2C17.8 7.57 17.45 8.6 17.35 8.85C18 9.54 18.38 10.42 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" fillOpacity="0.4" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <span className="find-me">Encuéntrame en:</span>
                <a href="#" className="social-icon">
                    {/* Simple representation for Twitter/X */}
                    <span className="icon">X</span>
                </a>
                <a href="#" className="social-icon">
                    {/* Simple representation for LinkedIn */}
                    <span className="icon">in</span>
                </a>
            </div>
            <div className="footer-right">
                <a href="https://github.com/flownanito" target="_blank" rel="noopener noreferrer" className="github-link">
                    @flownanito <GithubIcon />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
