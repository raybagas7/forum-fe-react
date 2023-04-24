import React from 'react';
import { Link } from 'react-router-dom';
import ThreadActions from './ThreadActions';
import ThreadOwner from './ThreadOwner';
import { postedAt } from '../../utils';

// AiFillDislike, AiFillLike
// upVotesBy, downVotesBy, totalComments, ownerId
function ThreadsList({
  id, user, title, body, category, createdAt, upVotesBy, downVotesBy, authUser
}) {
  return (
    <Link to={`/threads/${id}`}>
      <article
        className="flex cursor-pointer flex-col gap-3 border-b border-solid border-[#393E46]
      p-5 pb-3 transition duration-100 hover:bg-[#393E46]/30"
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <ThreadOwner owner={user.avatar} />
            <div>
              <div className="text-sm">
                <span className="text-[#00ADB5] after:m-1 after:text-[#858a91] after:content-['·']">
                  {user.name}
                </span>
                <span className="after:m-1 text-[#858a91] after:content-['·']">
                  {user.email}
                </span>
                <span className="text-[#858a91]">{postedAt(createdAt)}</span>
              </div>
              <span className="text-xs before:content-['#']">{category}</span>
            </div>
          </div>
          <h4 className="text-xl">
            <span className="text-[#00ADB5]">{title}</span>
          </h4>
        </div>
        <article className="h-fit w-full break-words rounded-lg border border-solid border-[#393E46] p-3">
          <div className="a line-clamp-6" dangerouslySetInnerHTML={{ __html: body }} />
        </article>
        {authUser
          ? <ThreadActions upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
          : null}
      </article>
    </Link>
  );
}

export default ThreadsList;
