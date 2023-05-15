import React from 'react';
import GlobalCategoryItem from './GlobalCategoryItem';

function GlobalCategories({ categories, chosenCategory, chosenCategoryHandler }) {
  return (
    <div className="flex-1">
      <div className="fixed mt-5 w-[400px]">
        <div className="rounded-xl bg-[#393E46] p-5">
          <h2 className="mb-4 text-xl">Kategori Popular</h2>
          <div className="flex mb-1 flex-wrap gap-1">
            {categories.map((category) => (
              <GlobalCategoryItem
                key={category}
                category={category}
                chosenCategory={chosenCategory}
                chosenCategoryHandler={chosenCategoryHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalCategories;
