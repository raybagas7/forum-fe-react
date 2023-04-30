import React from 'react';
// import ThreadActions from '../HomeComponents/ThreadActions';
import { postedAt } from '../../utils';
import DetailOwnerAvatar from './DetailOwnerAvatar';
import ThreadActions from '../HomeComponents/ThreadActions';

// title, category, comments, createdAt, downVotesBy, id, owner, title, upVotesBy
function DetailThreadContent({
  title, createdAt, category, body, owner, authUser, upVotesBy, downVotesBy
}) {
//   console.log(id);
  return (
    <section className="w-[615px] max-w-[615px] rounded-lg border border-b-0 border-solid border-[#393E46]">
      <article
        className="flex flex-col gap-3 border-b border-solid border-[#393E46]
      p-5 pb-3 transition duration-100"
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
          ? <ThreadActions upVotesBy={upVotesBy} downVotesBy={downVotesBy} />
          : null}
      </article>
    </section>
  );
}

export default DetailThreadContent;
