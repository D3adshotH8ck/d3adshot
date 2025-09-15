// src/App.js
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Certs from './components/Certs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Services />
        <Skills />
        <Certs />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} D3ADSHOT.</p>
      </footer>
    </div>
  );
}

export default App;