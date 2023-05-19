import React from 'react';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import PropTypes from 'prop-types';

function GlobalVoteCount({
  upVotesBy, downVotesBy
}) {
  const onUpVoteClick = (e) => {
    e.preventDefault();
    alert('Login First');
  };

  const ondownVoteClick = (e) => {
    e.preventDefault();
    alert('Login First');
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

            <AiOutlineLike className="h-5 w-5 text-[#EEEEEE]" />
            <span>{upVotesBy.length}</span>
          </div>
        </button>
        <button
          type="button"
          onClick={ondownVoteClick}
          className="cursor-pointer rounded-r-full p-2 pr-3 transition duration-100 hover:bg-white/20"
        >
          <div className="flex items-center justify-center gap-1 text-xs">
            <AiOutlineDislike className="h-5 w-5 text-[#EEEEEE]" />
            <span>{downVotesBy.length}</span>
          </div>
        </button>
      </div>
      <div className="absolute right-0 flex cursor-pointer items-center justify-center gap-1 rounded-full bg-white/10 p-2 pl-3 pr-3 text-xs transition duration-100 hover:bg-white/20">
        <AiOutlineShareAlt className="h-5 w-5 text-[#EEEEEE]" />
        <span>Share</span>
      </div>
    </div>
  );
}

GlobalVoteCount.propTypes = {
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GlobalVoteCount;
