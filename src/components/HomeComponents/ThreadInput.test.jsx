import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ThreadInput from './ThreadInput';

describe('ThreadInput component', () => {
  it('should handle email typing correctly', async () => {
  // Arrange
    await act(async () => render(<ThreadInput avatar="avatar" addThread={() => {}} />));
    const titleInput = await screen.getByPlaceholderText('Judul');

    // Action
    await act(async () => userEvent.type(titleInput, 'Title test'));

    // Assert
    expect(titleInput).toHaveValue('Title test');
  });

  it('should handle title typing correctly', async () => {
  // Arrange
    await act(async () => render(<ThreadInput avatar="avatar" addThread={() => {}} />));
    const titleInput = await screen.getByPlaceholderText('Judul');

    // Action
    await act(async () => userEvent.type(titleInput, 'Title test'));

    // Assert
    expect(titleInput).toHaveValue('Title test');
  });

  it('should handle category typing correctly', async () => {
  // Arrange
    await act(async () => render(<ThreadInput avatar="avatar" addThread={() => {}} />));
    const categoryInput = await screen.getByPlaceholderText('Kategori');

    // Action
    await act(async () => userEvent.type(categoryInput, 'Category test'));

    // Assert
    expect(categoryInput).toHaveValue('Category test');
  });

  it('should handle content typing correctly', async () => {
  // Arrange
    await act(async () => render(<ThreadInput avatar="avatar" addThread={() => {}} />));
    const contentInput = await screen.getByPlaceholderText('Apa yang ingin kamu bagikan?');

    // Action
    await act(async () => userEvent.type(contentInput, 'Post test only'));

    // Assert
    expect(contentInput).toHaveValue('Post test only');
  });

  it('should invoke addThread function when the Blaast button is clicked', async () => {
    // Arrange
    const mockBlaast = jest.fn();
    await act(async () => render(<ThreadInput avatar="avatar" addThread={mockBlaast} />));
    const titleInput = await screen.getByPlaceholderText('Judul');
    await act(async () => userEvent.type(titleInput, 'Title test'));
    const categoryInput = await screen.getByPlaceholderText('Kategori');
    await act(async () => userEvent.type(categoryInput, 'Category test'));
    const contentInput = await screen.getByPlaceholderText('Apa yang ingin kamu bagikan?');
    await act(async () => userEvent.type(contentInput, 'Post test only'));
    const blaastButton = await screen.getByRole('button', { name: 'Blaast' });

    // Action
    await act(async () => { userEvent.click(blaastButton); });

    // Assert
    expect(mockBlaast).toBeCalledWith({
      title: 'Title test',
      category: 'Category test',
      body: 'Post test only'
    });
  });
});
