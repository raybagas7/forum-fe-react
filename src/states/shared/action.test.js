import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncAutoLoginAfterSignup, asyncPopulateUsersAndThreads } from './action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { setAuthUserActionCreator } from '../authUser/action';

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0
  },
  {
    id: 'thread-2',
    title: 'Thread Kedua',
    body: 'Ini adalah thread kedua',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-2',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0
  }
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg'
  }
];

const fakeLoginResponse = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbWFzMiIsIm5hbWUiOiJEaW1hcyBTYXB1dHJhIiwicGhvdG8iOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1EaW1hcyBTYXB1dHJhJmJhY2tncm91bmQ9cmFuZG9tIiwiaXNfcGVybWFuZW50IjpmYWxzZSwiaWF0IjoxNjYzODQwNzY0fQ._HrzpinFYX_m9WfvM-lGCdVrnhnaGHhzt1e6eATE1Iw';

const fakeErrorResponse = new Error('Something went wrong');

describe('asyncPopulateUsersAndThread thunk', () => {
  beforeEach(() => {
    api._seeAllUsers = api.seeAllUsers;
    api._seeAllThreads = api.seeAllThreads;
    api._register = api.register;
    api._login = api.login;
  });

  afterEach(() => {
    api.seeAllUsers = api._seeAllUsers;
    api.seeAllThreads = api._seeAllThreads;
    api.register = api._register;
    api.login = api._login;

    delete api._seeAllUsers;
    delete api._seeAllThreads;
    delete api._register;
    delete api._login;
  });

  it('should dispatch asyncPopulateUsersAndThreads action correctly when all data fetching is success', async () => {
    // Arrange
    // Stub
    api.seeAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.seeAllThreads = () => Promise.resolve(fakeThreadsResponse);

    // Mock dispatch
    const dispatch = jest.fn();

    // Action
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch asyncPopulateUsersAndThreads action and call alert correctly when data fetching failed', async () => {
    // Arrange
    // Stub
    api.seeAllUsers = () => Promise.reject(fakeErrorResponse);
    api.seeAllThreads = () => Promise.reject(fakeErrorResponse);

    // Mock dispatch
    const dispatch = jest.fn();

    // Mock alert
    window.alert = jest.fn();

    // Action
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });

  it('should dispatch asyncAutoLoginAfterSignup action correctly when all data fetching is success', async () => {
    // Arrange
    // Stub
    api.register = () => Promise.resolve(fakeUsersResponse);
    api.login = () => Promise.resolve(fakeLoginResponse);

    // Mock dispatch
    const dispatch = jest.fn();

    // Action
    await asyncAutoLoginAfterSignup({ name: 'john_doe', email: 'john@example.com', passwod: 'testjohn' })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch asyncAutoLoginAfterSignup action and call alert correctly when data fetching failed', async () => {
    // Arrange
    // Stub
    api.register = () => Promise.reject(fakeErrorResponse);
    api.login = () => Promise.resolve(fakeErrorResponse);

    // Mock dispatch
    const dispatch = jest.fn();

    // Mock alert
    window.alert = jest.fn();

    // Action
    await asyncAutoLoginAfterSignup({ name: 'john_doe', email: 'john@example.com', passwod: 'testjohn' })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
