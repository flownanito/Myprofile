import React, { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-container animate-modal-enter" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="modal-header">
                    <div className="modal-meta">
                        <span className="modal-number font-mono">{project.number}</span>
                        <span className="modal-category font-mono">{project.shortTag}</span>
                        <span className="modal-year font-mono">{project.year}</span>
                    </div>
                    <h2 id="modal-title" className="modal-title font-serif">
                        {project.title}
                    </h2>
                    <p className="modal-tagline font-italic">
                        "{project.tagline}"
                    </p>
                </div>

                {project.image && (
                    <div className="modal-media-wrapper">
                        <img src={project.image} alt={project.title} className="modal-image" />
                    </div>
                )}

                {project.stats && project.stats.length > 0 && (
                    <div className="modal-stats-grid">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="modal-stat-card">
                                <span className="stat-label font-mono">{stat.label}</span>
                                <span className="stat-value font-serif">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="modal-content-sections">
                    <section className="modal-narrative-section">
                        <h3 className="section-heading font-mono">
                            <span className="heading-dot"></span> 01 / Contexto & Desafío
                        </h3>
                        <p className="section-body">{project.challenge || project.summary}</p>
                    </section>

                    <section className="modal-narrative-section">
                        <h3 className="section-heading font-mono">
                            <span className="heading-dot"></span> 02 / Solución & Arquitectura
                        </h3>
                        <p className="section-body">{project.architecture || project.description}</p>
                    </section>

                    {project.impact && (
                        <section className="modal-narrative-section highlight-box">
                            <h3 className="section-heading font-mono">
                                <span className="heading-dot"></span> 03 / Impacto en Producto
                            </h3>
                            <p className="section-body">{project.impact}</p>
                        </section>
                    )}

                    <section className="modal-narrative-section">
                        <h3 className="section-heading font-mono">
                            <span className="heading-dot"></span> 04 / Tecnologías & Disciplinas
                        </h3>
                        <div className="modal-tech-pills">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-pill font-mono">{t}</span>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="modal-footer">
                    <div className="modal-actions-left">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary font-mono"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.98 6.14 17.98C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.42 6 9.54 6.65 8.85C6.55 8.6 6.2 7.57 6.75 6.2C6.75 6.2 7.59 5.93 9.5 7.23C10.3 7 11.15 6.89 12 6.89C12.85 6.89 13.7 7 14.5 7.23C16.41 5.93 17.25 6.2 17.25 6.2C17.8 7.57 17.45 8.6 17.35 8.85C18 9.54 18.38 10.42 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.477 17.523 2 12 2Z"/>
                                </svg>
                                Código en GitHub
                            </a>
                        )}
                    </div>
                    <button className="btn-primary" onClick={onClose}>
                        Cerrar Explorador
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
