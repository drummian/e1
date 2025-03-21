// src/Contacts.js
import React from 'react';
import { useParams } from 'react-router-dom';

const mockContacts = [
  { id: 1, name: 'Abicir', phone: '1234567890', canVideoCall: true },
  { id: 2, name: 'Alise Wonderland', phone: '0999117788', canVideoCall: false },
  { id: 3, name: 'Danboo', phone: '0999333333', canVideoCall: true },
  { id: 4, name: 'Lucia Luuke', phone: '09876543211', canVideoCall: true },
  { id: 5, name: 'Marilyn Moon', phone: '05554443322', canVideoCall: false }
];

function Contacts() {
  const { callType } = useParams(); // "audio" or "video"

  const handleSelectContact = (contact) => {
    if (callType === 'video' && !contact.canVideoCall) {
      alert(`${contact.name} cannot do video calls!`);
    } else {
      alert(`Calling ${contact.name} via ${callType}...`);
      // Real call logic would go here
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <h2>Contacts ({callType.toUpperCase()})</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#eee' }}>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Video?</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {mockContacts.map((contact) => (
            <tr key={contact.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={styles.td}>{contact.name}</td>
              <td style={styles.td}>{contact.phone}</td>
              <td style={styles.td}>{contact.canVideoCall ? 'Yes' : 'No'}</td>
              <td style={styles.td}>
                <button onClick={() => handleSelectContact(contact)}>
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  th: {
    textAlign: 'left',
    padding: '8px',
    borderBottom: '2px solid #ddd'
  },
  td: {
    padding: '8px'
  }
};

export default Contacts;
