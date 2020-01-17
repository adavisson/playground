import React, { useState, useEffect } from 'react';

const QuickSort = (props) => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("Not Started");

  useEffect(() => {
    if ((props.array.length !== 0) && (status !== "Sorting...")){
      setStatus("Sorting...");

      //run quick sort function
      setStatus("Sorted", quickSort(props.array));
    }
  },[props.array])

  const quickSort = randArr => {
    const partition = (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;
      let j = low;

      while (j < high){
        if (arr[j] < pivot){
          i++;
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        j++;
      }

      const temp = arr[i+1];
      arr[i+1] = arr[high];
      arr[high] = temp;

      return i + 1;
    }

    const sort = (arr, low, high) => {
      if (low < high){
        let pi = partition(arr, low, high);

        sort(arr, low, pi - 1);
        sort(arr, pi+1, high);
      }
    }
    
    const t1 = Date.now();
    sort(randArr, 0, randArr.length - 1);
    const t2 = Date.now();
    setTime(Math.floor((t2 - t1)));
  }

  return (
    <div className="border-dashed">
      <h5>QuickSort</h5>
      <p>Status: {status}</p>
      <p>Elapsed Time: {time} milliseconds</p>
    </div>
  );
}
 
export default QuickSort;