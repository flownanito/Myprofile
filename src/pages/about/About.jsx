import React from 'react';
import profilePic from '../../assets/profile_pic.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-page-wrapper">
            <div className="container">
                <div className="section-header">
                    <div className="section-eyebrow font-mono">
                        <span>05</span> / TRAYECTORIA & FILOSOFÍA DE PRODUCTO
                    </div>
                    <h1 className="section-title">
                        Nauzet Sánchez: <em>Digital Product Developer</em>
                    </h1>
                    <p className="section-subtitle">
                        Transformando conceptos complejos en aplicaciones funcionales, robustas y de alto impacto.
                    </p>
                </div>

                <div className="about-editorial-grid">
                    <div className="about-portrait-card">
                        <div className="portrait-image-wrapper">
                            <img src={profilePic} alt="Nauzet Sánchez" className="portrait-img" />
                            <div className="portrait-badge font-mono">
                                <span className="live-dot"></span> Full Stack & IoT Engineer
                            </div>
                        </div>

                        <div className="about-downloads-panel">
                            <h4 className="panel-title font-serif">Dossier Profesional</h4>
                            <p className="panel-desc font-mono">Descargas oficiales (PDF 2026)</p>
                            <a
                                href="/Nauzet_Sanchez_CV_2026.pdf"
                                download="Nauzet_Sanchez_CV_2026.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary font-mono w-full"
                            >
                                Descargar CV Completo
                            </a>
                            <a
                                href="/Nauzet_Sanchez_Carta_Presentacion_2026.pdf"
                                download="Nauzet_Sanchez_Carta_Presentacion_2026.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary font-mono w-full"
                            >
                                Descargar Carta de Presentación (PDF)
                            </a>
                        </div>
                    </div>

                    <div className="about-editorial-content">
                        <div className="quote-box font-serif">
                            "No solo escribo código: pienso la solución, modelo la arquitectura y construyo productos que generan valor real."
                        </div>

                        <div className="narrative-paragraphs">
                            <p>
                                Soy desarrollador de software con mentalidad de producto, especializado en sistemas backend (Java Spring Boot, Ruby on Rails), desarrollo multiplataforma e interfaces web modernas con React.
                            </p>
                            <p>
                                Mi experiencia abarca desde el desarrollo web en la nube y modelado de bases de datos relacionales (PostgreSQL, MySQL) hasta la integración de hardware y sensores de precisión (LiDAR, Arduino, Flutter) para aplicaciones cinematográficas.
                            </p>
                            <p>
                                Mi enfoque de trabajo se centra en el rigor arquitectónico (Clean Architecture, SOLID, MVC), la concurrencia determinista y la entrega iterativa, asegurando siempre que la tecnología esté al servicio de los objetivos de negocio y la satisfacción del usuario.
                            </p>
                        </div>

                        <div className="about-values-grid">
                            <div className="value-card">
                                <span className="value-icon">🎯</span>
                                <h4 className="value-title font-serif">Product Thinking</h4>
                                <p className="value-desc">Entender el porqué del producto antes de definir el cómo técnico.</p>
                            </div>
                            <div className="value-card">
                                <span className="value-icon">⚡</span>
                                <h4 className="value-title font-serif">Clean Craftsmanship</h4>
                                <p className="value-desc">Código limpio, modular, tipado y preparado para escalar sin deuda técnica.</p>
                            </div>
                            <div className="value-card">
                                <span className="value-icon">🤝</span>
                                <h4 className="value-title font-serif">Colaboración Ágil</h4>
                                <p className="value-desc">Comunicación fluida, integración continua y resolución colaborativa de problemas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
