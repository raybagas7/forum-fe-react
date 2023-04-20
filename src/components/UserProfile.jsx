import { Avatar, Tooltip } from 'flowbite-react';
import React from 'react';
import { SlOptions } from 'react-icons/sl';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';

// const popover = (
//   <Popover
//     id="popover-basic"
//     className="flex h-16 w-64 items-center rounded-md
//   bg-[#222831] text-white shadow-behind shadow-white/20"
//   >
//     <Popover.Body className="w-full cursor-pointer p-2 pl-3 hover:bg-white/20">
//       Logout @Id
//     </Popover.Body>
//   </Popover>
// );

function UserProfile({ logout, authUser }) {
  const content1 = (
    <button
      type="button"
      onClick={logout}
      className="cursor-pointer w-full text-left p-2 pl-3 hover:bg-white/20"
    >
      Logout
      {' '}
      {authUser.email}
    </button>
  );
  return (
    <div>
      <Tooltip
        className="w-64 rounded-md pl-0 pr-0 py-3
       bg-[#222831] text-white shadow-behind shadow-white/20"
        content={content1}
        trigger="click"
      >
        <button
          type="button"
          className="si-bootstrap text-sm mb-5 flex w-64 cursor-pointer items-center justify-between
     rounded-full p-3 transition duration-100 hover:bg-[#393e46]"
        >
          <div className="flex gap-3">
            <Avatar
              img={authUser.avatar}
              placeholderInitials="PP"
              size="md"
              rounded
            />
            <div className="flex flex-col">
              <div className="text-left"><span>{authUser.name}</span></div>
              <div className="text-grey-500 text-left text-[#858a91]">
                <span>{authUser.email}</span>
              </div>
            </div>
          </div>
          <SlOptions />
        </button>
      </Tooltip>
    </div>
  );
}

export default UserProfile;
