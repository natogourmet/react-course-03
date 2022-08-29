import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Tests on async await', () => {
  
  test('should return urlImage', async () => {

    const url = await getImagen();
    console.log(url);    

    expect( typeof url ).toBe('string');
  });
  
});