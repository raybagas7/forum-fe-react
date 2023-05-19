import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';
import ThreadActions from './ThreadActions';
import { postedAt } from '../../utils';
import shape from '../../utils/varshape';
import GlobalVoteCount from '../GlobalVoteCount';

function ThreadsContent({
  id,
  user,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  authUser,
  onUpVote,
  onDownVote,
  totalComments
}) {
  return (
    <Link to={`/threads/${id}`}>
      <article
        className="flex cursor-pointer flex-col gap-3 border-b border-solid border-[#393E46]
      p-5 pb-3 transition duration-100 hover:bg-[#393E46]/30"
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <Avatar
              img={user.avatar}
              placeholderInitials="PP"
              size="md"
              rounded
            />
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
          ? (
            <ThreadActions
              userId={authUser.id}
              threadId={id}
              upVotesBy={upVotesBy}
              downVotesBy={downVotesBy}
              onUpVote={onUpVote}
              onDownVote={onDownVote}
              totalComments={totalComments}
            />
          )
          : (
            <GlobalVoteCount
              upVotesBy={upVotesBy}
              downVotesBy={downVotesBy}
              totalComments={totalComments}

            />
          )}
      </article>
    </Link>
  );
}

ThreadsContent.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape(shape.authUserShape).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.shape(shape.authUserShape),
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
};

ThreadsContent.defaultProps = {
  authUser: null,
};

export default ThreadsContent;
