import React from 'react';

const SecurityModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <div style={headerStyle}>[!] CRITICAL_ALERT [!]</div>
        <p style={messageStyle}>{message}</p>
        <button onClick={onClose} style={buttonStyle}>
          ACKNOWLEDGE
        </button>
      </div>
    </div>
  );
};

const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(4px)'
};

const modalStyle = {
  backgroundColor: 'var(--off-black)',
  border: '2px solid var(--neon-blue)',
  padding: '40px',
  textAlign: 'center',
  maxWidth: '500px',
  boxShadow: '0 0 20px var(--neon-blue-glow)',
  fontFamily: "'Share Tech Mono', monospace"
};

const headerStyle = {
  fontFamily: "'Orbitron', sans-serif",
  color: 'var(--neon-blue)',
  fontSize: '1.5rem',
  marginBottom: '20px',
  textShadow: '0 0 10px var(--neon-blue-glow)'
};

const messageStyle = {
  color: 'var(--snow-white)',
  fontSize: '1.1rem',
  marginBottom: '30px',
  lineHeight: '1.5'
};

const buttonStyle = {
  background: 'transparent',
  border: '1px solid var(--neon-blue)',
  color: 'var(--neon-blue)',
  padding: '10px 25px',
  cursor: 'pointer',
  fontFamily: "'Orbitron', sans-serif",
  fontSize: '0.9rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 0 5px var(--neon-blue-glow)'
};

export default SecurityModal;