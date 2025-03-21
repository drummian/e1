// src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';
import SettingsPage from './SettingsPage';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          {/* Home screen (5 main buttons) */}
          <Route path="/" element={<Home />} />

          {/* Contacts screen (when user chooses audio or video call) */}
          <Route path="/contacts/:callType" element={<Contacts />} />

          {/* Settings screen */}
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
