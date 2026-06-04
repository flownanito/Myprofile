import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

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
                    name: name,
                    email: email,
                    message: message
                })
            });

            const data = await response.json();
            if (response.ok && data.success === "true") {
                setStatus('success');
                setName('');
                setEmail('');
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
        <div className="contact-container">
            <div className="contact-left">
                <div className="contact-form-wrapper">
                    <h1 className="section-title">_contacto</h1>

                    {status === 'success' ? (
                        <div className="status-message success-message">
                            <h2 className="status-title">_¡gracias! 🚀</h2>
                            <p className="status-text">Tu mensaje ha sido enviado correctamente. Te responderé lo antes posible.</p>
                            <button onClick={() => setStatus('idle')} className="submit-btn">enviar-otro-mensaje</button>
                        </div>
                    ) : status === 'error' ? (
                        <div className="status-message error-message">
                            <h2 className="status-title">_¡vaya! ❌</h2>
                            <p className="status-text">Hubo un error al enviar tu mensaje. Por favor, vuelve a intentarlo.</p>
                            <button onClick={() => setStatus('idle')} className="submit-btn">intentar-de-nuevo</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">_nombre:</label>
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
                                <label htmlFor="email" className="form-label">_email:</label>
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
                                <label htmlFor="message" className="form-label">_mensaje:</label>
                                <textarea
                                    id="message"
                                    className="form-textarea"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    disabled={status === 'submitting'}
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'enviando...' : 'enviar-mensaje'}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className="contact-right">
                <div className="contact-info-container">
                    <h3 className="info-title">También puedes encontrarme en:</h3>

                    <div className="info-item">
                        <span className="info-label">_email:</span>
                        <a href="mailto:nauzetsanchez4@gmail.com" className="info-link">nauzetsanchez4@gmail.com</a>
                    </div>

                    <div className="info-item">
                        <span className="info-label">_teléfono:</span>
                        <a href="tel:+34613482484" className="info-link">+34 613 482 484</a>
                    </div>

                    <div className="info-item">
                        <span className="info-label">_linkedin:</span>
                        <a href="https://www.linkedin.com/in/nauzet-sanchez-311621339/" target="_blank" rel="noopener noreferrer" className="info-link">
                            linkedin.com/in/nauzet-sanchez-311621339
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
