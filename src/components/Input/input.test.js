import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  test('renders input with label', () => {
    render(<Input label="Your Name" value="" setter={() => {}} maxLength={100} />);
    expect(screen.getByText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('calls setter when input is typed in', () => {
    const mockSetter = jest.fn();
    render(<Input label="Email" value="" setter={mockSetter} maxLength={100} />);
    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });

    expect(mockSetter).toHaveBeenCalledTimes(1);
    expect(mockSetter).toHaveBeenCalledWith('test@example.com'); // Input will pass through word limiter
  });

  test('renders correct value in input', () => {
    render(<Input label="Message" value="Hello" setter={() => {}} maxLength={100} />);
    expect(screen.getByDisplayValue('Hello')).toBeInTheDocument();
  });
});
