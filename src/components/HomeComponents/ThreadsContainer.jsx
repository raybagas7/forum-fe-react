import React from 'react';
import { useDispatch } from 'react-redux';
import ThreadInput from './ThreadInput';
import ThreadsList from './ThreadsList';
import { asyncAddThread } from '../../states/threads/action';

function ThreadsContainer({ threads, authUser }) {
  // console.log(threads);
  const dispatch = useDispatch();

  const onAddThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
  };

  return (
    <section className="w-[615px] max-w-[615px] rounded-lg border border-b-0 border-solid border-[#393E46]">
      {
      authUser
        ? <ThreadInput avatar={authUser.avatar} addThread={onAddThread} />
        : null
    }

      {threads.map((thread) => (
        <ThreadsList key={thread.id} {...thread} authUser={authUser} />
      ))}
    </section>
  );
}

export default ThreadsContainer;
