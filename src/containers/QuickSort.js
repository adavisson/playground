import React, { useState } from 'react';

const QuickSort = () => {
  const [time, setTime] = useState(0);
  
  return (
    <div>
      <h5>QuickSort</h5>
      <p>Elapsed Time: {time}</p>
    </div>
  );
}
 
export default QuickSort;