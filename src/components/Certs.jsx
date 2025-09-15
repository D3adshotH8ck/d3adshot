
import React from 'react';
import '../App.css';

import itAcademyLogo from '../assets/it-academy-logo.png'; 
import cti101Image from '../assets/CTI101.png';

const Certs = () => {
    return (
        <section id="certs" className="content-section fade-in">
            <h2>// 04. CERTIFICATIONS & PROGRESS</h2>
            
            <div className="certs-grid">
                {/* --- IT Academy Card --- */}
                <a href="https://itacademy.co.za/accreditation/" target="_blank" rel="noopener noreferrer" className="cert-card-link">
                    <div className="cert-card">
                        <img src={itAcademyLogo} alt="IT Academy Logo" className="cert-logo-image" />
                        <h3>Web Development</h3>
                        <p className="cert-issuer">Certified By IT Academy</p>
                    </div>
                </a>

                {/* --- CTI Certificate Card (now a link) --- */}
                <a href="https://arcx.io/" target="_blank" rel="noopener noreferrer" className="cert-card-link">
                    <div className="cert-card">
                        <img src={cti101Image} alt="Cyber Threat Intelligence Certificate" className="cert-logo-image" />
                        <h3>Cyber Threat Intelligence</h3>
                        <p className="cert-issuer">Certified by ArcX</p>
                    </div>
                </a>

                {/* --- Container for the TryHackMe Badge --- */}
                <div className="thm-badge-container">
                    <iframe 
                        src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4649227"
                        title="TryHackMe Profile Badge"
                        scrolling="no"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Certs;