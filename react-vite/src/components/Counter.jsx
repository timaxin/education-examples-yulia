import { useState } from 'react'
import Button from './Button'
import ResultInput from './ResultInput'

function Counter({ min, max }) {
    const [count, setCount] = useState(min);
    const [inputValue, setInputValue] = useState(min);
  
    const validateAndSetCount = (value) => {
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue >= min && numValue <= max) {
        setCount(numValue);
        setInputValue(numValue);
      } else if (value === '') {
        setInputValue('');
      }
    };
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      if (value === '') {
        setInputValue('');
        return;
      }
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue >= min && numValue <= max) {
        setInputValue(value);
      }
    };
  
    const handleInputBlur = () => {
      if (inputValue === '') {
        setInputValue(count);
      } else {
        validateAndSetCount(inputValue);
      }
    };
  
    const onClickPlus = () => {
      if (count < max) {
        const newCount = count + 1;
        setCount(newCount);
        setInputValue(newCount);
      }
    };
  
    const onClickMinus = () => {
      if (count > min) {
        const newCount = count - 1;
        setCount(newCount);
        setInputValue(newCount);
      }
    };
  
    const onClickReset = () => {
      setCount(min);
      setInputValue(min);
    };
  
    const onClickPlusTen = () => {
      const newCount = Math.min(count + 10, max);
      setCount(newCount);
      setInputValue(newCount);
    };
  
    const onClickMinusTen = () => {
      const newCount = Math.max(count - 10, min);
      setCount(newCount);
      setInputValue(newCount);
    };
  
    return (
      <div className="App">
        <div>
          <h1>Counter:</h1>
          <br />
          <br />
          <Button onClick={onClickMinus} className="minus" disabled={count <= min}>
            -
          </Button>
          <ResultInput
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="result-input"
            min={min}
            max={max}
          />
          <Button onClick={onClickPlus} className="plus" disabled={count >= max}>
            +
          </Button>
          <br />
          <br />
          <Button onClick={onClickReset} className="reset">
            Reset
          </Button>
          <br />
          <br />
          <Button
            onClick={onClickMinusTen}
            className="minus-ten"
            disabled={count - 10 < min}
          >
            -10
          </Button>
          <Button
            onClick={onClickPlusTen}
            className="plus-ten"
            disabled={count + 10 > max}
          >
            +10
          </Button>
        </div>
      </div>
    );
  }

  export default Counter;