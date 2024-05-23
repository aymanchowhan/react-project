import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SlugPage from './pages/SlugPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<HomePages />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/:title" element={<SlugPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
