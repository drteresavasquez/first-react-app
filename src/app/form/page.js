import React from 'react';
import FactForm from '@/components/Form';

// const sampleData = {
//   firebaseKey: '-O70DyYef1Xoqrgbxh4l',
//   name: 'Dr. T',
//   text: 'Sky is blue',
//   userId: 'CYuinPH5fONpEBNkWsrvng9ASQB2',
// };

export default function FormPage() {
  return (
    <div className="container">
      <h2>CREATE A FACT</h2>
      <FactForm />
    </div>
  );
}
