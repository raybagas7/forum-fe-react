import { ActionType } from './action';

function detailThreadReducer(detailThread = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    default: return detailThread;
  }
}

export default detailThreadReducer;
