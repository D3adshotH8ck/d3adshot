// src/components/Header.jsx
import React, { useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/Avatar.png';
import { FaChevronDown } from 'react-icons/fa';
import '../App.css';

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Header = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); 
    }, []);

    const particlesOptions = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 200,
                    links: {
                        opacity: 1,
                    },
                },
            },
        },
        particles: {
            color: {
                value: "#f0f0f0",
            },
            links: {
                color: "#00ffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    return (
        <header id="home" className="header-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
            />

            {/* --- Content is now inside this wrapper --- */}
            <div className="header-content">
                <img src={avatar} alt="Avatar" className="avatar" />
                <h1>D3ADSHOT</h1>
                <TypeAnimation
                    sequence={[
                        'A Web Developer', 1500,
                        'An Ethical Hacker', 1500,
                        'A Bug Bounty Hunter', 1500,
                    ]}
                    wrapper="p"
                    speed={50}
                    className="subtitle"
                    repeat={Infinity}
                />
                <a href="#about" className="scroll-down-indicator" aria-label="Scroll down">
                    <FaChevronDown />
                </a>
            </div>
        </header>
    );
};

export default Header;