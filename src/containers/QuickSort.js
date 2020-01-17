import React, { useState, useEffect } from 'react';

const QuickSort = (props) => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("Not Started");

  return (
    <div>
      <h5>QuickSort</h5>
      <p>Status: {status}</p>
      <p>Elapsed Time: {time} seconds</p>
    </div>
  );
}
 
export default QuickSort;