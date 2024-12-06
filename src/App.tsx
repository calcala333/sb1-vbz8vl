import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { PublicPage } from './pages/PublicPage';
import { ProfileDetails } from './pages/ProfileDetails';
import { AdminDashboard } from './pages/AdminDashboard';
import { useAuth } from './stores/authStore';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;