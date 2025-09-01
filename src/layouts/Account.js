import { Routes, Route } from 'react-router-dom';
import Exam_01 from 'views/exam_01';

export default function AccountLayout() {
  return (
    <>
      {/* header/sidebar … */}
      <Routes>
        {/* other account routes */}
        <Route path="exam_01" element={<Exam_01 />} />
      </Routes>
    </>
  );
}
