import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ProjectCreate from './pages/ProjectCreate';
import ProjectDetails from './pages/ProjectDetails';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Contact from './pages/Contact';
import BuyCoins from './pages/BuyCoins';
import Withdraw from './pages/Withdraw';
import AuthGuard from './components/AuthGuard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-project" element={
            <AuthGuard requiredRole="CREATOR">
              <ProjectCreate />
            </AuthGuard>
          } />
          <Route path="project/:id" element={<ProjectDetails />} />
          <Route path="profile" element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          } />
          <Route path="buy-coins" element={
            <AuthGuard>
              <BuyCoins />
            </AuthGuard>
          } />
          <Route path="withdraw" element={
            <AuthGuard>
              <Withdraw />
            </AuthGuard>
          } />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;