import PropTypes from 'prop-types';
import { useState } from 'react';

interface Props {
  value: number;
}

export const CounterApp = ({ value }: Props) => {
  const [count, setCount] = useState(value);

  const handleIncrement = (e: any) => {
    setCount((c) => c + 1);
  };

  const handleDecrement = (e: any) => {
    setCount((c) => c - 1);
  };

  const handleReset = (e: any) => {
    setCount(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={handleDecrement}>-1</button>
      <button aria-label="reset-btn" onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
