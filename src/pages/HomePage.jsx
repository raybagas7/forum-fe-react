import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import ThreadsContainer from '../components/HomeComponents/ThreadsContainer';
import Categories from '../components/HomeComponents/Categories';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { setCategory } from '../states/chosenCategory/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser = null,
    chosenCategory = '',
  } = useSelector(((states) => states));

  const dispatch = useDispatch();

  const chosenCategoryHandler = (category) => {
    dispatch(setCategory(category));
  };

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser ? authUser.id : null
  }));

  const filteredThreadList = () => threadList.filter((thread) => thread.category.toLowerCase()
    .includes(chosenCategory.toLowerCase()));

  const categories = threads.map((thread) => thread.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <div className="flex h-full w-full justify-between gap-5 max-xl:gap-0">
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
