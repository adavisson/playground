import React from 'react';

const SortForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input value={props.size} type="number" onChange={props.onChange} max="2000000"/>
      <input type="submit" value="Submit" />
    </form>
  );
}
 
export default SortForm;