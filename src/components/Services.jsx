
import React from 'react';
import '../App.css';
import { FaCode, FaShieldAlt } from 'react-icons/fa'; 

const Services = () => {
    return (
        <section id="services" className="content-section fade-in">
            <h2>// 02. SERVICES</h2>
            
            <div className="services-grid">
                {/* --- Service Card 1: Web Development --- */}
                <div className="service-card">
                    <FaCode className="service-icon" />
                    <h3>Web Development</h3>
                    <p>
                        Building secure, responsive, and high-performance websites and web applications. From front-end design with React to back-end logic, I deliver complete and robust solutions for clients.
                    </p>
                </div>

                {/* --- Service Card 2: Ethical Hacking --- */}
                <div className="service-card">
                    <FaShieldAlt className="service-icon" />
                    <h3>Ethical Hacking</h3>
                    <p>
                        Identifying and mitigating security vulnerabilities through penetration testing and security audits. Specializing in network security, web application security, and vulnerability assessment to protect digital assets.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Services;