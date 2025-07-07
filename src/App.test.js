import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Gift Card form title', () => {
  render(<App />);
  expect(screen.getByText(/Gift Card/i)).toBeInTheDocument();
});

test('renders Download button', () => {
  render(<App />);
  expect(screen.getByText(/Download/i)).toBeInTheDocument();
});
