import { Alert, Avatar, Progress } from 'flowbite-react';
import React, { useState } from 'react';
// / addComment, threadId,
function DetailThreadCommentInput({ authUser }) {
  const [commentBoxFocus, setCommentBoxFocus] = useState(false);
  const [content, setContent] = useState('as');
  // console.log(authUser);
  const addNewComment = (e) => {
    // if (content.trim()) {
    //   addComment({ content, id: threadId });
    // }
    e.preventDefault();
  };

  const handleContentChange = ({ target }) => {
    setContent(target.textContent);
  };

  return (
    <div className="relative border-t border-solid border-[#393E46] p-3">
      {content.length > 200 ? (
        <Alert
          color="failure"
        >
          <span>
            <span className="text-sm">
              Content too long, 200 character maximum
            </span>
          </span>
        </Alert>
      ) : null}
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
              id="my-div"
              contentEditable
              className={`h-auto outline-none focus:border-b p-1 pt-5 
              ${content.length > 200 ? 'text-red-500' : null}`}
              placeholder="Berikan komentarmu"
              onFocus={() => setCommentBoxFocus(true)}
              onInput={handleContentChange}
            />
          </div>
        </div>
        {commentBoxFocus ? (
          <div className="relative inline-block h-10 w-full">
            <Progress
              progress={(content.length + 0.1) / 2}
              size="sm"
              color={`${content.length > 200 ? 'red' : 'blue'}`}
            />
            <button
              onClick={content.length > 200 ? (e) => (e.preventDefault()) : addNewComment}
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
