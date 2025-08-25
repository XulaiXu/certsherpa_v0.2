import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/components/logo';
import '../assets/scss/auth.scss';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    code: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required. Please start the password reset process from the login page.');
      return;
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // TODO: Implement actual password reset logic here
      // For now, simulate a successful reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to login page after successful reset
      navigate('/login', { 
        state: { 
          message: 'Password reset successful! Please log in with your new password.' 
        } 
      });
    } catch (err) {
      setError(err.message || 'Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="card-login">
        <div className="logo-container">
          <Logo width={120} height={111} className="centered-logo" />
        </div>

        <h3 className="text-center mb-3">Reset Password</h3>
        <p className="text-center text-muted mb-4">Enter your verification code and new password</p>

        <Form onSubmit={handleSubmit}>
          {!email && (
            <div className="error-message text-center mb-3">
              <div className="alert alert-warning" role="alert">
                Email is required. Please start the password reset process from the login page.
              </div>
            </div>
          )}

          <div className="form-group">
            <Label for="code">Verification Code</Label>
            <Input
              type="text"
              name="code"
              id="code"
              placeholder="Enter verification code"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <Label for="newPassword">New Password</Label>
            <Input
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <Label for="confirmPassword">Confirm New Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && (
            <div className="error-message text-center mb-3">
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="btn-round"
            disabled={isLoading || !email}
          >
            {isLoading ? 'Resetting Password...' : 'Reset Password'}
          </button>

          <div className="create-account-link">
            <p className="mb-0">
              Remember your password?{' '}
              <Link to="/login">
                Sign in here
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
