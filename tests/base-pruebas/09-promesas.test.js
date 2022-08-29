import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Tests on promises', () => {
  test('should return a hero by id', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then( hero => {

      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      
      done();
    });
  });

  test('should throw an error', (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch( err => {
      
      done();
    });
  });
});
