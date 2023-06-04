import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DetailThreadCommentInput from './DetailThreadCommentInput';

describe('DetailThreadCommentInput component', () => {
  it('should handle content typing correctly', async () => {
  // Arrange
    await act(async () => render(<DetailThreadCommentInput
      addComment={() => {}}
      threadId="thread-id"
      authUser={{
        id: 'john_doe',
        avatar: 'https://generated-image-url.jpg',
        email: 'john@example.com',
        name: 'John Doe',
      }}
    />));
    const contentInput = await screen.getByPlaceholderText('Berikan komentarmu');

    // Action
    await act(async () => userEvent.click(contentInput));
    await act(async () => userEvent.keyboard('Content Input test'));

    // Assert
    expect(contentInput.textContent).toBe('Content Input test');
  });

  it('should invoke addNewComment function when the Blaast button is clicked', async () => {
    // Arrange
    const mockBlaast = jest.fn();
    const threadId = 'thread-1';
    await act(async () => render(<DetailThreadCommentInput
      addComment={mockBlaast}
      threadId={threadId}
      authUser={{
        id: 'john_doe',
        avatar: 'https://generated-image-url.jpg',
        email: 'john@example.com',
        name: 'John Doe',
      }}
    />));

    const contentInput = await screen.getByPlaceholderText('Berikan komentarmu');
    await act(async () => userEvent.click(contentInput));
    await act(async () => userEvent.keyboard('Content Input test'));
    const blaastButton = await screen.getByRole('button', { name: 'Blaast' });

    // Action
    await act(async () => { userEvent.click(blaastButton); });

    // Assert
    expect(mockBlaast).toBeCalledWith({
      content: 'Content Input test',
      id: threadId
    });
  });
});
