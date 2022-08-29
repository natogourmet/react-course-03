import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Tests on 02-template-string', () => {

  test('should return Hi Nato', () => {
    const name = 'Nato';

    const message = getSaludo(name);
    
  });
  
  
});