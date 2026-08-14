import React, { useState } from 'react';
import { CATEGORIES, PROJECTS_DATA } from '../../data/projectsData';
import ProjectModal from '../../components/ProjectModal';
import profilePic from '../../assets/profile_pic.jpg';
import './Home.css';

const Home = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeLens, setActiveLens] = useState('product'); // 'product' | 'engineering' | 'business'

    // Form State
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formSubject, setFormSubject] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

    // Filter logic
    const filteredProjects = PROJECTS_DATA.filter(project => {
        if (activeFilter === 'all') return true;
        return project.category === activeFilter;
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        try {
            const response = await fetch("https://formsubmit.co/ajax/nauzetsa686@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formName,
                    email: formEmail,
                    subject: formSubject || 'Contacto desde Portfolio Nauzet Sánchez',
                    message: formMessage
                })
            });

            const data = await response.json();
            if (response.ok && (data.success === "true" || data.success === true)) {
                setFormStatus('success');
                setFormName('');
                setFormEmail('');
                setFormSubject('');
                setFormMessage('');
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setFormStatus('error');
        }
    };

    return (
        <div className="home-editorial">
            {/* =================================================================
                SECTION 01: EDITORIAL HERO & PRODUCT MINDSET
                ================================================================= */}
            <section id="hero" className="hero-section">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <div className="hero-meta-pill">
                                <span className="meta-pill-dot"></span>
                                <span className="font-mono">NAUZET SÁNCHEZ // DIGITAL PRODUCT DEVELOPER</span>
                            </div>

                            <h1 className="hero-statement font-serif">
                                Construyo experiencias digitales que convierten <em>ideas</em> en productos reales.
                            </h1>

                            <p className="hero-subtext">
                                No solo escribo código: pienso, diseño y construyo soluciones integrales. Combino rigor de ingeniería backend, interfaces reactivas de alto impacto y versatilidad en sistemas de hardware e IoT para resolver problemas reales con software de alto nivel.
                            </p>

                            {/* Triple Lens Interactive Widget */}
                            <div className="mindset-widget">
                                <div className="mindset-header">
                                    <span className="mindset-label font-mono">
                                        <span className="sparkle">✦</span> Mi Enfoque Triple de Construcción:
                                    </span>
                                    <div className="lens-buttons">
                                        <button
                                            className={`lens-btn font-mono ${activeLens === 'product' ? 'active' : ''}`}
                                            onClick={() => setActiveLens('product')}
                                        >
                                            01. Producto
                                        </button>
                                        <button
                                            className={`lens-btn font-mono ${activeLens === 'engineering' ? 'active' : ''}`}
                                            onClick={() => setActiveLens('engineering')}
                                        >
                                            02. Ingeniería
                                        </button>
                                        <button
                                            className={`lens-btn font-mono ${activeLens === 'business' ? 'active' : ''}`}
                                            onClick={() => setActiveLens('business')}
                                        >
                                            03. Negocio
                                        </button>
                                    </div>
                                </div>

                                <div className="mindset-card animate-fade-in" key={activeLens}>
                                    {activeLens === 'product' && (
                                        <div className="lens-content">
                                            <h4 className="lens-title font-serif">Mentalidad de Producto & Experiencia Humana</h4>
                                            <p className="lens-desc">
                                                Identifico el problema real del usuario antes de tocar una línea de código. Diseñar flujos intuitivos, eliminar fricciones y asegurar que cada funcionalidad aporte valor tangible y medible.
                                            </p>
                                            <div className="lens-tags font-mono">
                                                <span>• User-Centric Flow</span>
                                                <span>• Eliminación de Fricción</span>
                                                <span>• Experiencia Intuitiva</span>
                                            </div>
                                        </div>
                                    )}

                                    {activeLens === 'engineering' && (
                                        <div className="lens-content">
                                            <h4 className="lens-title font-serif">Rigor de Ingeniería & Arquitectura Limpia</h4>
                                            <p className="lens-desc">
                                                Estructuro arquitecturas backend escalables (Clean Architecture, SOLID, MVC), transaccionalidad robusta, concurrencia determinista y sincronización hardware con telemetría de baja latencia.
                                            </p>
                                            <div className="lens-tags font-mono">
                                                <span>• Clean Architecture</span>
                                                <span>• Multithreading & Locks</span>
                                                <span>• Docker & APIs REST</span>
                                            </div>
                                        </div>
                                    )}

                                    {activeLens === 'business' && (
                                        <div className="lens-content">
                                            <h4 className="lens-title font-serif">Viabilidad Empresarial & Time-to-Market</h4>
                                            <p className="lens-desc">
                                                Optimizo recursos sin sobreingeniería: selecciono la tecnología adecuada para lanzar rápido, asegurar bajo coste de mantenimiento e impulsar la conversión y retención del cliente.
                                            </p>
                                            <div className="lens-tags font-mono">
                                                <span>• Eficiencia de Costes</span>
                                                <span>• Despliegue Rápido</span>
                                                <span>• ROI & Escalabilidad</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Hero Actions */}
                            <div className="hero-actions">
                                <a href="#obras" className="btn-primary">
                                    Explorar Obras Seleccionadas ↓
                                </a>
                                <a href="#contacto" className="btn-secondary">
                                    Iniciar Diálogo
                                </a>
                            </div>
                        </div>

                        {/* Hero Metric Sidebar / Asymmetric Showcase */}
                        <div className="hero-aside">
                            <div className="aside-card highlight">
                                <span className="aside-label font-mono">Especialización Principal</span>
                                <span className="aside-title font-serif">Full Stack & IoT Systems</span>
                                <p className="aside-desc">De la telemetría con sensores físicos a microservicios en la nube y aplicaciones reactivas.</p>
                            </div>

                            <div className="aside-stats-grid">
                                <div className="aside-card mini">
                                    <span className="stat-num font-serif">09+</span>
                                    <span className="stat-name font-mono">Proyectos Terminados</span>
                                </div>
                                <div className="aside-card mini">
                                    <span className="stat-num font-serif">100%</span>
                                    <span className="stat-name font-mono">Enfoque de Producto</span>
                                </div>
                                <div className="aside-card mini">
                                    <span className="stat-num font-serif">&lt;40ms</span>
                                    <span className="stat-name font-mono">Latencia API Backend</span>
                                </div>
                                <div className="aside-card mini">
                                    <span className="stat-num font-serif">ACID</span>
                                    <span className="stat-name font-mono">Integridad de Datos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================================================================
                SECTION 02: SELECTED WORKS / OBRAS SELECCIONADAS
                ================================================================= */}
            <section id="obras" className="section-padding works-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow font-mono">
                            <span>02</span> / OBRAS SELECCIONADAS & CASOS DE ESTUDIO
                        </div>
                        <h2 className="section-title">
                            Productos construidos con <em>precisión</em> y propósito.
                        </h2>
                        <p className="section-subtitle">
                            Cada proyecto refleja un desafío específico resuelto mediante arquitectura de software pensada para el mundo real: desde óptica cinematográfica y sensores LiDAR hasta plataformas cloud de reservas y motores de simulación multihilo.
                        </p>
                    </div>

                    {/* Category Filter Pills */}
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

                    {/* Projects Grid */}
                    <div className="works-grid">
                        {filteredProjects.map((project, index) => (
                            <article
                                key={project.id}
                                className={`work-card ${project.featured ? 'is-featured' : ''}`}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="work-image-container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="work-image"
                                        loading="lazy"
                                    />
                                    <div className="work-image-overlay">
                                        <span className="overlay-btn font-mono">Ver Caso Completo ↗</span>
                                    </div>
                                </div>

                                <div className="work-info">
                                    <div className="work-meta-row font-mono">
                                        <span className="work-num">{project.number}</span>
                                        <span className="work-tag">{project.shortTag}</span>
                                        <span className="work-year">{project.year}</span>
                                    </div>

                                    <h3 className="work-title font-serif">
                                        {project.title}
                                    </h3>

                                    <p className="work-tagline font-italic">
                                        "{project.tagline}"
                                    </p>

                                    <p className="work-summary">
                                        {project.summary}
                                    </p>

                                    <div className="work-tech-list">
                                        {project.tech.slice(0, 4).map((t, i) => (
                                            <span key={i} className="work-tech-pill font-mono">{t}</span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="work-tech-pill font-mono">+{project.tech.length - 4}</span>
                                        )}
                                    </div>

                                    <div className="work-footer-row">
                                        <button className="view-case-study-btn font-mono">
                                            Explorar Caso de Estudio <span className="arrow-sym">→</span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* =================================================================
                SECTION 03: THE PRODUCT METHOD / FILOSOFÍA
                ================================================================= */}
            <section id="metodo" className="section-padding method-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow font-mono">
                            <span>03</span> / FILOSOFÍA & MÉTODO DE TRABAJO
                        </div>
                        <h2 className="section-title">
                            Cómo pienso, estructuro y <em>construyo</em>.
                        </h2>
                        <p className="section-subtitle">
                            El buen software no empieza en el teclado, sino en la comprensión profunda del problema. Mi ciclo de trabajo integra diseño conceptual, rigor arquitectónico y ejecución ágil.
                        </p>
                    </div>

                    <div className="method-grid">
                        <div className="method-card">
                            <span className="method-step font-mono">FASE 01</span>
                            <h3 className="method-card-title font-serif">Diagnóstico & Desglose</h3>
                            <p className="method-card-desc">
                                Deconstruir el problema real de negocio o técnico. Identificar qué fricción se busca eliminar y definir los requerimientos esenciales antes de escribir una sola línea de código.
                            </p>
                            <ul className="method-check-list font-mono">
                                <li>✓ Análisis de flujo de usuario</li>
                                <li>✓ Definición de restricciones y alcance</li>
                                <li>✓ Mapeo de casos límite (Edge cases)</li>
                            </ul>
                        </div>

                        <div className="method-card">
                            <span className="method-step font-mono">FASE 02</span>
                            <h3 className="method-card-title font-serif">Arquitectura & Stack</h3>
                            <p className="method-card-desc">
                                Seleccionar las herramientas exactas sin sobreingeniería. Modelar esquemas de bases de datos relacionales, contratos de API RESTful y patrones de diseño (MVC, DAO, SOLID).
                            </p>
                            <ul className="method-check-list font-mono">
                                <li>✓ Modelado de entidades y relaciones</li>
                                <li>✓ Aislamiento de capas (Clean Arch)</li>
                                <li>✓ Estrategia de persistencia & concurrencia</li>
                            </ul>
                        </div>

                        <div className="method-card">
                            <span className="method-step font-mono">FASE 03</span>
                            <h3 className="method-card-title font-serif">Craft & Construcción</h3>
                            <p className="method-card-desc">
                                Desarrollo iterativo con código limpio, modular y testeado. Integración de interfaces reactivas fluidas y comunicación segura entre clientes, servidores y microcontroladores.
                            </p>
                            <ul className="method-check-list font-mono">
                                <li>✓ Tipado riguroso y control de errores</li>
                                <li>✓ Primitivas de sincronización multihilo</li>
                                <li>✓ Microinteracciones y diseño cuidado</li>
                            </ul>
                        </div>

                        <div className="method-card">
                            <span className="method-step font-mono">FASE 04</span>
                            <h3 className="method-card-title font-serif">Despliegue & Métrica</h3>
                            <p className="method-card-desc">
                                Empaquetado containerizado con Docker, despliegue continuo y validación de métricas de rendimiento (latencia, tiempos de respuesta, consistencia de datos).
                            </p>
                            <ul className="method-check-list font-mono">
                                <li>✓ Entornos reproducibles (Docker)</li>
                                <li>✓ Optimización de tiempos de carga</li>
                                <li>✓ Feedback continuo para iteración</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================================================================
                SECTION 04: TECH ARSENAL & CAPABILITIES
                ================================================================= */}
            <section id="stack" className="section-padding stack-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow font-mono">
                            <span>04</span> / ARSENAL TECNOLÓGICO & DOMINIOS
                        </div>
                        <h2 className="section-title">
                            Tecnologías dominadas con <em>criterio</em> técnico.
                        </h2>
                        <p className="section-subtitle">
                            No colecciono tecnologías de forma decorativa: domino herramientas que permiten construir productos estables, rápidos y preparados para evolucionar.
                        </p>
                    </div>

                    <div className="stack-grid">
                        {/* Domain 1: Backend */}
                        <div className="stack-card">
                            <div className="stack-card-header">
                                <span className="stack-icon">⚙️</span>
                                <h3 className="stack-domain-title font-serif">Backend & Concurrencia</h3>
                            </div>
                            <p className="stack-domain-desc">
                                Motores de lógica empresarial, sistemas multihilo, APIs RESTful y arquitectura en capas.
                            </p>
                            <div className="stack-badges font-mono">
                                <span className="badge">Java 17+</span>
                                <span className="badge">Spring Boot</span>
                                <span className="badge">Ruby on Rails</span>
                                <span className="badge">Multithreading</span>
                                <span className="badge">Docker</span>
                                <span className="badge">REST APIs</span>
                                <span className="badge">Clean Architecture</span>
                            </div>
                        </div>

                        {/* Domain 2: Frontend */}
                        <div className="stack-card">
                            <div className="stack-card-header">
                                <span className="stack-icon">✨</span>
                                <h3 className="stack-domain-title font-serif">Frontend & Interfaces</h3>
                            </div>
                            <p className="stack-domain-desc">
                                Interfaces web reactivas, arquitecturas de diseño editorial y optimización de rendimiento en cliente.
                            </p>
                            <div className="stack-badges font-mono">
                                <span className="badge">React 19</span>
                                <span className="badge">JavaScript ESNext</span>
                                <span className="badge">CSS Architecture</span>
                                <span className="badge">Tailored Design</span>
                                <span className="badge">Responsive Systems</span>
                                <span className="badge">A11y & Core Web Vitals</span>
                            </div>
                        </div>

                        {/* Domain 3: Hardware & Mobile */}
                        <div className="stack-card">
                            <div className="stack-card-header">
                                <span className="stack-icon">📡</span>
                                <h3 className="stack-domain-title font-serif">Hardware, IoT & Móvil</h3>
                            </div>
                            <p className="stack-domain-desc">
                                Conexión del silicio a la pantalla: microcontroladores, sensores LiDAR y aplicaciones móviles nativas.
                            </p>
                            <div className="stack-badges font-mono">
                                <span className="badge">Flutter & Dart</span>
                                <span className="badge">Arduino & C++</span>
                                <span className="badge">Sensores LiDAR</span>
                                <span className="badge">Protocolos Serial / BLE</span>
                                <span className="badge">Telemetría</span>
                            </div>
                        </div>

                        {/* Domain 4: Databases */}
                        <div className="stack-card">
                            <div className="stack-card-header">
                                <span className="stack-icon">🗄️</span>
                                <h3 className="stack-domain-title font-serif">Persistencia & Bases de Datos</h3>
                            </div>
                            <p className="stack-domain-desc">
                                Modelado relacional estricto, integridad referencial, transacciones ACID y optimización de consultas.
                            </p>
                            <div className="stack-badges font-mono">
                                <span className="badge">PostgreSQL</span>
                                <span className="badge">MySQL</span>
                                <span className="badge">Modelado 3FN</span>
                                <span className="badge">Hibernate JPA</span>
                                <span className="badge">JDBC Optimization</span>
                            </div>
                        </div>

                        {/* Domain 5: Interactive & Game Mechanics */}
                        <div className="stack-card">
                            <div className="stack-card-header">
                                <span className="stack-icon">🎮</span>
                                <h3 className="stack-domain-title font-serif">Simulación & Física</h3>
                            </div>
                            <p className="stack-domain-desc">
                                Motores interactivos 2D, cinemática vectorial y renderizado gráfico en tiempo real.
                            </p>
                            <div className="stack-badges font-mono">
                                <span className="badge">Unity</span>
                                <span className="badge">C# Scripting</span>
                                <span className="badge">2D Physics Engine</span>
                                <span className="badge">Object Pooling</span>
                                <span className="badge">Vector Mathematics</span>
                            </div>
                        </div>

                        {/* Domain 6: Method & Workflow */}
                        <div className="stack-card">
                            <div className="stack-card-header">
                                <span className="stack-icon">🚀</span>
                                <h3 className="stack-domain-title font-serif">Flujo de Trabajo & Metodología</h3>
                            </div>
                            <p className="stack-domain-desc">
                                Organización profesional, control de versiones semántico y metodologías ágiles de entrega.
                            </p>
                            <div className="stack-badges font-mono">
                                <span className="badge">Git Flow</span>
                                <span className="badge">Scrum / Agile</span>
                                <span className="badge">CI/CD Workflows</span>
                                <span className="badge">Product Discovery</span>
                                <span className="badge">Technical Writing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================================================================
                SECTION 05: PROFILE & TRAJECTORY
                ================================================================= */}
            <section id="perfil" className="section-padding profile-section">
                <div className="container">
                    <div className="profile-grid">
                        <div className="profile-media-column">
                            <div className="profile-image-frame">
                                <img src={profilePic} alt="Nauzet Sánchez" className="profile-photo" />
                                <div className="profile-badge-overlay font-mono">
                                    <span className="live-dot"></span> Digital Product Developer
                                </div>
                            </div>

                            <div className="profile-downloads-box">
                                <h4 className="downloads-title font-serif">Documentación Profesional</h4>
                                <p className="downloads-subtitle font-mono">Descarga directa en formato PDF</p>
                                <div className="downloads-buttons">
                                    <a
                                        href="/Nauzet_Sanchez_CV_2026.pdf"
                                        download="Nauzet_Sanchez_CV_2026.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary font-mono download-link"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                        Descargar Currículum Vitae (2026)
                                    </a>
                                    <a
                                        href="/Nauzet_Sanchez_Carta_Presentacion_2026.pdf"
                                        download="Nauzet_Sanchez_Carta_Presentacion_2026.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary font-mono download-link"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                        Descargar Carta de Presentación (PDF)
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="profile-narrative-column">
                            <div className="section-eyebrow font-mono">
                                <span>05</span> / SOBRE NAUZET SÁNCHEZ
                            </div>
                            <h2 className="section-title">
                                De la curiosidad técnica al <em>impacto real</em> en producto.
                            </h2>

                            <div className="profile-story">
                                <p className="lead-paragraph font-serif">
                                    "No me considero únicamente un programador. Me considero alguien que piensa, diseña y construye productos digitales completos."
                                </p>

                                <p>
                                    Soy desarrollador de aplicaciones multiplataforma y sistemas backend con un enfoque integral y práctico. Mi motivación principal no es solo escribir código limpio, sino entender el núcleo del problema antes de pulsar la primera tecla para entregar soluciones que marquen una diferencia tangible.
                                </p>

                                <p>
                                    Mi trayectoria técnica combina mundos que rara vez se cruzan: desde la programación embebida e integración de hardware con sensores LiDAR y Arduino para la industria audiovisual y cinematográfica, hasta arquitecturas de microservicios robustas en Java Spring Boot y Ruby on Rails, persistencia SQL relacional y aplicaciones web modernas en React.
                                </p>

                                <p>
                                    Me adapto rápidamente a cualquier entorno tecnológico, disfruto colaborando en equipos de alto rendimiento y asumo los retos complejos con una mentalidad orientada a la excelencia y a la entrega continua de valor.
                                </p>
                            </div>

                            <div className="profile-highlights-grid">
                                <div className="highlight-pill">
                                    <span className="font-mono highlight-label">📍 Ubicación</span>
                                    <span className="highlight-val">Canarias, España (Remoto / Global)</span>
                                </div>
                                <div className="highlight-pill">
                                    <span className="font-mono highlight-label">⚡ Disponibilidad</span>
                                    <span className="highlight-val">Inmediata para nuevos retos</span>
                                </div>
                                <div className="highlight-pill">
                                    <span className="font-mono highlight-label">🎯 Idiomas</span>
                                    <span className="highlight-val">Español (Nativo) · Inglés Técnico</span>
                                </div>
                                <div className="highlight-pill">
                                    <span className="font-mono highlight-label">💡 Metodología</span>
                                    <span className="highlight-val">Product Thinking & Clean Code</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================================================================
                SECTION 06: DIRECT DIALOGUE / CONTACT
                ================================================================= */}
            <section id="contacto" className="section-padding contact-section">
                <div className="container">
                    <div className="contact-editorial-grid">
                        <div className="contact-intro-col">
                            <div className="section-eyebrow font-mono">
                                <span>06</span> / INICIAR DIÁLOGO
                            </div>
                            <h2 className="section-title">
                                Construyamos algo <em>extraordinario</em> juntos.
                            </h2>
                            <p className="contact-desc">
                                ¿Tienes una idea que necesita convertirse en un producto real, un reto técnico que resolver o una oportunidad de ingeniería? Hablemos.
                            </p>

                            <div className="direct-channels-list">
                                <div className="channel-item">
                                    <span className="channel-label font-mono">Correo Electrónico Directo</span>
                                    <a href="mailto:nauzetsanchez4@gmail.com" className="channel-link font-serif">
                                        nauzetsanchez4@gmail.com ↗
                                    </a>
                                </div>

                                <div className="channel-item">
                                    <span className="channel-label font-mono">Teléfono / WhatsApp</span>
                                    <a href="tel:+34613482484" className="channel-link font-serif">
                                        +34 613 482 484 ↗
                                    </a>
                                </div>

                                <div className="channel-item">
                                    <span className="channel-label font-mono">Red Profesional</span>
                                    <a
                                        href="https://www.linkedin.com/in/nauzet-sanchez-311621339/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="channel-link font-serif"
                                    >
                                        LinkedIn / Nauzet Sánchez ↗
                                    </a>
                                </div>

                                <div className="channel-item">
                                    <span className="channel-label font-mono">Repositorio de Código</span>
                                    <a
                                        href="https://github.com/flownanito"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="channel-link font-serif"
                                    >
                                        github.com/flownanito ↗
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-col">
                            <div className="form-card">
                                <div className="form-card-header">
                                    <h3 className="form-title font-serif">Enviar un Mensaje</h3>
                                    <p className="form-subtitle font-mono">Respuesta garantizada en menos de 24h</p>
                                </div>

                                {formStatus === 'success' ? (
                                    <div className="form-feedback success animate-fade-in">
                                        <div className="feedback-icon">✓</div>
                                        <h4 className="feedback-title font-serif">Mensaje recibido con éxito</h4>
                                        <p className="feedback-desc">
                                            Gracias por ponerte en contacto. He recibido tu mensaje y te responderé a la mayor brevedad posible.
                                        </p>
                                        <button
                                            onClick={() => setFormStatus('idle')}
                                            className="btn-secondary font-mono"
                                        >
                                            Enviar otro mensaje
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="editorial-form">
                                        {formStatus === 'error' && (
                                            <div className="form-feedback error animate-fade-in">
                                                <span>Hubo un inconveniente al enviar el formulario. Por favor, intenta de nuevo o escríbeme directamente a nauzetsanchez4@gmail.com</span>
                                            </div>
                                        )}

                                        <div className="form-group">
                                            <label htmlFor="form-name" className="form-label font-mono">
                                                01. Tu Nombre o Empresa *
                                            </label>
                                            <input
                                                type="text"
                                                id="form-name"
                                                className="form-input"
                                                placeholder="Ej. Ana García / Tech Studio"
                                                value={formName}
                                                onChange={(e) => setFormName(e.target.value)}
                                                required
                                                disabled={formStatus === 'submitting'}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="form-email" className="form-label font-mono">
                                                02. Tu Correo Electrónico *
                                            </label>
                                            <input
                                                type="email"
                                                id="form-email"
                                                className="form-input"
                                                placeholder="ana@empresa.com"
                                                value={formEmail}
                                                onChange={(e) => setFormEmail(e.target.value)}
                                                required
                                                disabled={formStatus === 'submitting'}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="form-subject" className="form-label font-mono">
                                                03. Asunto o Propósito del Proyecto
                                            </label>
                                            <input
                                                type="text"
                                                id="form-subject"
                                                className="form-input"
                                                placeholder="Ej. Oportunidad laboral / Desarrollo de producto"
                                                value={formSubject}
                                                onChange={(e) => setFormSubject(e.target.value)}
                                                disabled={formStatus === 'submitting'}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="form-message" className="form-label font-mono">
                                                04. Cuéntame sobre el reto o proyecto *
                                            </label>
                                            <textarea
                                                id="form-message"
                                                className="form-textarea"
                                                rows="5"
                                                placeholder="Describe brevemente tus objetivos, plazos o necesidades técnicas..."
                                                value={formMessage}
                                                onChange={(e) => setFormMessage(e.target.value)}
                                                required
                                                disabled={formStatus === 'submitting'}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn-primary w-full form-submit-btn"
                                            disabled={formStatus === 'submitting'}
                                        >
                                            {formStatus === 'submitting' ? (
                                                <>Enviando mensaje...</>
                                            ) : (
                                                <>Enviar Mensaje a Nauzet ↗</>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================================================================
                PROJECT CASE STUDY MODAL
                ================================================================= */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

export default Home;
