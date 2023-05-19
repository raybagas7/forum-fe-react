import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function GlobalCategoryItem({ category, chosenCategory, chosenCategoryHandler }) {
  const onClickCategory = () => {
    chosenCategoryHandler(category);
  };

  return (
    <div>
      {category === chosenCategory
        ? (
          <Link
            to="/"
            onClick={onClickCategory}
          >
            <div
              className="cursor-pointer rounded-full bg-[#00ADB5] p-1 pl-3 pr-3 before:content-['#'] hover:bg-[#00ADB5]/30"
            >
              {category}
            </div>
          </Link>
        ) : (
          <Link
            to="/"
            onClick={onClickCategory}
          >
            <div
              className="cursor-pointer rounded-full bg-white/10 p-1 pl-3 pr-3 before:content-['#'] hover:bg-white/30"
            >
              {category}
            </div>
          </Link>
        )}
    </div>
  );
}

GlobalCategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  chosenCategory: PropTypes.string,
  chosenCategoryHandler: PropTypes.func.isRequired
};

GlobalCategoryItem.defaultProps = {
  chosenCategory: ''
};

export default GlobalCategoryItem;
