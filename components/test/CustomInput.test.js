import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CustomInput from './CustomInput';

//npm install --save-dev @testing-library/react @testing-library/user-event

describe('CustomInput', () => {
  test('renders the input field with the correct label', () => {
    const { control } = useForm();
    const name = 'email';
    const label = 'Email';
    const placeholder = 'Enter your email';

    render(
      <CustomInput control={control} name={name} label={label} placeholder={placeholder} />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);
    const labelElement = screen.getByText(label);

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  test('updates the input value correctly', () => {
    const { control } = useForm();
    const name = 'password';
    const label = 'Password';
    const placeholder = 'Enter your password';

    render(
      <CustomInput control={control} name={name} label={label} placeholder={placeholder} />
    );

    const inputElement = screen.getByPlaceholderText(placeholder);

    userEvent.type(inputElement, 'password123');

    expect(inputElement).toHaveValue('password123');
  });
});
