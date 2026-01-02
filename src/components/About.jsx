import React from 'react';
import '../App.css';

const About = () => {
    return (
        <section id="about" className="content-section fade-in"> 
            <h2>// 01. ABOUT ME</h2>
            
            <div className="about-text">
                <p>
                    I'm a passionate developer and security enthusiast driven by the challenge of building secure, resilient digital experiences. My journey started with web development, crafting responsive interfaces with <span className="highlight">React</span>.
                </p>
                <p>
                    This led me down the rabbit hole of cybersecurity, where I now specialize in identifying and mitigating vulnerabilities. I thrive on the process of ethical hacking—from network reconnaissance to exploiting complex web application flaws—to helping fortify digital defenses.
                </p>
            </div>
        </section>
    );
}

export default About;