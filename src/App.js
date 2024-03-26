import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePages from './pages/HomePages';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
