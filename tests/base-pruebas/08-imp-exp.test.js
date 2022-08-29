import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('tests on import export', () => {
  test('should return a hero by id', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  test('should return undifined if no hero found', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test('should return heroes from Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual([
      {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
      },
      {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel',
      },
    ]);
  });

  test('should return heroes from DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ]);
  });
});
