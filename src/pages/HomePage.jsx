import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import ThreadsContainer from '../components/HomeComponents/ThreadsContainer';
import Categories from '../components/HomeComponents/Categories';
import { asyncPopulateUsersAndTalks } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser = null,
  } = useSelector(((states) => states));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndTalks());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser ? authUser.id : null
  }));

  const categories = threads.map((thread) => thread.category);

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <div className="flex h-full w-full justify-between gap-5">
        <Navigation authUser={authUser} />
        <ThreadsContainer threads={threadList} authUser={authUser} />
        <Categories categories={categories} />
      </div>
    </div>
  );
}

export default HomePage;
