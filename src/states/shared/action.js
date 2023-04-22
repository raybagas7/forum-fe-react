import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { setAuthUserActionCreator } from '../authUser/action';

function asyncPopulateUsersAndTalks() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await api.seeAllUsers();
      const threads = await api.seeAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAutoLoginAfterSignup({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const authUser = await api.register({ name, email, password });
      const token = await api.login({ email, password });
      api.putAccessToken(token);

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndTalks, asyncAutoLoginAfterSignup };
