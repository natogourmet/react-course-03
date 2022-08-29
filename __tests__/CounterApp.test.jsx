import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Tests on CounterApp', () => {
  
  const initValue = 100;
  
  test('should match with snapshot', () => {
    const { container } = render( <CounterApp value={initValue} /> );
    expect(container).toMatchSnapshot();
  });

  test('should contain initialValue', () => {
    render( <CounterApp value={initValue} /> );
    expect(screen.getByText(initValue.toString())).toBeTruthy();
  });
  
  test('should increase value', () => {
    render( <CounterApp value={initValue} /> );
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText((initValue + 1).toString())).toBeTruthy();
  });


  test('should decrease value', () => {
    render( <CounterApp value={initValue} /> );
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText((initValue - 1).toString())).toBeTruthy();
  });

  test('should reset value', () => {
    render( <CounterApp value={initValue} /> );
    fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByText('-1'));

    fireEvent.click(screen.getByRole('button', { name: 'reset-btn' }));
    // fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText((initValue).toString())).toBeTruthy();
  });


  
});