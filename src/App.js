import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const operators = ['+', '-', '*', '/'];

  const handleButtonClick = (buttonText) => {
    const lastChar = input.slice(-1);

    if (operators.includes(buttonText) && operators.includes(lastChar)) {
      return;
    }

    setInput((prevInput) => prevInput + buttonText);
  };

  const calculateResult = () => {
    let result;

    try {
      result = eval(input);
    } catch (error) {
      result = 'Ошибка в выражении';
    }

    setOutput(result);
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="container">
      <div className="calculator">
        <div id="display">
          <input type="text" id="input" value={input} readOnly />
          <input type="text" id="output" value={output} readOnly />
        </div>
        <div id="buttons">
          <button className="number" onClick={() => handleButtonClick('1')}>
            1
          </button>
          <button className="number" onClick={() => handleButtonClick('2')}>
            2
          </button>
          <button className="number" onClick={() => handleButtonClick('3')}>
            3
          </button>
          <button className="number" onClick={() => handleButtonClick('4')}>
            4
          </button>
          <button className="number" onClick={() => handleButtonClick('5')}>
            5
          </button>
          <button className="number" onClick={() => handleButtonClick('6')}>
            6
          </button>
          <button className="number" onClick={() => handleButtonClick('7')}>
            7
          </button>
          <button className="number" onClick={() => handleButtonClick('8')}>
            8
          </button>
          <button className="number" onClick={() => handleButtonClick('9')}>
            9
          </button>
          <button className="number" onClick={() => handleButtonClick('+')}>
            +
          </button>
          <button className="number" onClick={() => handleButtonClick('-')}>
            -
          </button>
          <button className="number" onClick={() => handleButtonClick('*')}>
            *
          </button>
          <button className="number" onClick={() => handleButtonClick('/')}>
            /
          </button>
          <button id="equals" onClick={calculateResult}>
            =
          </button>
          <button id="clear" onClick={clearInput}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
