import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="card-header">
                <h3 className="project-title">
                    <span className="project-id">Project {project.id}</span> // {project.title}
                </h3>
            </div>
            <div className="card-body">
                <div className="image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="tech-icon">
                        {/* Render icon based on tech stack, simplifying for now */}
                        <span className="icon-placeholder">{project.tech?.[0]?.[0]}</span>
                    </div>
                </div>
                <div className="card-info">
                    <p className="project-description">
                        {project.description}
                    </p>
                    <button className="view-project-btn">view-project</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
