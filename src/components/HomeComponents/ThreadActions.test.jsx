import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThreadActions from './ThreadActions';

describe('ThreadActions component', () => {
  it('should show filled like if the upVotesBy included the userId', async () => {
  // Arrange
    await act(async () => render(<ThreadActions
      totalComments={5}
      threadId="thread-1"
      commentId={null}
      upVotesBy={['user-1']}
      downVotesBy={[]}
      onUpVote={() => {}}
      onDownVote={() => {}}
      userId="user-1"
    />));

    const filledLikeButton = await screen.getByTestId('fill-like');

    // Assert
    expect(filledLikeButton).toBeTruthy();
  });

  it('should show outline like if the upVotesBy not included the userId', async () => {
  // Arrange
    await act(async () => render(<ThreadActions
      totalComments={5}
      threadId="thread-1"
      commentId={null}
      upVotesBy={[]}
      downVotesBy={[]}
      onUpVote={() => {}}
      onDownVote={() => {}}
      userId="user-1"
    />));
    const outlinedLikeButton = await screen.getByTestId('outline-like');
    expect(outlinedLikeButton).toBeTruthy();
  });

  it('should show filled dislike if the downVotesBy included the userId', async () => {
  // Arrange
    await act(async () => render(<ThreadActions
      totalComments={5}
      threadId="thread-1"
      commentId={null}
      upVotesBy={[]}
      downVotesBy={['user-1']}
      onUpVote={() => {}}
      onDownVote={() => {}}
      userId="user-1"
    />));

    const filledDislikeButton = await screen.getByTestId('fill-dislike');

    // Assert
    expect(filledDislikeButton).toBeTruthy();
  });

  it('should show outline dislike if the downVotesBy not included the userId', async () => {
  // Arrange
    await act(async () => render(<ThreadActions
      totalComments={5}
      threadId="thread-1"
      commentId={null}
      upVotesBy={[]}
      downVotesBy={[]}
      onUpVote={() => {}}
      onDownVote={() => {}}
      userId="user-1"
    />));
    const outlinedDislikeButton = await screen.getByTestId('outline-dislike');

    // Assert
    expect(outlinedDislikeButton).toBeTruthy();
  });

  it('should invoke onUpVote function for thread vote that only contain threadId and upVotesBy as an argument', async () => {
    const mockOnUpVote = jest.fn();

    await act(async () => render(<ThreadActions
      totalComments={5}
      threadId="thread-1"
      commentId={null}
      upVotesBy={[]}
      downVotesBy={[]}
      onUpVote={mockOnUpVote}
      onDownVote={() => {}}
      userId="user-1"
    />));
  });
});
