import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/components/logo";
import "../assets/scss/auth.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for success message in location state
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clear the message from location state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // TODO: Implement login logic
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // If we get here without an error, login was successful
      setError(''); // Clear any errors

      // Redirect to dashboard after a short delay
      setTimeout(() => {
        navigate('/account/dashboard', { replace: true });
      }, 500);

    } catch (error) {
      setError(error.message || 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setError('Please enter your email address');
      return;
    }
    try {
      // TODO: Implement password reset logic
      setError('Password reset instructions have been sent to your email');
    } catch (err) {
      setError(err.message || 'Failed to initiate password reset');
    }
  };

  return (
    <div className="login-page">
      <div className="card-login">
        <div className="logo-container">
          <Logo width={240} height={222} className="centered-logo" />
        </div>

        <h3 className="text-center mb-3">Welcome Back</h3>
        <p className="text-center text-muted mb-4">Sign in to your CertSherpa account</p>

        <Form onSubmit={handleSubmit}>
          {successMessage && (
            <div className="success-message text-center mb-3">
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            </div>
          )}

          <div className="form-group">
            <Label for="email">Email Address</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
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
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          <div className="text-center mt-3">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="forgot-password-btn"
            >
              Forgot Password?
            </button>
          </div>

          <div className="create-account-link">
            <p className="mb-0">
              Don't have an account?{" "}
              <Link to="/create-account">
                Create one here
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
