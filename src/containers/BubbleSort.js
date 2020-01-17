import React, { useState } from 'react';

const BubbleSort = (props) => {
  const [time,setTime] = useState(0);

  return (
    <div>
      <h5>BubbleSort</h5>
      <p>Elapsed Time: {time}</p>
    </div>
  );
}
 
export default BubbleSort;