import React from 'react';
// import ThreadActions from '../HomeComponents/ThreadActions';
import { useDispatch } from 'react-redux';
import { postedAt } from '../../utils';
import DetailOwnerAvatar from './DetailOwnerAvatar';
import ThreadActions from '../HomeComponents/ThreadActions';
import DetailThreadCommentInput from './DetailThreadCommentInput';
import DetailComments from './DetailComments';
import {
  asyncDownVoteComment, asyncDownVoteDetailThread, asyncUpVoteComment, asyncUpVoteDetailThread
} from '../../states/detailThread/action';

// title, category, comments, createdAt, downVotesBy, id, owner, title, upVotesBy
function DetailThreadContent({
  addComment, id, title, createdAt, category, body, owner,
  authUser, upVotesBy, downVotesBy, comments
}) {
  const dispatch = useDispatch();

  const onUpVote = (threadid, voteBy) => {
    dispatch(asyncUpVoteDetailThread(threadid, voteBy));
  };

  const onDownVote = (threadid, voteBy) => {
    dispatch(asyncDownVoteDetailThread(threadid, voteBy));
  };

  const onUpVoteComment = (threadId, commentId, voteBy) => {
    dispatch(asyncUpVoteComment(threadId, commentId, voteBy));
  };

  const onDownVoteComment = (threadId, commentId, voteBy) => {
    dispatch(asyncDownVoteComment(threadId, commentId, voteBy));
  };
  return (
    <section className="w-[615px] max-w-[615px] rounded-lg border border-b-0 border-solid border-[#393E46]">
      <article
        className="flex flex-col gap-3 p-5 pb-3"
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <DetailOwnerAvatar avatar={owner.avatar} />
            <div>
              <div className="text-sm">
                <span className="text-[#00ADB5] after:m-1 after:text-[#858a91] after:content-['·']">
                  {owner.name}
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
              threadId={id}
              upVotesBy={upVotesBy}
              downVotesBy={downVotesBy}
              onUpVote={onUpVote}
              onDownVote={onDownVote}
              userId={authUser.id}
            />
          )
          : null}
      </article>
      <div className="border-b border-solid border-[#393E46] p-5 pb-3">
        {authUser
          ? <DetailThreadCommentInput addComment={addComment} threadId={id} authUser={authUser} />
          : null}
      </div>
      <div className="p-3 border-b border-solid border-[#393E46]">
        Comments
        (
        {comments.length}
        )
      </div>
      {
        comments.map((comment) => (
          <DetailComments
            key={comment.id}
            threadId={id}
            {...comment}
            authUser={authUser}
            onUpVoteComment={onUpVoteComment}
            onDownVoteComment={onDownVoteComment}
          />
        ))
      }
    </section>
  );
}

export default DetailThreadContent;
