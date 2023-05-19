import React from 'react';
import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils';
import ThreadActions from '../HomeComponents/ThreadActions';
import shape from '../../utils/varshape';
import GlobalVoteCount from '../GlobalVoteCount';

function DetailComments({
  threadId,
  id,
  owner,
  createdAt,
  content,
  upVotesBy,
  downVotesBy,
  authUser,
  onUpVoteComment,
  onDownVoteComment
}) {
  return (
    <article
      className="flex gap-3 p-5 pb-3 border-b border-solid border-[#393E46]"
    >
      <div>
        <Avatar
          img={owner.avatar}
          size="md"
          rounded
        />
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex gap-3 items-center">
          <div>
            <div className="text-sm">
              <span className="text-[#00ADB5] after:m-1 after:text-[#858a91] after:content-['·']">
                {owner.name}
              </span>
              <span className="text-[#858a91]">{postedAt(createdAt)}</span>
            </div>
          </div>
        </div>
        <article className="h-fit w-full break-words rounded-lg border border-solid border-[#393E46] p-3">
          <div className="a line-clamp-6" dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        {authUser
          ? (
            <ThreadActions
              threadId={threadId}
              commentId={id}
              upVotesBy={upVotesBy}
              downVotesBy={downVotesBy}
              onUpVote={onUpVoteComment}
              onDownVote={onDownVoteComment}
              userId={authUser.id}
            />
          )
          : (
            <GlobalVoteCount
              upVotesBy={upVotesBy}
              downVotesBy={downVotesBy}
            />
          )}
      </div>

    </article>
  );
}

DetailComments.propTypes = {
  threadId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape(shape.authUserShape).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.shape(shape.authUserShape).isRequired,
  onUpVoteComment: PropTypes.func.isRequired,
  onDownVoteComment: PropTypes.func.isRequired
};

export default DetailComments;
