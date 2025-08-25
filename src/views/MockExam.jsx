import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle, Button, Progress } from "reactstrap";
import "../assets/css/mock-exam.css";

function MockExam() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState(14400); // 4 hours in seconds
  const [answers, setAnswers] = useState({});

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < 40) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="mock-exam-container">
      <div className="exam-header">
        <h1>PE Breadth Practice Exam</h1>
        <div className="exam-info">
          <span>Question {currentQuestion} of 40</span>
          <span>Time Remaining: {Math.floor(timeLeft / 3600)}:{(timeLeft % 3600 / 60).toFixed(0).padStart(2, '0')}:{(timeLeft % 60).toFixed(0).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="exam-content">
        <Card>
          <CardBody>
            <h4>Question {currentQuestion}</h4>
            <p>This is a sample question for the PE Breadth exam. The actual exam will contain real engineering questions.</p>
            
            <div className="question-options">
              <div className="option">
                <input
                  type="radio"
                  id={`q${currentQuestion}a`}
                  name={`question${currentQuestion}`}
                  value="A"
                  checked={answers[currentQuestion] === 'A'}
                  onChange={() => handleAnswerSelect(currentQuestion, 'A')}
                />
                <label htmlFor={`q${currentQuestion}a`}>A) First option</label>
              </div>
              
              <div className="option">
                <input
                  type="radio"
                  id={`q${currentQuestion}b`}
                  name={`question${currentQuestion}`}
                  value="B"
                  checked={answers[currentQuestion] === 'B'}
                  onChange={() => handleAnswerSelect(currentQuestion, 'B')}
                />
                <label htmlFor={`q${currentQuestion}b`}>B) Second option</label>
              </div>
              
              <div className="option">
                <input
                  type="radio"
                  id={`q${currentQuestion}c`}
                  name={`question${currentQuestion}`}
                  value="C"
                  checked={answers[currentQuestion] === 'C'}
                  onChange={() => handleAnswerSelect(currentQuestion, 'C')}
                />
                <label htmlFor={`q${currentQuestion}c`}>C) Third option</label>
              </div>
              
              <div className="option">
                <input
                  type="radio"
                  id={`q${currentQuestion}d`}
                  name={`question${currentQuestion}`}
                  value="D"
                  checked={answers[currentQuestion] === 'D'}
                  onChange={() => handleAnswerSelect(currentQuestion, 'D')}
                />
                <label htmlFor={`q${currentQuestion}d`}>D) Fourth option</label>
              </div>
            </div>

            <div className="question-navigation">
              <Button
                color="secondary"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 1}
              >
                Previous
              </Button>
              
              <span className="question-progress">
                {Object.keys(answers).length} of 40 answered
              </span>
              
              <Button
                color="primary"
                onClick={handleNextQuestion}
                disabled={currentQuestion === 40}
              >
                Next
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default MockExam;
