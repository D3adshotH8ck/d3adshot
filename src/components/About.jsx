
import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import '../App.css';

const About = () => {
    const isTagCloudInitialized = useRef(false);

    useEffect(() => {
        
        if (isTagCloudInitialized.current) return;

        const container = '.tag-cloud-container';
        const texts = [
            'JavaScript', 'React',
            'Pen Testing', 'Nmap', 'Metasploit',
            'Burp Suite', 'CSS3', 'HTML5',
            'Git', 'GitHub', 'SQL',
            'API Security', 'Kali Linux',
        ];

        const options = {
            radius: 250,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true,
            itemClass: 'tagcloud--item',
        };

        TagCloud(container, texts, options);
        isTagCloudInitialized.current = true;
    }, []);

    return (
        <section id="about" className="content-section fade-in"> 
            <h2>// 01. ABOUT ME</h2>
            
            <div className="about-container">
                {/* --- LEFT COLUMN (Text) --- */}
                <div className="about-text">
                    <p>
                        I'm a passionate developer and security enthusiast driven by the challenge of building secure, resilient digital experiences. My journey started with web development, crafting responsive interfaces with <span className="highlight">React</span>.
                    </p>
                    <p>
                        This led me down the rabbit hole of cybersecurity, where I now specialize in identifying and mitigating vulnerabilities. I thrive on the process of ethical hacking, from network reconnaissance to exploiting complex web application flaws, to helping fortify digital defenses.
                    </p>
                </div>

                {/* --- RIGHT COLUMN (Animated Graphic) --- */}
                <div className="tag-cloud-container">
                    {/* The animated sphere will be rendered here */}
                </div>
            </div>
        </section>
    );
}

export default About;