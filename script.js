document.addEventListener("DOMContentLoaded", () => {
    // Typed Text Effect
    const typedTextElement = document.getElementById('typed-text');
    const textToType = 'Ethical Hacker // Web Developer // Bug Bounty Hunter';
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            typedTextElement.innerHTML += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    // Scroll animation for elements with class 'animate-on-scroll'
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    animatedElements.forEach(el => observer.observe(el));

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // --- Terminal Command Handler ---

    // New function to handle the typing animation
    function typeMessage(message, speed) {
        let i = 0;
        const messageP = document.createElement('p');
        terminalOutput.appendChild(messageP);

        function type() {
            if (i < message.length) {
                messageP.innerHTML += message.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                 terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        }
        type();
    }
    
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output");

    const commands = {
        "whoami": "D3adshot — Elite Ethical Hacker from the Shadows",
        "ls": "projects/ contact.txt",
        "ls projects": "- Cyberpunk Portfolio\n- XSS Exploit Showcase\n- Web3 Recon Script",
        "cat contact.txt": "Email: d3adshothackerone@gmail.com\nInstagram: @d3adshotsec\nX: D3adshotH8ck",
        "clear": "clear",
        "help": "Available commands:\n- whoami\n- ls\n- ls projects\n- cat contact.txt\n- clear\n- help\n- d3adshot",
        "d3adshot": () => {
            typeMessage("Take the blue pill and you stay in wonderland, take the red pill and i show you how deep the rabbit hole goes.", 50);
        }
    };

    if (terminalInput && terminalOutput) {
        // Automatically focus the terminal input on page load
        terminalInput.focus();

        // Add a welcome message with hints
        terminalOutput.innerHTML += `
            <p>Welcome to D3adshot's digital domain.</p>
            <p>Type <span class="text-neon-green">'whoami'</span> to learn more about me.</p>
            <p>Type <span class="text-neon-green">'ls'</span> to list available commands.</p>
            <p>Type <span class="text-neon-green">'clear'</span> to clear the terminal.</p>
            <p>For a secret message, try typing <span class="text-neon-green">'d3adshot'</span>.</p>
            <p>For a full list of commands, type <span class="text-neon-green">'help'</span>.</p>
        `;

        terminalInput.addEventListener("keydown", e => {
            if (e.key === "Enter") {
                const cmd = terminalInput.value.trim().toLowerCase();

                // Add the user's command to the terminal output first
                terminalOutput.innerHTML += `<p><span class="text-success">d3adshot@localhost</span>:~$ ${cmd}</p>`;

                // Check for empty command before processing
                if (cmd === "") {
                    terminalInput.value = "";
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                    return;
                }
                
                let response = commands[cmd];

                if (typeof response === "function") {
                    response();
                } else if (response) {
                    if (response === "clear") {
                        terminalOutput.innerHTML = "";
                    } else {
                        terminalOutput.innerHTML += `<p>${response.replace(/\n/g, "<br>")}</p>`;
                    }
                } else {
                    terminalOutput.innerHTML += `<p>command not found: ${cmd}</p>`;
                }

                terminalInput.value = "";
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });
    }

    // --- Scramble text hover effect ---
    const nameElement = document.getElementById("scramble-text");
    const nameText = nameElement.dataset.value;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";

    nameElement.addEventListener("mouseenter", () => {
        let iteration = 0;
        let interval = setInterval(() => {
            nameElement.innerText = nameText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return nameText[index];
                    }
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join("");

            if (iteration >= nameText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    });

    nameElement.addEventListener("mouseleave", () => {
        nameElement.innerText = nameText;
    });

});