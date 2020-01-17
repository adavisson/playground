import React, { useState, useEffect } from 'react';
import SortForm from '../components/SortForm';
import BubbleSort from './BubbleSort';
import QuickSort from './QuickSort';

const SortContainer = () => {
  const [size,setSize] = useState(0);
  const [randArr, setRandArr] = useState([]);
  const [randArr2, setRandArr2] = useState([]);

  const desc = () => {
    return(
      <p>This component passes a randomized array of values between 0 and 10,000 into a bubble sort function and a quicksort function to compere the times it takes.</p>
    )
  }

  const sizeChange = e => {
    setSize(e.target.value);
  }

  const formSubmit = e => {
    e.preventDefault();

    const arr = []
    for(let i = 0; i < size; i++){
      arr.push(Math.floor(Math.random() * 10000))
    }
    setRandArr(arr);
    setRandArr2(arr);
  }

  return (
    <div className="border">
      {desc()}
      <SortForm size={size} onChange={sizeChange} onSubmit={formSubmit} />
      <div className="sort-container">
        <BubbleSort array={randArr} />
        <QuickSort array={randArr2} />
      </div>
    </div>
  );
}
 
export default SortContainer;