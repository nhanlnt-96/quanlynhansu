import React from 'react';

import { NavBar, AddNewStaff, LoginPage } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <LoginPage />
      <AddNewStaff />
    </div>
  );
}

export default App;
