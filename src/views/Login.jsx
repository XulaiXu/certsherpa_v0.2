import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/components/logo";
import "../assets/css/auth.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    // For now, just prevent form submission
  };

  return (
    <div className="auth-container">
      <Row className="justify-content-center">
        <Col lg="6" md="8" sm="12">
          <Card className="auth-card">
            <CardHeader className="text-center">
              <div className="text-center mb-3">
                <Logo width={80} height={74} className="mb-3" />
              </div>
              <CardTitle tag="h3">Welcome Back</CardTitle>
              <p className="card-category">Sign in to your CertSherpa account</p>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
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
                </FormGroup>
                <FormGroup>
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
                </FormGroup>
                <FormGroup className="text-center">
                  <Button color="primary" size="lg" block type="submit">
                    Sign In
                  </Button>
                </FormGroup>
                <div className="text-center">
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/create-account" className="auth-link">
                      Create one here
                    </Link>
                  </p>
                  <Link to="/forgot-password" className="auth-link">
                    Forgot your password?
                  </Link>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
