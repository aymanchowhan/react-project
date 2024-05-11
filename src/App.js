import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePages from './pages/HomePages';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );

}

export default App;
