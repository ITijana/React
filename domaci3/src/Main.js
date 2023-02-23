import React, { useState } from 'react';
import Buttons from './Buttons';

function Main() {
  const [mainText, setMainText] = useState('');
  const handleButtonClick = (text) => {
    setMainText(`Setting text from ${text}`);
  };

  return (
    <div>
      <Buttons
        color='red'
        text='red'
        onClick={() => handleButtonClick('red')}
      />
      <Buttons
        color='green'
        text='green'
        onClick={() => handleButtonClick('green')}
      />
      <Buttons
        color='blue'
        text='blue'
        onClick={() => handleButtonClick('blue')}
      />
      <h1>{mainText}</h1>
    </div>
  );
}
export default Main;