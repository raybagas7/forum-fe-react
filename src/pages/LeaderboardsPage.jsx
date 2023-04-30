import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import Categories from '../components/HomeComponents/Categories';
import LeaderboardsContainer from '../components/LeaderBoardsComponents/LeaderboardsContainer';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardsPage() {
  const {
    threads = [],
    leaderboards = [],
    authUser = null,
  } = useSelector(((states) => states));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  const categories = threads.map((thread) => thread.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <div className="flex h-full w-full justify-between gap-5">
        <Navigation authUser={authUser} />
        <LeaderboardsContainer leaderboards={leaderboards} />
        <Categories categories={categories} />
      </div>
    </div>
  );
}

export default LeaderboardsPage;
