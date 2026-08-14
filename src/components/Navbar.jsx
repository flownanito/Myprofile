import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Brand Identity */}
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="navbar-brand">
                    <span className="brand-name font-serif">NAUZET SÁNCHEZ</span>
                    <span className="brand-badge font-mono">
                        <span className="live-dot"></span> Product Dev
                    </span>
                </a>

                {/* Desktop Editorial Navigation */}
                <nav className="navbar-nav">
                    <button onClick={() => scrollToSection('#hero')} className="nav-link">
                        <span className="nav-index font-mono">01</span> Manifiesto
                    </button>
                    <button onClick={() => scrollToSection('#obras')} className="nav-link">
                        <span className="nav-index font-mono">02</span> Obras
                    </button>
                    <button onClick={() => scrollToSection('#metodo')} className="nav-link">
                        <span className="nav-index font-mono">03</span> Método
                    </button>
                    <button onClick={() => scrollToSection('#stack')} className="nav-link">
                        <span className="nav-index font-mono">04</span> Stack
                    </button>
                    <button onClick={() => scrollToSection('#perfil')} className="nav-link">
                        <span className="nav-index font-mono">05</span> Perfil
                    </button>
                </nav>

                {/* Right Actions */}
                <div className="navbar-actions">
                    <a
                        href="/Nauzet_Sanchez_CV_2026.pdf"
                        download="Nauzet_Sanchez_CV_2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline font-mono cv-action-btn"
                        title="Descargar Currículum Vitae"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        CV Dossier
                    </a>
                    <button
                        onClick={() => scrollToSection('#contacto')}
                        className="btn-primary talk-btn"
                    >
                        Contacto
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Abrir menú"
                    >
                        <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="mobile-drawer animate-fade-in">
                    <nav className="mobile-drawer-nav">
                        <button onClick={() => scrollToSection('#hero')} className="mobile-nav-link">
                            <span className="font-mono text-accent">01.</span> Manifiesto
                        </button>
                        <button onClick={() => scrollToSection('#obras')} className="mobile-nav-link">
                            <span className="font-mono text-accent">02.</span> Obras Seleccionadas
                        </button>
                        <button onClick={() => scrollToSection('#metodo')} className="mobile-nav-link">
                            <span className="font-mono text-accent">03.</span> Método de Producto
                        </button>
                        <button onClick={() => scrollToSection('#stack')} className="mobile-nav-link">
                            <span className="font-mono text-accent">04.</span> Arsenal Tecnológico
                        </button>
                        <button onClick={() => scrollToSection('#perfil')} className="mobile-nav-link">
                            <span className="font-mono text-accent">05.</span> Perfil & Visión
                        </button>
                        <button onClick={() => scrollToSection('#contacto')} className="mobile-nav-link">
                            <span className="font-mono text-accent">06.</span> Iniciar Diálogo
                        </button>

                        <div className="mobile-drawer-footer">
                            <a
                                href="/Nauzet_Sanchez_CV_2026.pdf"
                                download="Nauzet_Sanchez_CV_2026.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary font-mono w-full"
                            >
                                Descargar CV Completo
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
