import detailThreadReducer from './reducer';

describe('detailThreadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return detailed Thread data when given by RECEIVE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        detailThread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.detailThread);
  });

  it('should return cleared detailed Thread when given by CLEAR_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'CLEAR_THREAD_DETAIL',
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(null);
  });

  it('should return detailed thread with new comment when given by ADD_COMMENT action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comment: {
          id: 'comment-2',
          content: 'Ini adalah komentar kedua',
          createdAt: '2021-06-21T07:00:01.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment].concat(initialState.comments),
    });
  });

  it('should return the detailed thread with 1 upVoteBy when given by UP_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };

    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({ ...initialState, upVotesBy: ['users-1'] });
  });

  it('should return the detailed thread with neutralized upVoteBy when given by UP_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: ['users-1'],
      downVotesBy: [],
      comments: [],
    };

    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({ ...initialState, upVotesBy: [] });
  });

  it('should return the detailed thread with 1 downVotesBy when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };

    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({ ...initialState, downVotesBy: ['users-1'] });
  });

  it('should return the detailed thread with neutralized downVoteBy when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: ['users-1'],
      comments: [],
    };

    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({ ...initialState, downVotesBy: [] });
  });

  it('should return the detailed thread comment with +1 upVoteBy when given by UP_VOTE_COMMENT_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
        {
          id: 'comment-2',
          content: 'Ini adalah komentar kedua',
          createdAt: '2021-06-21T07:00:01.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      ],
    };

    const action = {
      type: 'UP_VOTE_COMMENT_DETAIL',
      payload: {
        userId: 'users-1',
        commentId: 'comment-1',
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        { ...initialState.comments[0], upVotesBy: ['users-1'] },
        { ...initialState.comments[1] },
      ],
    });
  });

  it('should return the detailed thread comment with neutralized upVoteBy when given by UP_VOTE_COMMENT_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: ['users-1'],
          downVotesBy: [],
        },
        {
          id: 'comment-2',
          content: 'Ini adalah komentar kedua',
          createdAt: '2021-06-21T07:00:01.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      ],
    };

    const action = {
      type: 'UP_VOTE_COMMENT_DETAIL',
      payload: {
        userId: 'users-1',
        commentId: 'comment-1',
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        { ...initialState.comments[0], upVotesBy: [] },
        { ...initialState.comments[1] },
      ],
    });
  });

  it('should return the detailed thread comment with +1 downVoteBy when given by DOWN_VOTE_COMMENT_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
        {
          id: 'comment-2',
          content: 'Ini adalah komentar kedua',
          createdAt: '2021-06-21T07:00:01.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      ],
    };

    const action = {
      type: 'DOWN_VOTE_COMMENT_DETAIL',
      payload: {
        userId: 'users-1',
        commentId: 'comment-1',
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        { ...initialState.comments[0], downVotesBy: ['users-1'] },
        { ...initialState.comments[1] },
      ],
    });
  });

  it('should return the detailed thread comment with neutralized upVoteBy when given by DOWN_VOTE_COMMENT_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: ['users-1'],
        },
        {
          id: 'comment-2',
          content: 'Ini adalah komentar kedua',
          createdAt: '2021-06-21T07:00:01.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      ],
    };

    const action = {
      type: 'DOWN_VOTE_COMMENT_DETAIL',
      payload: {
        userId: 'users-1',
        commentId: 'comment-1',
      },
    };

    // Action
    const nextState = detailThreadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        { ...initialState.comments[0], downVotesBy: [] },
        { ...initialState.comments[1] },
      ],
    });
  });
});
