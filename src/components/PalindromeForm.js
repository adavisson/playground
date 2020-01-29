import React from 'react';

const PalindromeForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Enter a word.</label><br/>
      <input type="text" value={props.palWord} onChange={props.handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
}
 
export default PalindromeForm;