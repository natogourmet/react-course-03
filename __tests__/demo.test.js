describe('Demo componentes tests', () => {
  test('should not fail', () => {
    const message = 'Hello World';
    const result = message.trim();
    expect(message).toBe(result);
  });
});
