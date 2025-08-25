/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Copyright 2023
* Licensed under MIT

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/components/logo";
import "../assets/css/dashboard.css";
import "./icons.css";

function Dashboard() {
  return (
    <div className="content">
      {/* Navigation Header */}
      <div className="dashboard-nav mb-4">
        <Row className="align-items-center">
          <Col md="6">
            <div className="d-flex align-items-center">
              <Logo width={40} height={37} className="me-3" />
              <h2 className="mb-0">CertSherpa Dashboard</h2>
            </div>
          </Col>
          <Col md="6" className="text-right">
            <Link to="/login">
              <Button color="secondary" size="sm" className="mr-2">
                Sign Out
              </Button>
            </Link>
          </Col>
        </Row>
      </div>

      <Row>
        <Col lg="3" md="6" sm="6">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col md="4">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-book-bookmark text-warning" />
                  </div>
                </Col>
                <Col md="8">
                  <div className="numbers">
                    <p className="card-category">PE Breadth Progress</p>
                    <CardTitle tag="p">0%</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6" sm="6">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col md="4">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-ruler-pencil text-success" />
                  </div>
                </Col>
                <Col md="8">
                  <div className="numbers">
                    <p className="card-category">PE Depth Progress</p>
                    <CardTitle tag="p">0%</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6" sm="6">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col md="4">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-paper text-danger" />
                  </div>
                </Col>
                <Col md="8">
                  <div className="numbers">
                    <p className="card-category">SE Breadth Progress</p>
                    <CardTitle tag="p">0%</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6" sm="6">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col md="4">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-atom text-primary" />
                  </div>
                </Col>
                <Col md="8">
                  <div className="numbers">
                    <p className="card-category">SE Depth Progress</p>
                    <CardTitle tag="p">0%</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Welcome to CertSherpa</CardTitle>
              <p className="card-category">Your Engineering Exam Preparation Hub</p>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6">
                  <h6>Getting Started</h6>
                  <ul>
                    <li>Choose your exam type (PE or SE)</li>
                    <li>Start with breadth topics for a solid foundation</li>
                    <li>Track your progress in each section</li>
                    <li>Take practice quizzes to test your knowledge</li>
                  </ul>
                </Col>
                <Col md="6">
                  <h6>Your Next Steps</h6>
                  <ul>
                    <li>Complete your profile</li>
                    <li>Set your exam date</li>
                    <li>Create a study schedule</li>
                    <li>Join study groups</li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
