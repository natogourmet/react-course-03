import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('functions tests', () => {
  test('should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(testUser);

  });

  test('should return object with the same name', () => {
    const testName = 'Nato';

    const user = getUsuarioActivo( testName );

    expect(user.username).toBe(testName);

  });
});
