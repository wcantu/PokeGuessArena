// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenSelectPage from './Pages/genSelect';
import MainPage from './Pages/mainpage'; // Import your MainPage component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenSelectPage />} /> {/* This makes GenSelectPage the default page */}
        <Route path="/genSelect" element={<GenSelectPage />} />
        <Route path="/mainpage" element={<MainPage />} /> {/* Add your MainPage route here */}
      </Routes>
    </Router>
  );
};

export default App;
