import React, { useState } from 'react';
import SortForm from '../components/SortForm';

const SortContainer = () => {
  const [size,setSize] = useState(0);
  const [randArr, setRandArr] = useState([]);

  const desc = () => {
    return(
      <p>This component passes a randomized array of values between 0 and 10,000 into a bubble sort function and a quicksort function to compere the times it takes.</p>
    )
  }

  const sizeChange = e => {
    setSize(e.target.value);
  }

  const formSubmit = e => {
    const arr = []
    for(let i=0; i<randArr.length(); i++){
      arr.push(Math.floor(Math.random() * 10000))
    }
    setRandArr(arr);
  }

  return (
    <div className="border">
      {desc()}
      <SortForm size={size} onChange={sizeChange}/>
    </div>
  );
}
 
export default SortContainer;