import React from 'react';

const SortForm = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <label>Size of Array: </label>
      <input value={props.size} type="number" onChange={props.onChange} min="0" max="15000"/><br/>
      <input type="submit" value="Sort" />
    </form>
  );
}
 
export default SortForm;