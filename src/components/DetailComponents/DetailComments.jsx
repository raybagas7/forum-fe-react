import React from 'react';
import DetailOwnerAvatar from './DetailOwnerAvatar';
import { postedAt } from '../../utils';
import ThreadActions from '../HomeComponents/ThreadActions';

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
  // console.log('commentId', id);

  return (
    <article
      className="flex gap-3 p-5 pb-3 border-b border-solid border-[#393E46]"
    >
      <DetailOwnerAvatar avatar={owner.avatar} />
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
          : null}
      </div>

    </article>
  );
}

export default DetailComments;
