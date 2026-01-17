import React from 'react';
import './About.css';
import cvFile from '../../assets/Currículum Nauzet Del Cristo Sánchez Santana (2025) .pdf';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-left">
                <div className="about-content-wrapper">
                    <h1 className="section-title">_sobre-mi</h1>

                    <div className="about-text-content">
                        <p className="about-paragraph">
                            <span className="emoji">🚀</span> No solo escribo código: construyo soluciones.
                        </p>
                        <p className="about-paragraph">
                            Soy desarrollador/a con mentalidad práctica, enfocado/a en entender el problema antes de programar y en entregar resultados claros y funcionales. Me interesa crear software limpio, eficiente y fácil de mantener, pero sobre todo, que tenga impacto real en las personas y en el negocio.
                        </p>
                        <p className="about-paragraph">
                            Me adapto rápido a nuevas tecnologías, disfruto trabajar en equipo y no le tengo miedo a los retos técnicos. Creo en el aprendizaje constante, en preguntar cuando es necesario y en mejorar cada línea de código con intención.
                        </p>
                        <p className="about-paragraph">
                            Busco formar parte de equipos donde la tecnología se use para crear, crecer y hacer las cosas bien.
                        </p>
                    </div>

                    <a href={cvFile} download="Nauzet_Sanchez_CV.pdf" className="download-btn">
                        descargar-cv
                    </a>
                </div>
            </div>

            <div className="about-right">
                <div className="code-snippet-container">
                    <div className="line-numbers">
                        {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
                            <div key={num}>{num}</div>
                        ))}
                    </div>
                    <div className="code-content">
                        <div className="code-line"><span className="keyword">class</span> <span className="class-name">Developer</span> <span className="brace">{'{'}</span></div>
                        <div className="code-line indent-1"><span className="keyword">constructor</span>() <span className="brace">{'{'}</span></div>
                        <div className="code-line indent-2"><span className="this">this</span>.<span className="property">name</span> = <span className="string">'Nauzet Sánchez'</span>;</div>
                        <div className="code-line indent-2"><span className="this">this</span>.<span className="property">role</span> = <span className="string">'Backend Developer'</span>;</div>
                        <div className="code-line indent-2"><span className="this">this</span>.<span className="property">traits</span> = [<span className="string">'Clean Code'</span>, <span className="string">'Solutions Oriented'</span>];</div>
                        <div className="code-line indent-1"><span className="brace">{'}'}</span></div>
                        <div className="code-line"></div>
                        <div className="code-line indent-1"><span className="keyword">work</span>() <span className="brace">{'{'}</span></div>
                        <div className="code-line indent-2"><span className="keyword">return</span> <span className="function">createImpact</span>();</div>
                        <div className="code-line indent-1"><span className="brace">{'}'}</span></div>
                        <div className="code-line indent-1"></div>
                        <div className="code-line indent-1"><span className="keyword">collaboration</span>() <span className="brace">{'{'}</span></div>
                        <div className="code-line indent-2"><span className="keyword">return</span> [<span className="string">'Teamwork'</span>, <span className="string">'Continuous Learning'</span>];</div>
                        <div className="code-line indent-1"><span className="brace">{'}'}</span></div>
                        <div className="code-line"><span className="brace">{'}'}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
