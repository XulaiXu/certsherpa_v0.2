import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './views/Login';
import CreateAccount from './views/CreateAccount';
import ResetPassword from './views/ResetPassword';
import MockExam from './views/MockExam';
import Exam_01 from './views/exam_01';
import ErrorBoundary from './components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/dashboard.css';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/mock-exam" element={<MockExam />} />
            <Route path="/exam_01" element={<Exam_01 />} />
            <Route path="/account/*" element={<Layout />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
