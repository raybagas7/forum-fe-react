import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SignupForm from './SignupForm';

describe('SignupForm component', () => {
  it('should handle name typing correctly', async () => {
  // Arrange
    await act(async () => render(<SignupForm signup={() => {}} />));
    const nameInput = await screen.getByPlaceholderText('John Doe');

    // Action
    await act(async () => userEvent.type(nameInput, 'Agas'));

    // Assert
    expect(nameInput).toHaveValue('Agas');
  });

  it('should handle email typing correctly', async () => {
  // Arrange
    await act(async () => render(<SignupForm signup={() => {}} />));
    const emailInput = await screen.getByPlaceholderText('name@domain.com');

    // Action
    await act(async () => userEvent.type(emailInput, 'agas@gmail.com'));

    // Assert
    expect(emailInput).toHaveValue('agas@gmail.com');
  });

  it('should handler password typing correctly', async () => {
    // Arrange
    await act(async () => render(<SignupForm signup={() => {}} />));
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await act(async () => userEvent.type(passwordInput, 'testthepassword'));

    // Assert
    expect(passwordInput).toHaveValue('testthepassword');
  });

  it('should invoke singup function when the singup button is clicked', async () => {
    // Arrange
    const mockSignup = jest.fn();
    await act(async () => render(<SignupForm signup={mockSignup} />));
    const nameInput = await screen.getByPlaceholderText('John Doe');
    await act(async () => userEvent.type(nameInput, 'Agas'));
    const emailInput = await screen.getByPlaceholderText('name@domain.com');
    await act(async () => userEvent.type(emailInput, 'agas@gmail.com'));
    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => userEvent.type(passwordInput, 'testthepassword'));
    const loginButton = await screen.getByRole('button', { name: 'Sign up to Blaast' });

    // Action
    await act(async () => { userEvent.click(loginButton); });

    // Assert
    expect(mockSignup).toBeCalledWith({
      name: 'Agas',
      email: 'agas@gmail.com',
      password: 'testthepassword'
    });
  });
});
