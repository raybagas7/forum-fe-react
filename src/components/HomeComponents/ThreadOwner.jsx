import { Avatar } from 'flowbite-react';
import React from 'react';

function ThreadOwner({ owner }) {
  return (
    <div>
      <Avatar
        img={owner}
        placeholderInitials="PP"
        size="md"
        rounded
      />

    </div>
  );
}

export default ThreadOwner;
