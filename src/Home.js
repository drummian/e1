// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleMakeAudioCall = () => {
    navigate('/contacts/audio');
  };

  const handleMakeVideoCall = () => {
    navigate('/contacts/video');
  };

  const handleCallMailbox = () => {
    alert('Mailbox feature not implemented yet');
  };

  const handleRecentCalls = () => {
    alert('Recent calls feature not implemented yet');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Center content vertically, but rely on .app-container for overall width */}
      <h1>Welcome to The E-ai-r app</h1>

      <button style={styles.bigButton} onClick={handleMakeAudioCall}>
        Make a call
      </button>
      <button style={styles.bigButton} onClick={handleMakeVideoCall}>
        Make a video call
      </button>
      <button style={styles.bigButton} onClick={handleCallMailbox}>
        Call your mailbox
      </button>

      <div style={styles.bottomRow}>
        <button style={styles.smallButton} onClick={handleRecentCalls}>
          Recent calls
        </button>
        <button style={styles.smallButton} onClick={handleSettings}>
          Settings
        </button>
      </div>
    </div>
  );
}

const styles = {
  bigButton: {
    width: '100%',
    padding: '1rem',
    margin: '0.5rem 0',
    backgroundColor: '#3d76db',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    width: '100%',
    gap: '1rem'
  },
  smallButton: {
    flex: 1,
    padding: '1rem',
    backgroundColor: '#3d76db',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer'
  }
};

export default Home;
