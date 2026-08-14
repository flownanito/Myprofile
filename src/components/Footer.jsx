import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="editorial-footer">
            <div className="container">
                <div className="footer-top-grid">
                    {/* Brand Statement */}
                    <div className="footer-brand-col">
                        <h3 className="footer-title font-serif">NAUZET SÁNCHEZ</h3>
                        <p className="footer-claim font-italic">
                            "Construyo experiencias digitales que convierten ideas en productos reales."
                        </p>
                        <div className="footer-location font-mono">
                            <span className="location-pin">📍</span> Las Palmas de Gran Canaria, España — Disponible en remoto & global
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="footer-nav-col">
                        <h4 className="footer-section-heading font-mono">Índice</h4>
                        <ul className="footer-links-list">
                            <li><a href="#hero">01 / Manifiesto</a></li>
                            <li><a href="#obras">02 / Obras Seleccionadas</a></li>
                            <li><a href="#metodo">03 / Filosofía de Producto</a></li>
                            <li><a href="#stack">04 / Stack Tecnológico</a></li>
                            <li><a href="#perfil">05 / Sobre Nauzet</a></li>
                            <li><a href="#contacto">06 / Diálogo Directo</a></li>
                        </ul>
                    </div>

                    {/* Social & Direct Channels */}
                    <div className="footer-connect-col">
                        <h4 className="footer-section-heading font-mono">Conexión</h4>
                        <ul className="footer-links-list">
                            <li>
                                <a href="https://www.linkedin.com/in/nauzet-sanchez-311621339/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                    LinkedIn <span className="arrow-out">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/flownanito" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                    GitHub <span className="arrow-out">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:nauzetsanchez4@gmail.com" className="footer-social-link">
                                    nauzetsanchez4@gmail.com <span className="arrow-out">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+34613482484" className="footer-social-link">
                                    +34 613 482 484 <span className="arrow-out">↗</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <div className="footer-meta font-mono">
                        <span>© {currentYear} Nauzet Sánchez. All rights reserved.</span>
                        <span className="meta-separator">•</span>
                        <span>Digital Product Engineering & Craft</span>
                    </div>

                    <button onClick={scrollToTop} className="back-to-top-btn font-mono" aria-label="Volver arriba">
                        Volver arriba ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
