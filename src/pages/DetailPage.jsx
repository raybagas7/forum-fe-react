import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import Navigation from '../components/Navigation';
import DetailThreadContent from '../components/DetailComponents/DetailThreadContent';
import { asyncAddComment, asyncReceiveThreadDetail } from '../states/detailThread/action';
import GlobalCategories from '../components/GlobalCategories';
import { setCategory } from '../states/chosenCategory/action';

function DetailPage() {
  const { id } = useParams();
  const {
    threads = [],
    detailThread = null,
    authUser = null,
    chosenCategory = ''
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const chosenCategoryHandler = (category) => {
    dispatch(setCategory(category));
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const categories = threads.map((thread) => thread.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const onAddComment = (content, threadId) => {
    dispatch(asyncAddComment({ content, id: threadId }));
  };

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <div className="flex h-full w-full justify-between gap-5">
        <Navigation authUser={authUser} />

        {detailThread
          ? (
            <DetailThreadContent
              addComment={onAddComment}
              {...detailThread}
              authUser={authUser}
            />
          )
          : (
            <section className="w-[615px] h-screen flex justify-center items-center max-w-[615px]">
              <Spinner
                color="info"
                aria-label="Load"
              />
            </section>
          )}
        <GlobalCategories
          categories={categories}
          chosenCategory={chosenCategory}
          chosenCategoryHandler={chosenCategoryHandler}
        />
      </div>
    </div>
  );
}

export default DetailPage;
