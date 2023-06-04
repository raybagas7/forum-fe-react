import React from 'react';
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import PropTypes from 'prop-types';

function ThreadActions({
  totalComments, threadId, commentId, upVotesBy, downVotesBy, onUpVote, onDownVote, userId
}) {
  const onUpVoteClick = (e) => {
    e.preventDefault();
    if (commentId) {
      onUpVote(threadId, commentId, upVotesBy);
    } else {
      onUpVote(threadId, upVotesBy);
    }
  };

  const ondownVoteClick = (e) => {
    e.preventDefault();
    if (commentId) {
      onDownVote(threadId, commentId, downVotesBy);
    } else {
      onDownVote(threadId, downVotesBy);
    }
  };

  return (
    <div className="relative flex gap-3">
      <div className="flex rounded-full bg-white/10">
        <button
          type="button"
          onClick={onUpVoteClick}
          className="cursor-pointer rounded-l-full p-2 pl-3 pr-0 transition duration-100 hover:bg-white/20"
        >
          <div className="flex items-center justify-center gap-1 border-r border-solid border-white/30 pr-2 text-xs">
            {upVotesBy.includes(userId)
              ? <AiFillLike className="h-5 w-5 text-[#EEEEEE]" data-testid="fill-like" />
              : <AiOutlineLike className="h-5 w-5 text-[#EEEEEE]" data-testid="outline-like" />}
            <span>{upVotesBy.length}</span>
          </div>
        </button>
        <button
          type="button"
          onClick={ondownVoteClick}
          className="cursor-pointer rounded-r-full p-2 pr-3 transition duration-100 hover:bg-white/20"
        >
          <div className="flex items-center justify-center gap-1 text-xs">
            {downVotesBy.includes(userId)
              ? <AiFillDislike className="h-5 w-5 text-[#EEEEEE]" data-testid="fill-dislike" />
              : <AiOutlineDislike className="h-5 w-5 text-[#EEEEEE]" data-testid="outline-dislike" />}
            <span>{downVotesBy.length}</span>
          </div>
        </button>
      </div>
      <div className="absolute right-0 flex gap-2">
        {totalComments ? (
          <div className="flex cursor-pointer items-center justify-center gap-1
      rounded-full bg-white/10 p-2 pl-3 pr-3 text-xs transition duration-100 hover:bg-white/20"
          >
            <FaRegComments className="h-5 w-5 text-[#EEEEEE]" />
            <span>{totalComments}</span>
          </div>
        ) : null}
        <div className="flex cursor-pointer items-center justify-center gap-1
      rounded-full bg-white/10 p-2 pl-3 pr-3 text-xs transition duration-100 hover:bg-white/20"
        >
          <AiOutlineShareAlt className="h-5 w-5 text-[#EEEEEE]" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}

ThreadActions.propTypes = {
  threadId: PropTypes.string.isRequired,
  commentId: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired
};

ThreadActions.defaultProps = {
  commentId: null,
};

export default ThreadActions;
