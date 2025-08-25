import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Dashboard() {
  return (
    <div className="content">
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
              <p className="card-category">Civil and Structural Engineering Licensure Exam Preparation</p>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6">
                  <h6>Getting Started</h6>
                  <ul>
                    <li>Choose your exam type (PE or SE)</li>
                    <li>Start with Breadth or Depth</li>
                  </ul>
                </Col>
                <Col md="6">
                  <h6>Your Next Steps</h6>
                  <ul>
                    <li>Complete profile</li>
                    <li>Set exam date</li>
                    <li>Create a study schedule</li>
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
