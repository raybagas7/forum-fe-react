import { Avatar } from 'flowbite-react';
import React from 'react';

function LeaderboardsContainer({ leaderboards }) {
  return (
    <div className="flex w-[615px] flex-col rounded-lg border border-solid border-t-0 border-[#393E46]">
      <div className="p-5 text-center">
        <h2 className="text-xl">Ranking pengguna aktif</h2>
      </div>
      <section className="">
        {leaderboards.map((person) => (
          <div key={person.user.id} className=" border-b-0 border-r-0 border-l-0 flex max-w-[615px] border border-solid border-[#393E46]">
            <div className="flex m-5 w-full justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                <Avatar
                  img={person.user.avatar}
                  placeholderInitials="PP"
                  size="md"
                  rounded
                />
                <div>
                  <span className="after:m-1 after:text-[#858a91] after:content-['·']">
                    {person.user.name}
                  </span>
                  <span className="text-[#858a91]">{person.user.email}</span>
                </div>
              </div>
              <span>{person.score}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default LeaderboardsContainer;
