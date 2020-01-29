import React from 'react';
import PalindromeForm from '../components/PalindromeForm';

const desc = () => {
  return (
    <p>This component takes a word and checks to see if that word is a palindrome.</p>
  )
}

const Palindrome = () => {
  return (
    <div className="border">
      {desc()}
      <PalindromeForm />
    </div>
  );
}
 
export default Palindrome;