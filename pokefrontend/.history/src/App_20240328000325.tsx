// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenSelectPage from "./Pages/genSelect";
import HomePage from "./Pages/HomePage";
import "./index.css";

const App: React.FC = () => {
  return (
    <div>
<Router>
      <Routes>
        <Route path="/" element={<GenSelectPage />} />
        <Route path="/genSelect" element={<GenSelectPage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
    </div>

  );
};

export default App;
