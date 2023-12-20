import './App.css';
import React from 'react';
import Header from './Components/Header';
import RegistrationForm from './Components/RegistrationForm';

const App = () => {
  return (
    <div>
      <Header/>
      <h1>User Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default App;