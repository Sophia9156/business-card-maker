import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/Login';
import Maker from './components/maker/Maker';

function App({authService}) {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login authService={authService} />} />
          <Route path='/maker' element={<Maker authService={authService} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
