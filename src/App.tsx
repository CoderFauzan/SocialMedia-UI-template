import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App: React.FC = () => {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <div className="bg-[#131319] min-h-screen font-inter text-white">
        <Routes>
          <Route path="/" element={<Login setUsername={setUsername} />} />
          <Route path="/home" element={<Home username={username} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
