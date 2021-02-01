import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { NavBar, AddNewStaff, LoginPage } from './components';

import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      {
        isLogin ? <NavBar />
      }
    </div>
  );
}

export default App;
