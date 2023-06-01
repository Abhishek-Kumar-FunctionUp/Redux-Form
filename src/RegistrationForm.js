// RegistrationForm.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from './actions';

const RegistrationForm = ({ registerUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
      email,
    };

    registerUser(user);

    // Reset form fields
    setUsername('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default connect(null, { registerUser })(RegistrationForm);
