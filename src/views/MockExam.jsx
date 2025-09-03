import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Button, Progress } from "reactstrap";
import { fetchMockQuestions } from "../utils/fetchMockQuestions";
import "../assets/css/mock-exam.css";

function MockExam() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState(14400); // 4 hours in seconds
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      let fetchedQuestions = [];
      try {
        console.log('🔍 MockExam: Starting to load questions...');
        setLoading(true);
        fetchedQuestions = await fetchMockQuestions(10);
        console.log('🔍 MockExam: Received questions:', fetchedQuestions?.length || 0);
        console.log('🔍 MockExam: First question:', fetchedQuestions?.[0]);
        setQuestions(fetchedQuestions);
        setError(null);
      } catch (err) {
        console.error('🔍 MockExam: Error loading questions:', err);
        setError('Failed to load questions. Using demo questions.');
      } finally {
        setLoading(false);
        console.log('🔍 MockExam: Loading complete. Questions count:', fetchedQuestions?.length || 0);
      }
    };

    loadQuestions();
  }, []);

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
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
          <span>Question {currentQuestion} of {questions.length || 10}</span>
          <span>Time Remaining: {Math.floor(timeLeft / 3600)}:{(timeLeft % 3600 / 60).toFixed(0).padStart(2, '0')}:{(timeLeft % 60).toFixed(0).padStart(2, '0')}</span>
        </div>
      </div>

      {loading ? (
        <div className="exam-content">
          <Card>
            <CardBody className="text-center">
              <div className="loading-spinner">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading questions...</p>
              </div>
            </CardBody>
          </Card>
        </div>
      ) : error ? (
        <div className="exam-content">
          <Card>
            <CardBody className="text-center">
              <div className="alert alert-warning">
                <h4>Demo Mode</h4>
                <p>{error}</p>
                <p>Using sample questions for demonstration.</p>
              </div>
            </CardBody>
          </Card>
        </div>
      ) : questions.length > 0 ? (
        <div className="exam-content">
          <Card>
            <CardBody>
              <h4>Question {currentQuestion}</h4>
              <p className="question-text">{questions[currentQuestion - 1]?.text || 'Question not available'}</p>
              
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
                  <label htmlFor={`q${currentQuestion}a`}>A) {questions[currentQuestion - 1]?.answerA || 'Option A'}</label>
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
                  <label htmlFor={`q${currentQuestion}b`}>B) {questions[currentQuestion - 1]?.answerB || 'Option B'}</label>
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
                  <label htmlFor={`q${currentQuestion}c`}>C) {questions[currentQuestion - 1]?.answerC || 'Option C'}</label>
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
                  <label htmlFor={`q${currentQuestion}d`}>D) {questions[currentQuestion - 1]?.answerD || 'Option D'}</label>
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
                {Object.keys(answers).length} of {questions.length} answered
              </span>
              
              <Button
                color="primary"
                onClick={handleNextQuestion}
                disabled={currentQuestion === questions.length}
              >
                Next
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
      ) : (
        <div className="exam-content">
          <Card>
            <CardBody className="text-center">
              <div className="alert alert-danger">
                <h4>No Questions Available</h4>
                <p>Unable to load questions. Please try again later.</p>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
}

export default MockExam;
