import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({ category, chosenCategory, chosenCategoryHandler }) {
  const onClickCategory = () => {
    chosenCategoryHandler(category);
  };

  return (
    <div>
      {category === chosenCategory ? (
        <button
          type="button"
          onClick={onClickCategory}
          className="max-w-[150px] cursor-pointer break-words rounded-full bg-[#00ADB5] p-1 pl-3 pr-3 hover:bg-[#00ADB5]/30"
        >
          <div className="line-clamp-1 before:content-['#']">{category}</div>
        </button>
      ) : (
        <button
          type="button"
          onClick={onClickCategory}
          className="max-w-[150px] cursor-pointer break-words rounded-full bg-white/10 p-1 pl-3 pr-3 hover:bg-white/30"
        >
          <div className="line-clamp-1 before:content-['#']">{category}</div>
        </button>
      )}
    </div>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  chosenCategory: PropTypes.string,
  chosenCategoryHandler: PropTypes.func.isRequired,
};

CategoryItem.defaultProps = {
  chosenCategory: '',
};

export default CategoryItem;
