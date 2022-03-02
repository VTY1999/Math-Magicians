import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('should contain p element ', () => {
  render(<Home />);
  const element = screen.getByRole('heading', { name: /Welcome to our page/ });
  expect(element).toMatchSnapshot();
});
