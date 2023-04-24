import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Categories from '../components/HomeComponents/Categories';
import DetailThreadContent from '../components/DetailComponents/DetailThreadContent';
import { asyncReceiveThreadDetail } from '../states/detailThread/action';

function DetailPage() {
  const { id } = useParams();
  const {
    threads = [],
    detailThread = null,
    authUser = null,
  } = useSelector(((states) => states));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const categories = threads.map((thread) => thread.category);

  if (!detailThread) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <div className="flex h-full w-full justify-between gap-5">
        <Navigation authUser={authUser} />
        <DetailThreadContent {...detailThread} />
        <Categories categories={categories} />
      </div>
    </div>
  );
}

export default DetailPage;
