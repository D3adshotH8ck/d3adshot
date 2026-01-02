import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Certs from './components/Certs';
import Contact from './components/Contact';
import Honeypot from './components/Honeypot';
import SecurityModal from './components/SecurityModal'; 

function App() {
  const [isPwned, setIsPwned] = useState(false);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    if (isPwned) {
      document.body.classList.add('pwned-mode');
      setShowModal(true); 
    } else {
      document.body.classList.remove('pwned-mode');
    }
  }, [isPwned]);

  const resetSystem = () => {
    setIsPwned(false);
    setShowModal(false);
  };

  return (
    <div className="App">
      <Header isPwned={isPwned} />
      <main>
        <Honeypot 
          isPwned={isPwned} 
          onTrigger={() => setIsPwned(true)} 
          onReset={resetSystem} 
        />
        <About />
        <Services />
        <Skills />
        <Certs />
        <Contact />
      </main>

      {/* Add the modal component at the bottom */}
      <SecurityModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        message="XSS detected: You will Never Catch Me."
      />

      <footer>
        <p>&copy; {new Date().getFullYear()} D3ADSHOT.</p>
      </footer>
    </div>
  );
}

export default App;