import React, { useEffect, useState } from 'react';
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
  const [chosenCategory, setChosenCategory] = useState('');

  const dispatch = useDispatch();

  const chosenCategoryHandler = (category) => {
    if (chosenCategory === category) {
      setChosenCategory('');
    } else {
      setChosenCategory(category);
    }
  };

  useEffect(() => {
    dispatch(asyncPopulateUsersAndTalks());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser ? authUser.id : null
  }));

  const filteredThreadList = () => threadList.filter((thread) => thread.category.toLowerCase()
    .includes(chosenCategory.toLowerCase()));

  const categories = threads.map((thread) => thread.category);

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <div className="flex h-full w-full justify-between gap-5">
        <Navigation authUser={authUser} />
        <ThreadsContainer
          threads={filteredThreadList()}
          authUser={authUser}
        />
        <Categories
          categories={categories}
          chosenCategory={chosenCategory}
          chosenCategoryHandler={chosenCategoryHandler}
        />
      </div>
    </div>
  );
}

export default HomePage;
