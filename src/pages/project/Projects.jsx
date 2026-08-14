import React, { useState } from 'react';
import { CATEGORIES, PROJECTS_DATA } from '../../data/projectsData';
import ProjectModal from '../../components/ProjectModal';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = PROJECTS_DATA.filter(project => {
        if (activeFilter === 'all') return true;
        return project.category === activeFilter;
    });

    return (
        <div className="projects-page-wrapper">
            <div className="container">
                <div className="section-header projects-header">
                    <div className="section-eyebrow font-mono">
                        <span>02</span> / CATÁLOGO COMPLETO DE PRODUCTOS
                    </div>
                    <h1 className="section-title">
                        Obras & Soluciones de <em>Ingeniería</em>
                    </h1>
                    <p className="section-subtitle">
                        Explora la totalidad de proyectos construidos: arquitecturas cloud, microcontroladores y sensores, aplicaciones multiplataforma y algoritmos concurrentes.
                    </p>
                </div>

                <div className="filter-bar">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-btn font-mono ${activeFilter === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="projects-editorial-grid">
                    {filteredProjects.map((project) => (
                        <article
                            key={project.id}
                            className="project-editorial-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="card-media">
                                <img src={project.image} alt={project.title} className="card-img" loading="lazy" />
                                <span className="card-tag-floating font-mono">{project.shortTag}</span>
                            </div>
                            <div className="card-body">
                                <div className="card-meta font-mono">
                                    <span className="card-num">{project.number}</span>
                                    <span className="card-year">{project.year}</span>
                                </div>
                                <h3 className="card-title font-serif">{project.title}</h3>
                                <p className="card-tagline font-italic">"{project.tagline}"</p>
                                <p className="card-desc">{project.summary}</p>
                                <div className="card-pills">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="pill font-mono">{t}</span>
                                    ))}
                                </div>
                                <button className="card-action-btn font-mono">
                                    Ver Caso de Estudio Completo →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

export default Projects;
