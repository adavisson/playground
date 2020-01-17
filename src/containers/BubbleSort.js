import React, { useState, useEffect } from 'react';

const BubbleSort = (props) => {
  const [time,setTime] = useState(Date.now() * 0);
  const [status, setStatus] = useState("Not Started");

  useEffect(() => {
    if ((props.array.length !== 0) && (status !== "Sorting...")){
      setStatus("Sorting...");
      //run bubble sort function
      setStatus("Sorted", bubbleSort(props.array));
    }
  },[props.array])

  const bubbleSort = arr => {
    const t1 = Date.now();
    const n = arr.length

    for (let i = 0; i < n; i++){
      for (let j = 0; j < n-i-1; j++){
        if (arr[j] > arr[j+1]){
          const temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    console.log(arr);

    const t2 = Date.now();
    setTime(Math.floor((t2 - t1)));
    console.log(time);
    //setStatus("Sorted");
  }

  return (
    <div>
      <h5>BubbleSort</h5>
      <p>Status: {status}</p>
      <p>Elapsed Time: {time} milliseconds</p>
    </div>
  );
}
 
export default BubbleSort;