import { render, screen } from "@testing-library/react";
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
  
});