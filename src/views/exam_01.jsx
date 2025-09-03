import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Button, Progress } from "reactstrap";
import { fetchRandomQuestions } from '../utils/fetchRandomQuestions';
import "../assets/css/mock-exam.css";

export default function Exam_01() {
  const [qs, setQs] = useState([]);
  const [i, setI] = useState(0);
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    (async () => {
      try {
        setLoading(true);
        const questions = await fetchRandomQuestions(20);
        setQs(questions);
        setError(null);
      } catch (err) {
        console.error('Error fetching questions:', err);
        setError('Failed to load questions. Please try again.');
        // Set some sample questions for demo purposes
        setQs([
          {
            id: 'demo1',
            text: 'What is the capital of France?',
            answerA: 'London',
            answerB: 'Paris',
            answerC: 'Berlin',
            answerD: 'Madrid',
            correctAnswer: 'B'
          },
          {
            id: 'demo2',
            text: 'Which planet is known as the Red Planet?',
            answerA: 'Venus',
            answerB: 'Mars',
            answerC: 'Jupiter',
            answerD: 'Saturn',
            correctAnswer: 'B'
          }
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  
  if (loading) {
    return (
      <div className="mock-exam-container">
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
      </div>
    );
  }

  if (error) {
    return (
      <div className="mock-exam-container">
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
      </div>
    );
  }

  const cur = qs[i];
  const pick = (ch) => setAns(a => ({ ...a, [cur.id]: ch }));
  const next = () => (i + 1 < qs.length ? setI(i + 1) : setDone(true));
  const prev = () => (i > 0 ? setI(i - 1) : null);

  if (done) {
    const score = qs.reduce((s, q) => s + ((ans[q.id] || "") === q.correctAnswer ? 1 : 0), 0);
    const percentage = Math.round((score / qs.length) * 100);
    
    return (
      <div className="mock-exam-container">
        <div className="exam-header">
          <h1>Exam Results</h1>
          <div className="exam-info">
            <span>Score: {score} / {qs.length}</span>
            <span>Percentage: {percentage}%</span>
          </div>
        </div>

        <div className="exam-content">
          <Card>
            <CardBody>
              <div className="results-summary text-center mb-4">
                <h3 className={percentage >= 70 ? 'text-success' : percentage >= 50 ? 'text-warning' : 'text-danger'}>
                  {percentage >= 70 ? '🎉 Excellent!' : percentage >= 50 ? '📚 Good effort!' : '📖 Keep studying!'}
                </h3>
                <Progress 
                  value={percentage} 
                  color={percentage >= 70 ? 'success' : percentage >= 50 ? 'warning' : 'danger'}
                  className="mb-3"
                />
              </div>

              <h4>Question Review</h4>
              <div className="question-review">
                {qs.map((q, idx) => (
                  <div key={q.id} className={`review-item ${ans[q.id] === q.correctAnswer ? 'correct' : 'incorrect'}`}>
                    <div className="question-number">Q{idx + 1}</div>
                    <div className="question-content">
                      <div className="question-text fw-bold">{q.text}</div>
                      <div className="answer-comparison">
                        <span className="your-answer">Your answer: <strong>{ans[q.id] ?? "—"}</strong></span>
                        <span className="correct-answer">Correct: <strong>{q.correctAnswer}</strong></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <Button color="primary" onClick={() => window.location.reload()}>
                  Take Another Exam
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="mock-exam-container">
      <div className="exam-header">
        <h1>Practice Exam</h1>
        <div className="exam-info">
          <span>Question {i + 1} of {qs.length}</span>
          <span>Progress: {Math.round(((i + 1) / qs.length) * 100)}%</span>
        </div>
      </div>

      <div className="exam-content">
        <Card>
          <CardBody>
            <h4>Question {i + 1}</h4>
            <p className="question-text">{cur.text}</p>
            
            <div className="question-options">
              {['A','B','C','D'].map(ch => (
                <div 
                  key={ch} 
                  className={`option ${ans[cur.id] === ch ? 'selected' : ''}`}
                  onClick={() => pick(ch)}
                >
                  <input
                    type="radio"
                    id={`q${cur.id}${ch}`}
                    name={`question${cur.id}`}
                    value={ch}
                    checked={ans[cur.id] === ch}
                    onChange={() => pick(ch)}
                  />
                  <label htmlFor={`q${cur.id}${ch}`}>
                    {ch}) {cur[`answer${ch}`]}
                  </label>
                </div>
              ))}
            </div>

            <div className="question-navigation">
              <Button
                color="secondary"
                onClick={prev}
                disabled={i === 0}
              >
                Previous
              </Button>
              
              <span className="question-progress">
                {Object.keys(ans).length} of {qs.length} answered
              </span>
              
              <Button
                color="primary"
                onClick={next}
              >
                {i + 1 === qs.length ? 'Finish Exam' : 'Next'}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
