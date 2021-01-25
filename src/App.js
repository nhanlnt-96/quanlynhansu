import React from 'react';

import { NavBar, AddNewStaff } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      
      <AddNewStaff />
    </div>
  );
}

export default App;
