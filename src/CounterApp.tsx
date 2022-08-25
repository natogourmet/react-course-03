import PropTypes from 'prop-types';

interface Props {
  value: number;
}

export const CounterApp = ({ value }: Props) => {
  const handleIncrement = (e: any) => {
    value = 100;
    console.log(e);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <button onClick={handleIncrement}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
