import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/components/logo";
import "../assets/scss/auth.scss";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement account creation logic
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // If we get here without an error, account creation was successful
      setError(''); // Clear any errors

      // Redirect to dashboard after a short delay
      setTimeout(() => {
        navigate('/account/dashboard', { replace: true });
      }, 500);

    } catch (error) {
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="card-login">
        <div className="logo-container">
          <Logo width={120} height={111} className="centered-logo" />
          <img 
            src="/certsherpa_text.svg" 
            alt="CertSherpa Text" 
            style={{ 
              width: 'auto', 
              maxWidth: '300px', 
              height: 'auto',
              marginTop: '20px',
              display: 'block',
              margin: '20px auto 0 auto'
            }}
          />
        </div>

        <h3 className="text-center mb-3">Create Account</h3>

        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
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
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>

          <div className="create-account-link">
            <p className="mb-0">
              Already have an account?{" "}
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

export default CreateAccount;
