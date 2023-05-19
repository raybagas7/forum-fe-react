import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function Categories({ categories, chosenCategory, chosenCategoryHandler }) {
  return (
    <div className="flex-1">
      <div className="fixed mt-5 w-[400px]">
        <div className="rounded-xl bg-[#393E46] p-5">
          <h2 className="mb-3 text-xl">Kategori Popular</h2>
          <div className="flex flex-wrap gap-1">
            {categories.map((category) => (
              <CategoryItem
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  chosenCategory: PropTypes.string,
  chosenCategoryHandler: PropTypes.func.isRequired
};

Categories.defaultProps = {
  chosenCategory: ''
};

export default Categories;
