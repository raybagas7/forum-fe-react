import { Avatar, Tooltip } from 'flowbite-react';
import React from 'react';
import { SlOptions } from 'react-icons/sl';
import PropTypes from 'prop-types';

function UserProfile({
  logout, email, avatar, name
}) {
  const content1 = (
    <button
      type="button"
      onClick={logout}
      className="cursor-pointer w-full text-left p-2 pl-3 hover:bg-white/20"
    >
      Logout
      {' '}
      {email}
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
              img={avatar}
              placeholderInitials="PP"
              size="md"
              rounded
            />
            <div className="flex flex-col">
              <div className="text-left"><span>{name}</span></div>
              <div className="text-grey-500 text-left text-[#858a91]">
                <span>{email}</span>
              </div>
            </div>
          </div>
          <SlOptions />
        </button>
      </Tooltip>
    </div>
  );
}

UserProfile.propTypes = {
  logout: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default UserProfile;
