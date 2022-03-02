import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/Login';
import Maker from './components/maker/Maker';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login authService={authService} />} />
          <Route path='/maker' element={
            <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
