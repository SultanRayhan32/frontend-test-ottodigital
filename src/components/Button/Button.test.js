import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

test('renders Download button and shows validation if image not uploaded', () => {
  const fakeRef = { current: document.createElement('canvas') };

  render(<Button canvasRef={fakeRef} imageFile={null} />);

  const button = screen.getByRole('button', { name: /Download/i });
  fireEvent.click(button);

  const error = screen.getByText(/Please Upload file/i);
  expect(error).toBeInTheDocument();
});
