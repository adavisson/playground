import React, { useState } from 'react';
import PalindromeForm from '../components/PalindromeForm';

const Palindrome = () => {
  const [palWord, setPalWord] = useState("");

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
    const result = palTest(palWord);
    console.log(result);
  }

  const palTest = (input) => {
    console.log(input);
    console.log(palWord)
    const arr = input.split("");

    if (arr.length <= 1) {
      console.log("success");
      return `${palWord} is a Palindrome.`
    }

    const firstLetter = arr.shift();
    const lastLetter = arr.pop();

    if (firstLetter.toLowerCase() == lastLetter.toLowerCase()){
      palTest(arr.join(""));
    } else {
      console.log("failure");
      return `${palWord} is not a Palindrome.`
    }
  }

  return (
    <div className="border">
      {desc()}
      <PalindromeForm palWord={palWord} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
}
 
export default Palindrome;