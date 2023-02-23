import React from 'react';

function Buttons(props) {
  const { color, text, onClick } = props;
  
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}
export default Buttons;