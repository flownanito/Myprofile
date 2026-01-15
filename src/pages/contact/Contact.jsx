import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="contact-container">
            <div className="contact-left">
                <div className="contact-form-wrapper">
                    <h1 className="section-title">_contacto</h1>

                    <form
                        action="https://formsubmit.co/nauzetsa686@gmail.com"
                        method="POST"
                        className="contact-form"
                    >
                        {/* Configuration for FormSubmit */}
                        <input type="hidden" name="_next" value="http://localhost:5173/contact-me" />
                        <input type="hidden" name="_subject" value="Nuevo mensaje del Portfolio" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="form-group">
                            <label htmlFor="name" className="form-label">_nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">_email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">_mensaje:</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">enviar-mensaje</button>
                    </form>
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
                        <a href="https://linkedin.com/in/nauzet-sanchez" target="_blank" rel="noopener noreferrer" className="info-link">
                            linkedin.com/in/nauzet-sanchez
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
