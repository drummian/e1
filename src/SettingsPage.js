// src/SettingsPage.js
import React, { useState } from 'react';

function SettingsPage() {
  // Example toggles
  const [saveTranscripts, setSaveTranscripts] = useState(true);
  const [captionSize, setCaptionSize] = useState('Medium');
  const [themeSetting, setThemeSetting] = useState('Use device settings');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={{ color: '#fff', margin: 0 }}>Settings</h2>
      </div>

      {/* Large Buttons */}
      <button style={styles.largeButton}>My account</button>
      <button style={styles.largeButton}>My subscription</button>

      {/* Setting Rows */}
      <div style={styles.settingRow}>
        <span>Save call transcripts</span>
        <span
          style={styles.toggle}
          onClick={() => setSaveTranscripts(!saveTranscripts)}
        >
          {saveTranscripts ? 'ON' : 'OFF'}
        </span>
      </div>

      <div style={styles.settingRow}>
        <span>Caption size</span>
        <span
          style={styles.toggle}
          onClick={() => setCaptionSize(
            captionSize === 'Medium' ? 'Large' : 'Medium'
          )}
        >
          {captionSize}
        </span>
      </div>

      <div style={styles.settingRow}>
        <span>Themes</span>
        <span
          style={styles.toggle}
          onClick={() => setThemeSetting(
            themeSetting === 'Use device settings' ? 'Dark' : 'Use device settings'
          )}
        >
          {themeSetting}
        </span>
      </div>

      {/* Bottom Button */}
      <button style={styles.feedbackButton}>Feedback and suggestions</button>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#3d76db',
    padding: '1rem'
  },
  largeButton: {
    display: 'block',
    width: '100%',
    padding: '1rem',
    marginBottom: '0.5rem',
    backgroundColor: '#3d76db',
    color: '#fff',
    border: 'none',
    borderRadius: 0,
    textAlign: 'center',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  settingRow: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    padding: '1rem',
    marginBottom: '0.5rem'
  },
  toggle: {
    color: '#fff',
    backgroundColor: '#3d76db',
    borderRadius: '4px',
    padding: '0.3rem 0.8rem',
    cursor: 'pointer'
  },
  feedbackButton: {
    display: 'block',
    width: '100%',
    padding: '1rem',
    backgroundColor: '#3d76db',
    color: '#fff',
    border: 'none',
    borderRadius: 0,
    textAlign: 'center',
    fontSize: '1rem',
    cursor: 'pointer'
  }
};

export default SettingsPage;
