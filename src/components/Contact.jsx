import React from 'react';
import '../App.css';


import { FaTiktok, FaInstagram, FaBook, FaBlog } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 
import { SiBuymeacoffee } from 'react-icons/si';

const Contact = () => {
    return (
        <section id="contact" className="content-section fade-in">
            <h2>// 05. CONNECT & SUPPORT</h2>
            
            <p className="contact-text">
                Follow my journey, read my research, or support my work. You can find me across the web below.
            </p>

            {/* --- Social Media Icons --- */}
            <div className="contact-socials">
                <a href="https://x.com/D3adshotH8ck" title="X / Twitter" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                <a href="https://tiktok.com/@d3adshotsec" title="TikTok" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                <a href="https://instagram.com/d3adshotsec" title="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>

            {/* --- Major Links Grid --- */}
            <div className="contact-links-grid">
                <a href="https://d3adshoth8ck.github.io/" target="_blank" rel="noopener noreferrer" className="contact-link-button">
                    <FaBlog /> My Blog
                </a>
                <a href="https://d3adshot.gumroad.com/l/nyzjxs" target="_blank" rel="noopener noreferrer" className="contact-link-button">
                    <FaBook /> Beginner's Hacking Guide
                </a>
                <a href="https://www.buymeacoffee.com/d3adshot" target="_blank" rel="noopener noreferrer" className="contact-link-button">
                    <SiBuymeacoffee /> Buy Me a Coffee
                </a>
            </div>
        </section>
    );
}

export default Contact;