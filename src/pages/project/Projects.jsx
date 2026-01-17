import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import gestorReservaHotel from '../../assets/gestorReservaHotel.png';
import distanciaEnfoque from '../../assets/distanciaEnfoque.png';
import destascosBenito from '../../assets/desatascosBenito.png';
// import simuladorCasino from '../../assets/simuladorCasino.png';
import './Projects.css';

const PROJECTS_DATA = [
    {
        id: 1,
        title: '_gestor-de-reservas-de-hoteles',
        description: 'Un Gestor de reservas de hoteles que permite a los usuarios reservar habitaciones facilitando la labor de hacer los check-in y check-out.',
        tech: ['React', 'Java', 'SpringBoot', 'PostgreSQL', 'Docker', 'Android-Studio'],
        image: gestorReservaHotel,
    },
    {
        id: 2,
        title: '_distancia-de-enfoque-cinematografico',
        description: 'Herramienta diseñada para aligerar la labor de las pruebas de óptica en cartas de enfoque, calculando con precisión la distancia de enfoque en cámaras de cine',
        tech: ['Flutter', 'Arduino', 'Git'],
        image: distanciaEnfoque,
    },
    {
        id: 3,
        title: '_destascos-benito',
        description: 'Una página web para una empresa de fontanería que permite a los usuarios solicitar servicios y presupuestos de fontanería.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React'],
        image: destascosBenito,
    },
    {
        id: 4,
        title: '_simulador-de-casino',
        description: 'Un simulador de casino (multihilo) en el que se puede observar como diferentes jugadores van utilizadon estrategias para ganar',
        tech: ['Java'],
        image: 'https://via.placeholder.com/300x150/011627/607B96?text=Mobile+App',
    }
];

const FILTERS = [
    { name: 'React', icon: 'react-icon' },
    { name: 'Java', icon: 'java-icon' },
    { name: 'SpringBoot', icon: 'spring-icon' },
    { name: 'PostgreSQL', icon: 'postgres-icon' },
    { name: 'Docker', icon: 'docker-icon' },
    { name: 'Git', icon: 'git-icon' },
    { name: 'Android-Studio', icon: 'android-icon' },
    { name: 'MySQL', icon: 'mysql-icon' },
    { name: 'HTML', icon: 'html-icon' },
    { name: 'CSS', icon: 'css-icon' },
    { name: 'JavaScript', icon: 'js-icon' },
    { name: 'Arduino', icon: 'arduino-icon' },
    { name: 'Flutter', icon: 'flutter-icon' },
];

const FilterCheckbox = ({ label, isChecked, onChange }) => (
    <label className="filter-item">
        <input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            className="filter-checkbox"
        />
        <span className="filter-icon">
            {/* Simple icon or just text styling */}
        </span>
        <span className={`filter-label ${isChecked ? 'active' : ''}`}>{label}</span>
    </label>
);

const Projects = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (filter) => {
        setSelectedFilters(prev => {
            if (prev.includes(filter)) {
                return prev.filter(f => f !== filter);
            } else {
                return [...prev, filter];
            }
        });
    };

    // Filter projects logic
    // If no filter selected, show all? Or show none? Image shows React;Vue selected.
    // Usually show all if none selected, or show matches.
    // Let's match ANY selected filter.
    const filteredProjects = PROJECTS_DATA.filter(project => {
        if (selectedFilters.length === 0) return true;
        return project.tech.some(t => selectedFilters.includes(t));
    });

    return (
        <div className="projects-container">
            <div className="projects-sidebar">
                <div className="sidebar-header">
                    <span className="arrow-icon">▼</span> proyectos
                </div>
                <div className="filter-list">
                    {FILTERS.map(filter => (
                        <FilterCheckbox
                            key={filter.name}
                            label={filter.name}
                            isChecked={selectedFilters.includes(filter.name)}
                            onChange={() => handleFilterChange(filter.name)}
                        />
                    ))}
                </div>
            </div>

            <div className="projects-content">
                <div className="projects-tabs">
                    <div className="tab active">
                        {selectedFilters.join('; ')}
                        <span className="close-tab" onClick={() => setSelectedFilters([])}>×</span>
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
