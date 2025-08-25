import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './views/Login';
import CreateAccount from './views/CreateAccount';
import MockExam from './views/MockExam';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/dashboard.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/mock-exam" element={<MockExam />} />
          <Route path="/account/*" element={<Layout />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
