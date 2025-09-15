// src/components/Skills.jsx
import React from 'react';
import '../App.css'; 

// Icons from Font Awesome
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaSearch, FaBomb } from 'react-icons/fa'; 

// Icons from Simple Icons for specific tools
import { SiKalilinux, SiMetasploit, SiBurpsuite } from 'react-icons/si';

// Icon from Bootstrap Icons
import { BsGrid3X3GapFill } from 'react-icons/bs';

// Icon from Tabler Icons
import { TbRadar2 } from 'react-icons/tb';

const Skills = () => {
    return (
        <section id="skills" className="content-section fade-in">
            <h2>// 03. TOOLKIT & SKILLS</h2>
            
            <div className="skills-grid">
                {/* Each skill is now a self-contained item */}
                <div className="skill-item">
                    <FaHtml5 />
                    <p>HTML5</p>
                </div>
                <div className="skill-item">
                    <FaCss3Alt />
                    <p>CSS3</p>
                </div>
                <div className="skill-item">
                    <FaJs />
                    <p>JavaScript</p>
                </div>
                <div className="skill-item">
                    <FaReact />
                    <p>React</p>
                </div>
                <div className="skill-item">
                    <FaGithub />
                    <p>GitHub</p>
                </div>
                <div className="skill-item">
                    <SiKalilinux />
                    <p>Kali Linux</p>
                </div>
                <div className="skill-item">
                    <SiMetasploit />
                    <p>Metasploit</p>
                </div>
                <div className="skill-item">
                    <SiBurpsuite />
                    <p>Burp Suite</p>
                </div>
                <div className="skill-item">
                    <TbRadar2 />
                    <p>Nmap</p>
                </div>
                <div className="skill-item">
                    <FaSearch />
                    <p>OSINT</p>
                </div>
                {/* --- NEW ITEMS --- */}
                <div className="skill-item">
                    <FaBomb />
                    <p>Exploit DB</p>
                </div>
                <div className="skill-item">
                    <BsGrid3X3GapFill />
                    <p>MITRE ATT&CK</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;