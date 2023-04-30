import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
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
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const categories = threads.map((thread) => thread.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  // if (!detailThread) {
  //   return null;
  // }

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <div className="flex h-full w-full justify-between gap-5">
        <Navigation authUser={authUser} />
        {/* <DetailThreadContent {...detailThread} authUser={authUser} /> */}

        {detailThread
          ? <DetailThreadContent {...detailThread} authUser={authUser} />
          : (
            <section className="w-[615px] h-screen flex justify-center items-center max-w-[615px]">
              <Spinner
                color="info"
                aria-label="Success spinner example"
              />
            </section>
          )}
        <Categories categories={categories} />
      </div>
    </div>
  );
}

export default DetailPage;
