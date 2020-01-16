import React from 'react';

const ButtonComponent = (props) => {
  const buttonStyle = {
    width: '60px',
    height: '30px'
  }

  return (
    <button style={buttonStyle} onClick={props.onClick}>{props.value}</button>
  );
}
 
export default ButtonComponent; 