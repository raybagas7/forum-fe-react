import { ActionType } from './action';

function detailThreadReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.ADD_COMMENT:
      return {
        ...detailThread,
        comments: {
          ...detailThread.comments.concat(action.payload.comment)
        }
      };
    default: return detailThread;
  }
}

export default detailThreadReducer;
