import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  UP_VOTE_COMMENT_DETAIL: 'UP_VOTE_COMMENT_DETAIL',
  DOWN_VOTE_COMMENT_DETAIL: 'DOWN_VOTE_COMMENT_DETAIL',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment
    }
  };
}

function upVoteDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteDetailThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function upVoteDetailCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT_DETAIL,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteDetailCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT_DETAIL,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadDetailActionCreator());

    try {
      const detailThread = await api.seeThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAddComment({ content, id }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await api.createComment(content, id);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteDetailThread(threadId, upVoteBy) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(upVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      if (upVoteBy.includes(authUser.id)) {
        await api.neutralVoteThread(threadId);
      } else {
        await api.upVoteThread(threadId);
      }
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteDetailThread(threadId, downVoteBy) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(downVoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      if (downVoteBy.includes(authUser.id)) {
        await api.neutralVoteThread(threadId);
      } else {
        await api.downVoteThread(threadId);
      }
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(threadId, commentId, upVoteBy) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(upVoteDetailCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      if (upVoteBy.includes(authUser.id)) {
        await api.neutralVoteComment(threadId, commentId);
      } else {
        await api.upVoteComment(threadId, commentId);
      }
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteComment(threadId, commentId, downVoteBy) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(downVoteDetailCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      if (downVoteBy.includes(authUser.id)) {
        await api.neutralVoteComment(threadId, commentId);
      } else {
        await api.downVoteComment(threadId, commentId);
      }
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  upVoteDetailThreadActionCreator,
  downVoteDetailThreadActionCreator,
  upVoteDetailCommentActionCreator,
  downVoteDetailCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncUpVoteDetailThread,
  asyncDownVoteDetailThread,
  asyncUpVoteComment,
  asyncDownVoteComment
};
