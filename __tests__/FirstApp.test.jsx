import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests on <FirstApp />', () => {
  // test('should match with snapshot', () => {
  //   const name = 'Nato Gourmet';
  //   const { container } = render(<FirstApp title={name} />);
  //   expect(container).toMatchSnapshot();
  // });

  test('should show title as an h1', () => {
    const name = 'Nato Gourmet';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={name} />
    );

    expect(getByText(name)).toBeTruthy();

    expect(getByTestId('test-title').innerHTML).toContain(name);

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(name);
  });

  test('should show subtitle sent as props', () => {
    const subtitle = 'Software Engineer';
    const { getByText } = render(
    <FirstApp
      subtitle={subtitle}
    />);

    expect(getByText(subtitle)).toBeTruthy();
  });
});
