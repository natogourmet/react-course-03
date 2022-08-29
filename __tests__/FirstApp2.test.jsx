import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests on <FirstApp />', () => {

  const title = 'Here is the title';
  const subtitle = 'Here is the subtitle';

  test('should match with snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show message with title', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should show title in h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });

  test('should show subtitle in h2', () => {
    render(<FirstApp subtitle={subtitle} />);
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(subtitle);
  });
});
