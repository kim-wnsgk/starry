import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Region from './region/Region';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route exact path="/region" element={<Region />} />
      </Routes>
    </Router>
  );
}

export default App;
