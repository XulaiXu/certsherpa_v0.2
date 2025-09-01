import React, { useEffect, useState } from 'react';
import { fetchRandomQuestions } from '../utils/fetchRandomQuestions';

export default function Exam_01() {
  const [qs, setQs] = useState([]);
  const [i, setI] = useState(0);
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => { (async () => setQs(await fetchRandomQuestions(20)))(); }, []);
  if (!qs.length) return <div className="p-4">Loading…</div>;

  const cur = qs[i];
  const pick = (ch) => setAns(a => ({ ...a, [cur.id]: ch }));
  const next = () => (i + 1 < qs.length ? setI(i + 1) : setDone(true));
  const prev = () => (i > 0 ? setI(i - 1) : null);

  if (done) {
    const score = qs.reduce((s, q) => s + ((ans[q.id] || "") === q.correctAnswer ? 1 : 0), 0);
    return (
      <div className="p-4">
        <h2 className="mb-3">Results</h2>
        <div className="mb-3">Score: {score} / {qs.length}</div>
        <ol className="pl-3">
          {qs.map(q => (
            <li key={q.id} className="mb-2">
              <div className="fw-bold">{q.text}</div>
              <div>Your answer: {ans[q.id] ?? "—"} | Correct: {q.correctAnswer}</div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="text-muted mb-2">Question {i + 1} / {qs.length}</div>
      <h4 className="mb-3">{cur.text}</h4>

      {['A','B','C','D'].map(ch => (
        <button
          key={ch}
          onClick={() => pick(ch)}
          className={`btn btn-outline-secondary w-100 text-start mb-2 ${ans[cur.id]===ch ? 'active' : ''}`}
        >
          <strong className="me-2">{ch}.</strong>{cur[`answer${ch}`]}
        </button>
        ))}

      <div className="d-flex justify-content-between pt-2">
        <button className="btn btn-light" onClick={prev} disabled={i===0}>Back</button>
        <button className="btn btn-primary" onClick={next}>{i+1===qs.length ? 'Finish' : 'Next'}</button>
      </div>
    </div>
  );
}
