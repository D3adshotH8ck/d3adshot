// src/components/Skills.jsx
import React from 'react';
import '../App.css'; 

// Import the new LogoLoop component
import LogoLoop from './LogoLoop';

// Import all the icons we need for the loop
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaSearch, FaBomb } from 'react-icons/fa'; 
import { SiKalilinux, SiMetasploit, SiBurpsuite } from 'react-icons/si';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { TbRadar2 } from 'react-icons/tb';

// Create the array of logos to pass to the component
const skillLogos = [
    { node: <FaHtml5 />, title: "HTML5" },
    { node: <FaCss3Alt />, title: "CSS3" },
    { node: <FaJs />, title: "JavaScript" },
    { node: <FaReact />, title: "React" },
    { node: <SiKalilinux />, title: "Kali Linux" },
    { node: <SiMetasploit />, title: "Metasploit" },
    { node: <SiBurpsuite />, title: "Burp Suite" },
    { node: <FaSearch />, title: "OSINT" },
];

const Skills = () => {
    return (
        <section id="skills" className="content-section">
            <h2>// 03. TOOLKIT & SKILLS</h2>
            
            <div style={{ marginTop: '3rem' }}>
                <LogoLoop
                    logos={skillLogos}
                    speed={100}
                    direction="left"
                    logoHeight={60} /* Increased size for better visibility */
                    gap={60}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#0d0d0e" /* Matches your off-black background */
                />
            </div>
        </section>
    );
}

export default Skills;