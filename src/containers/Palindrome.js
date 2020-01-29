import React, { useState } from 'react';
import PalindromeForm from '../components/PalindromeForm';

const Palindrome = () => {
  const [palWord, setPalWord] = useState("");
  const [result, setResult] = useState("");

  const desc = () => {
    return (
      <p>This component takes a word and checks to see if that word is a palindrome.</p>
    )
  }

  const handleChange = (e) => {
    setPalWord(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(palTest(palWord));
  }

  const palTest = (input) => {
    const arr = input.split("");

    if (arr.length <= 1) {
      return `${palWord} is a Palindrome.`
    }

    const firstLetter = arr.shift();
    const lastLetter = arr.pop();

    if (firstLetter.toLowerCase() == lastLetter.toLowerCase()){
      return palTest(arr.join(""));
    } else {
      return `${palWord} is not a Palindrome.`
    }
  }

  return (
    <div className="border">
      {desc()}
      <PalindromeForm palWord={palWord} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <p>{result}</p>
    </div>
  );
}
 
export default Palindrome;