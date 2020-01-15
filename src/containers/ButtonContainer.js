import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';

const ButtonContainer = () => {
  const [value, setValue] = useState(0);

  const handleClick = e => {
    setValue(value + 1);
  }

  return (
    <div className="border">
      <p>This exhibits passing an event handler to a child component and then that child component updating the state of the parent component. The button is a child component, but it's value is held in the state of the parent component.</p> 
      <ButtonComponent onClick={handleClick} value={value}/>
    </div>
  );
}
 
export default ButtonContainer;