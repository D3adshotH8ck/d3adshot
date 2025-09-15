// src/components/Footer.jsx
import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} D3ADSHOT.
            </p>
        </footer>
    );
}

export default Footer;