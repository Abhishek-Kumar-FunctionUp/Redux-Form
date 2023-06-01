// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Registration Form</h1>
        <RegistrationForm />
      </div>
    </Provider>
  );
};

export default App;
