import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Tests on <FirstApp />', () => {
  
  test('should match with snapshot', () => {

    render( <FirstApp /> );
    
  });
  
});