import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (auth) {
      setMessage("✓ Firebase is connected!");
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Derma360 - Crowdfunding App</h1>
      <p style={{ fontSize: '20px', color: 'green' }}>{message}</p>
    </div>
  );
}

export default App;