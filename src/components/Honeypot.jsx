// src/components/Honeypot.jsx
import React, { useState } from 'react';

const Honeypot = ({ isPwned, onTrigger, onReset }) => {
  const [val, setVal] = useState('');

  const checkPayload = (e) => {
    e.preventDefault();
    const input = val.toLowerCase();
    
    
    if (input.includes('<script>') && input.includes('d3adshot')) {
      onTrigger();
    }
    setVal('');
  };

  return (
    <section style={{ padding: '80px 20px', backgroundColor: 'var(--off-black)' }}>
      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto', 
        border: '2px solid var(--neon-blue)', 
        padding: '30px',
        boxShadow: '0 0 20px var(--neon-blue-glow)',
        backgroundColor: 'var(--off-black)', 
        transition: 'all 0.3s ease',
        zIndex: 10,
        position: 'relative'
      }}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--neon-blue)' }}>
          {isPwned ? "[!] TRAP_DEPLOYED: ACCESS_REVOKED [!]" : "[ SECURITY_RESEARCH_LAB v1.0 ]"}
        </h2>
        
        {!isPwned ? (
          <>
            <p style={{ fontSize: '1rem', marginBottom: '25px', color: 'var(--snow-white)', opacity: 0.9 }}>
              Think you can hack me? Enter an XSS payload targeting 'D3adshot' to test this sandbox.
            </p>
            <form onSubmit={checkPayload}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px',
                borderBottom: '2px solid var(--neon-blue)',
                paddingBottom: '5px'
              }}>
                <span style={{ color: 'var(--neon-blue)', fontWeight: 'bold' }}>{'>'}</span>
                <input 
                  type="text"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                  placeholder="<script>alert('D3adshot')</script>"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--neon-blue)',
                    width: '100%',
                    outline: 'none',
                    fontFamily: 'inherit',
                    fontSize: '1.1rem'
                  }}
                />
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '25px', fontWeight: 'bold', color: 'var(--neon-blue)' }}>
              COUNTER-MEASURES ACTIVE. SITE SECURED.
            </p>
            <button 
              onClick={onReset}
              style={{
                background: 'var(--neon-blue)',
                color: 'var(--off-black)', 
                border: 'none',
                padding: '12px 24px',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 0 15px var(--neon-blue-glow)',
                textTransform: 'uppercase',
                transition: 'transform 0.1s active'
              }}
            >
              Initialize System Reset
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Honeypot;