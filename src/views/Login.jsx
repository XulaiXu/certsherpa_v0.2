import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/components/logo";
import "../assets/scss/auth.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for success message from password reset
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clear the state to prevent showing the message again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // TODO: Implement actual login logic here
      // For now, simulate a successful login
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to dashboard after successful login
      navigate("/account/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Navigate to reset password page with email pre-filled if available
    const emailParam = formData.email ? `?email=${encodeURIComponent(formData.email)}` : '';
    navigate(`/reset-password${emailParam}`);
  };

  return (
    <div className="login-page">
      <div className="card-login">
        <div className="logo-container">
          <Logo width={120} height={111} className="centered-logo" />
        </div>

        <h3 className="text-center mb-3">CertSherpa</h3>
        <p className="text-center text-muted mb-4">Log in account</p>

        <Form onSubmit={handleSubmit}>
          {successMessage && (
            <div className="success-message text-center mb-3">
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            </div>
          )}

          <div className="form-group">
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
