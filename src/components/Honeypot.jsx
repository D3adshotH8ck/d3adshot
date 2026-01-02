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
    <section className="honeypot-section">
      <div className={`honeypot-box ${isPwned ? 'pwned' : ''}`}>
        <h2>
          {isPwned ? "[!] TRAP_DEPLOYED: ACCESS_REVOKED [!]" : "[ SECURITY_RESEARCH_LAB v1.0 ]"}
        </h2>
        
        {!isPwned ? (
          <>
            <p style={{ marginBottom: '20px', opacity: 0.8 }}>
              Think you can hack me? Enter an XSS payload targeting 'D3adshot'.
            </p>
            <form onSubmit={checkPayload}>
              <div className="honeypot-input-wrapper">
                <span>{'>'}</span>
                <input 
                  type="text"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                  placeholder="<script>alert('D3adshot')</script>"
                />
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>COUNTER-MEASURES ACTIVE. SITE SECURED.</p>
            <button onClick={onReset} className="reset-button" style={{
                background: 'var(--neon-blue)',
                color: 'var(--off-black)',
                border: 'none',
                padding: '10px 20px',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 'bold',
                cursor: 'pointer'
            }}>
              Initialize System Reset
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Honeypot;