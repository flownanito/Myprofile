import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const response = await fetch("https://formsubmit.co/ajax/nauzetsa686@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject: subject || 'Contacto desde Portfolio Nauzet Sánchez',
                    message
                })
            });

            const data = await response.json();
            if (response.ok && (data.success === "true" || data.success === true)) {
                setStatus('success');
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    return (
        <div className="contact-page-wrapper">
            <div className="container">
                <div className="section-header">
                    <div className="section-eyebrow font-mono">
                        <span>06</span> / DIÁLOGO & OPORTUNIDADES
                    </div>
                    <h1 className="section-title">
                        Iniciar <em>Conversación</em>
                    </h1>
                    <p className="section-subtitle">
                        Disponible para proyectos de producto digital, ingeniería de software backend e integraciones IoT.
                    </p>
                </div>

                <div className="contact-editorial-grid">
                    <div className="contact-info-panel">
                        <h3 className="info-title font-serif">Canales Directos</h3>
                        <p className="info-desc">
                            Puedes escribirme directamente por correo o mensajería, o bien rellenar el formulario de contacto para una respuesta formal en menos de 24 horas.
                        </p>

                        <div className="direct-channels-list">
                            <div className="channel-item">
                                <span className="channel-label font-mono">Email</span>
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
                                <span className="channel-label font-mono">LinkedIn</span>
                                <a
                                    href="https://www.linkedin.com/in/nauzet-sanchez-311621339/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="channel-link font-serif"
                                >
                                    linkedin.com/in/nauzet-sanchez ↗
                                </a>
                            </div>

                            <div className="channel-item">
                                <span className="channel-label font-mono">GitHub</span>
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

                    <div className="contact-form-panel">
                        <div className="form-card">
                            {status === 'success' ? (
                                <div className="form-feedback success">
                                    <div className="feedback-icon">✓</div>
                                    <h4 className="feedback-title font-serif">Mensaje enviado correctamente</h4>
                                    <p className="feedback-desc">
                                        Gracias por escribir. Te responderé lo antes posible.
                                    </p>
                                    <button onClick={() => setStatus('idle')} className="btn-secondary font-mono">
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="editorial-form">
                                    {status === 'error' && (
                                        <div className="form-feedback error">
                                            <span>Ocurrió un error al enviar tu mensaje. Por favor, contáctame directamente por correo a nauzetsanchez4@gmail.com</span>
                                        </div>
                                    )}

                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label font-mono">01. Nombre *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-input"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            disabled={status === 'submitting'}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label font-mono">02. Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            disabled={status === 'submitting'}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject" className="form-label font-mono">03. Asunto</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="form-input"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            disabled={status === 'submitting'}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label font-mono">04. Mensaje *</label>
                                        <textarea
                                            id="message"
                                            className="form-textarea"
                                            rows="5"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                            disabled={status === 'submitting'}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary w-full form-submit-btn" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje ↗'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
