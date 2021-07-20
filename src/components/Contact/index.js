import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Let's Connect!</h1>
            <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26515.03294206583!2d151.23110859651246!3d-33.82833236269909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac3bad92ffa3%3A0x5017d681632c210!2sMosman%20NSW%202088!5e0!3m2!1sen!2sau!4v1626746747433!5m2!1sen!2sau"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"></iframe>

            <div className="social">
                <h4>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-wilson-a72b69204/">
                    https://www.linkedin.com/in/benjamin-wilson-a72b69204/
                </a>
                </p>

                <h4>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/MarketingPlus">
                    https://github.com/MarketingPlus
                </a>
                </p>

                <h4>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:benmarketingplus@gmail.com">
                    benmarketingplus@gmail.com
                </a>
                </p>

                <h4>Resume</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="Assets/resume.docx">
                        Resume
                </a>
                </p>

                <h4>Phone</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:0416149002">
                        0416149002
                </a>
                </p>
            </div>
        </div>
    )
}

export default Contact;
