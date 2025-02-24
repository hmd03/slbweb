import React from 'react';
import './App.css';
import AppInner from './AppInner';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <AppInner />
      </Router>
    </RecoilRoot>
  );
}

export default App;
