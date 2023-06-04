import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom';

describe('LoginForm component', () => {
  it('should handle email typing correctly', async () => {
  // Arrange
    await act(async () => render(<LoginForm login={() => {}} />));
    const emailInput = await screen.getByPlaceholderText('name@domain.com');

    // Action
    await act(async () => userEvent.type(emailInput, 'agas@gmail.com'));

    // Assert
    expect(emailInput).toHaveValue('agas@gmail.com');
  });

  it('should handler password typing correctly', async () => {
    // Arrange
    await act(async () => render(<LoginForm login={() => {}} />));
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await act(async () => userEvent.type(passwordInput, 'testthepassword'));

    // Assert
    expect(passwordInput).toHaveValue('testthepassword');
  });

  it('should invoke login function when the login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    await act(async () => render(<LoginForm login={mockLogin} />));
    const emailInput = await screen.getByPlaceholderText('name@domain.com');
    await act(async () => userEvent.type(emailInput, 'agas@gmail.com'));
    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => userEvent.type(passwordInput, 'testthepassword'));
    const loginButton = await screen.getByRole('button', { name: 'Log in to your account' });

    // Action
    await act(async () => { userEvent.click(loginButton); });

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'agas@gmail.com',
      password: 'testthepassword'
    });
  });
});
