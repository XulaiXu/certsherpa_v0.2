import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button } from "reactstrap";

function PracticeTests() {
  const handleStartTest = () => {
    // Open mock exam in a new tab
    window.open('https://xulai.org/mock-exam', '_blank');
  };

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Practice Tests</CardTitle>
              <p className="card-category">Test your knowledge with our practice exams</p>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6">
                  <h6>Available Tests</h6>
                  <ul>
                    <li>PE Breadth Practice Test</li>
                    <li>PE Depth Practice Test</li>
                    <li>SE Breadth Practice Test</li>
                    <li>SE Depth Practice Test</li>
                  </ul>
                </Col>
                <Col md="6">
                  <h6>Test Instructions</h6>
                  <ul>
                    <li>Each test contains 40 questions</li>
                    <li>Time limit: 4 hours</li>
                    <li>Passing score: 70%</li>
                    <li>Results are saved automatically</li>
                  </ul>
                </Col>
              </Row>
              
              <Row className="mt-4">
                <Col md="12" className="text-center">
                  <Button
                    color="primary"
                    size="lg"
                    className="btn-round"
                    onClick={handleStartTest}
                  >
                    Start Test
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PracticeTests;
