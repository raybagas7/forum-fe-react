import React from 'react';

// title, category, comments, createdAt, downVotesBy, id, owner, title, upVotesBy
function DetailThreadContent({ id }) {
  console.log(id);
  return (
    <div className="flex w-[615px] flex-col rounded-lg border border-solid border-t-0 border-[#393E46]">
      <div className="p-5 text-center">
        <h2 className="text-xl">Ranking pengguna aktif</h2>
      </div>
    </div>
  );
}

export default DetailThreadContent;
