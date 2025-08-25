import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Xulai Dashboard</h1>
        <p>Your account management center</p>
      </header>
      
      <main className="dashboard-content">
        <div className="dashboard-card">
          <h2>Account Overview</h2>
          <div className="account-info">
            <p><strong>Username:</strong> user@example.com</p>
            <p><strong>Account Status:</strong> Active</p>
            <p><strong>Member Since:</strong> {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="btn btn-primary">Edit Profile</button>
            <button className="btn btn-secondary">View Certificates</button>
            <button className="btn btn-secondary">Settings</button>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-date">Today</span>
              <span className="activity-text">Logged into dashboard</span>
            </div>
            <div className="activity-item">
              <span className="activity-date">Yesterday</span>
              <span className="activity-text">Profile updated</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
