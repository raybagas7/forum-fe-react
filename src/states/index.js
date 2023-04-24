import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import isPreloadReducer from './isPreload/reducer';
import authUserReducer from './authUser/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import detailThreadReducer from './detailThread/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    leaderboards: leaderboardsReducer,
    users: usersReducer,
    threads: threadsReducer,
    detailThread: detailThreadReducer,
    loadingBar: loadingBarReducer
  }
});

export default store;
