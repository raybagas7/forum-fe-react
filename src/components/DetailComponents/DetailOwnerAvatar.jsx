import { Avatar } from 'flowbite-react';
import React from 'react';

function DetailOwnerAvatar({ avatar }) {
  return (
    <div>
      <Avatar
        img={avatar}
        size="md"
        rounded
      />
    </div>
  );
}

export default DetailOwnerAvatar;
