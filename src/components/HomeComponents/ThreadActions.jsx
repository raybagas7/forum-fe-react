import React from 'react';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from 'react-icons/ai';

function ThreadActions({ upVotesBy, downVotesBy }) {
  function handleChildClick(e) {
    e.preventDefault();
    // console.log('child');
  }
  return (
    <div className="relative flex gap-3">
      <div className="flex rounded-full bg-white/10">
        <button
          type="button"
          onClick={handleChildClick}
          className="cursor-pointer rounded-l-full p-2 pl-3 pr-0 transition duration-100 hover:bg-white/20"
        >
          <div className="flex items-center justify-center gap-1 border-r border-solid border-white/30 pr-2 text-xs">
            <AiOutlineLike className="h-5 w-5 text-[#EEEEEE]" />
            <span>{upVotesBy.length}</span>
          </div>
        </button>
        <button
          type="button"
          onClick={handleChildClick}
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

export default ThreadActions;
