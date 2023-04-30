import React from 'react';

function CategoryItem({ category, chosenCategory, chosenCategoryHandler }) {
  const onClickCategory = () => {
    chosenCategoryHandler(category);
  };
  // console.log(chosenCategoryHandler);
  return (
    <div>
      {category === chosenCategory
        ? (
          <button
            type="button"
            onClick={onClickCategory}
            className="cursor-pointer rounded-full bg-[#00ADB5] p-1 pl-3 pr-3 before:content-['#'] hover:bg-white/30"
          >
            {category}
          </button>
        ) : (
          <button
            type="button"
            onClick={onClickCategory}
            className="cursor-pointer rounded-full bg-white/10 p-1 pl-3 pr-3 before:content-['#'] hover:bg-white/30"
          >
            {category}
          </button>
        )}
    </div>
  );
}

export default CategoryItem;
