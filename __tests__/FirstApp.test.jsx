import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests on <FirstApp />', () => {
  test('should match with snapshot', () => {
    const name = 'Nato Gourmet';
    const { container } = render(<FirstApp title={name} />);
    expect(container).toMatchSnapshot();
  });

  test('should show title as an h1', () => {
    const name = 'Nato Gourmet';
    const { container, getByText } = render(<FirstApp title={name} />);

    expect(getByText(name)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(name);

    
  });
});
