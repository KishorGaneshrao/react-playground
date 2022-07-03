import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lets get started! text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lets get started!/i);
  expect(linkElement).toBeInTheDocument();
});
