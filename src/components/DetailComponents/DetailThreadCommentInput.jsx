import { Avatar } from 'flowbite-react';
import React, { useState } from 'react';

function DetailThreadCommentInput({ authUser }) {
  const [commentBoxFocus, setCommentBoxFocus] = useState(false);
  // console.log(authUser);

  return (
    <div className="relative border-t border-solid border-[#393E46] p-3">
      <form>
        <div className="flex gap-3">
          <div className="pt-3 shrink-0">
            <Avatar
              img={authUser.avatar}
              size="md"
              rounded
            />
          </div>
          <div className="w-full overflow-hidden">
            <div
              contentEditable
              className="h-auto outline-none focus:border-b p-1 pt-5"
              placeholder="Berikan komentarmu"
              onFocus={() => setCommentBoxFocus(true)}
            />
          </div>
        </div>
        {commentBoxFocus ? (
          <div className="relative inline-block h-10 w-full">
            <button
              type="submit"
              className="absolute mt-3 right-0 h-10 rounded-full bg-[#147a80] pl-3
              pr-3 transition duration-300 hover:bg-[#00ADB5]"
            >
              Blaast
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default DetailThreadCommentInput;
