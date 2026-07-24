import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Link to="/" className="logo">
            <Sparkles size={24} color="var(--primary)" />
            PitchMaster
          </Link>
          <nav>
            <Link to="/chat" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              Launch App
            </Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
