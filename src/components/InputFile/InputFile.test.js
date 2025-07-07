import React from 'react';
import { render } from '@testing-library/react';
import InputFile from './index';

test('renders file input element', () => {
  render(<InputFile handleImageUpload={() => {}} />);
  const fileInput = document.querySelector('input[type="file"]');
  expect(fileInput).toBeInTheDocument();
});
